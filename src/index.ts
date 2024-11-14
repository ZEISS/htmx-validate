export {}

declare global {
  interface Window {
    HTMXValidate: typeof HTMXValidateElement
  }
  interface HTMLElementTagNameMap {
    'htmx-validate': HTMXValidateElement
  }
}

type HTMXValidateError = {
  name: string
  message: string
}

type HTMXValidateSuccess = {
  name: string
  message: string
}

export class HTMXValidateElement extends HTMLDivElement {
  constructor() {
    super()
  }

  get htmxSuccessFor(): string {
    return this.getAttribute('htmx-success-for') || ''
  }

  get htmxErrorFor(): string {
    return this.getAttribute('htmx-error-for') || ''
  }

  showError(e: CustomEvent<HTMXValidateError>): void {
    if (!this.htmxErrorFor) {
      return
    }

    const el = document.getElementById(this.htmxErrorFor)
    if (!el) {
      return
    }

    el.classList.remove('hidden')
    el.textContent = e.detail.message
  }

  showSuccess(e: CustomEvent<HTMXValidateError>): void {
    if (!this.htmxSuccessFor) {
      return
    }

    const el = document.getElementById(this.htmxSuccessFor)
    if (!el) {
      return
    }

    el.classList.remove('hidden')
    el.textContent = e.detail.message
  }

  connectedCallback() {
    window.addEventListener('htmx-validate:error', ((e: CustomEvent<HTMXValidateError>) =>
      this.showError(e)) as EventListener)
    window.addEventListener('htmx-validate:success', ((e: CustomEvent<HTMXValidateSuccess>) =>
      this.showSuccess(e)) as EventListener)
  }

  disconnectedCallback(): void {
    window.removeEventListener('htmx-validate:error', ((e: CustomEvent<HTMXValidateError>) =>
      this.showError(e)) as EventListener)
    window.removeEventListener('htmx-validate:success', ((e: CustomEvent<HTMXValidateSuccess>) =>
      this.showSuccess(e)) as EventListener)
  }
}

customElements.define('htmx-validate', HTMXValidateElement, {extends: 'div'})

export const defineExampleElement = () => {
  customElements.define('htmx-validate', HTMXValidateElement)
}

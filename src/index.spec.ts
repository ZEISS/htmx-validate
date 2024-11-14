import {fixture, html} from '@open-wc/testing-helpers'
import {HTMXValidateElement} from './index'
import {describe, it, expect, beforeEach} from 'vitest'

describe('htmx-validate', () => {
  let element: HTMXValidateElement

  beforeEach(async () => {
    element = await fixture(html`<htmx-validate></htmx-validate>`)
  })

  it('should render the element', () => {
    expect(element).toBeDefined()
  })
})

# HTMX Validate Element

[![Node CI](https://github.com/ZEISS/htmx-validate/actions/workflows/main.yml/badge.svg)](https://github.com/ZEISS/htmx-validate/actions/workflows/main.yml)
[![Taylor Swift](https://img.shields.io/badge/secured%20by-taylor%20swift-brightgreen.svg)](https://twitter.com/SwiftOnSecurity)
[![Volkswagen](https://auchenberg.github.io/volkswagen/volkswargen_ci.svg?v=1)](https://github.com/auchenberg/volkswagen)
![GitHub License](https://img.shields.io/github/license/ZEISS/htmx-validate)

This is a simple example of how to use HTMX to validate a form element.

## Getting Started

`htmx-validate` is a simple example of how to use HTMX to validate a form element.

```html
<div htmx-error-for="email-input" is="htmx-validate"></div>
```

The element listens for the following events.

* `htmx-validate:error` - Triggered when the input is invalid.
* `htmx-validate:success` - Triggered when the input is valid.

## License

[MIT](/LICENSE)

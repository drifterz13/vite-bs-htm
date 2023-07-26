import './scss/styles.scss'

import { render } from 'preact'
import { html } from '../utils'
import { App } from './App'

export function createLeadForm(opts: { target: string }) {
  const el = document.querySelector(opts.target)
  if (!el) {
    console.error(`No element found with selector: ${opts.target}`)
    return
  }

  render(html`<${App} />`, el)
}

import './scss/styles.scss'

import { Component, render } from 'preact'
import { html } from '../utils'
import { Form } from './components/Form'
import { ILeadFormOption } from './types'

type State = {
  email: string
  password: string
  genre: string
}

class App extends Component<{}, State> {
  onChange = (e: Event) => {
    const { name, value } = e.target as HTMLInputElement
    this.setState({ [name]: value })
  }
  onSelect = (val: string) => {
    this.setState({ genre: val })
  }
  render({}, { email = '', password = '', genre = '' }: State) {
    return html`
      <div class="container">
        <p>state: <pre>${JSON.stringify({ email, password, genre })}</pre></p>

        <div class="mt-3 shadow rounded p-4">
          <h5 class="text-center mb-3">We're experts in property</h5>

          <${Form} 
            email=${email} 
            password=${password} genre=${genre} 
            onChange=${this.onChange} onSelect=${this.onSelect} />
        </div>
      </div>
    `
  }
}

export function createLeadForm(opts: ILeadFormOption) {
  const el = document.querySelector(opts.target)
  if (!el) {
    console.error(`No element found with selector: ${opts.target}`)
    return
  }

  render(html`<${App} />`, el)
}

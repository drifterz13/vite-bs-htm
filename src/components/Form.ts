import { Component } from 'preact'
import { html } from '../../utils'
import { Dropdown as GenreDropdown } from './Dropdown'

type Props = {
  email: string
  password: string
  genre: string
  onSelect: (val: string) => void
  onChange: (e: Event) => void
}

export class Form extends Component<Props> {
  render({ email, password, genre, onChange, onSelect }: Props) {
    return html`
      <form>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            name="email"
            type="email"
            class="form-control"
            id="email"
            value=${email}
            onChange=${(e: Event) => onChange(e)}
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            name="password"
            type="password"
            class="form-control"
            id="password"
            value=${password}
            onChange=${(e: Event) => onChange(e)}
          />
        </div>

        <div class="mb-3">
          <${GenreDropdown} genre=${genre} onSelect=${onSelect} />
        </div>

        <div class="mb-3">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    `
  }
}

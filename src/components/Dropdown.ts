import { Component } from 'preact'
import { html } from '../../utils'
import clsx from 'clsx'

type Props = {
  genre: string
  onSelect: (val: string) => void
}

type State = {
  show: boolean
}

export class Dropdown extends Component<Props, State> {
  toggleDropdown = () => {
    const { show } = this.state
    this.setState({ show: !show })
  }

  onSelect = (value: string) => {
    const { onSelect } = this.props
    this.toggleDropdown()
    onSelect(value)
  }

  render({ genre }: Props, { show = false }: State) {
    return html`
      <div class="dropdown">
        <label for="dd" class="form-label">Genre</label>

        <div
          class="form-comtrol form-select"
          id="dd"
          role="button"
          aria-expanded=${show}
          onClick=${() => this.toggleDropdown()}
        >
          ${genre || 'Select genre...'}
        </div>
        <ul
          class=${clsx(
            'dropdown-menu w-100 border border-0 shadow mt-1',
            show && 'show'
          )}
          style="margin: -1px;"
        >
          <li>
            <div onClick=${() => this.onSelect('Rock')} class="dropdown-item">
              Rock
            </div>
          </li>
          <li>
            <div onClick=${() => this.onSelect('Punk')} class="dropdown-item">
              Punk
            </div>
          </li>
          <li>
            <div onClick=${() => this.onSelect('Jazz')} class="dropdown-item">
              Jazz
            </div>
          </li>
        </ul>
      </div>
    `
  }
}

class Header extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
            *{
              box-sizing: border-box;
            }

            header {
              align-items: center;
              display: flex;
              height: 4.0rem;
              justify-content: space-between;
            }
        </style>

        <header>
            <slot></slot>
        </header>
        `
  }
}

customElements.define('header-component', Header)

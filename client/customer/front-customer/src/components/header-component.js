class Header extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.justifyContent = this.getAttribute('justify-content')
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

        header{
          align-items: center;
          background-color: black;
          display: flex;
          justify-content: ${this.justifyContent};
          padding: 1rem;
          width: 100%;
        }

        header h3{
          color: white;
          font-family: "Lato", sans-serif;
          margin: 0;
          text-transform: capitalize;
        }

      </style>
  
        <header>
          <slot></slot>
        </header>
      `
  }
}

customElements.define('header-component', Header)

class Main extends HTMLElement {
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

            main{
                display: grid;
                gap: 2rem;
                grid-template-columns: 2fr 4fr;
            }
        </style>
        <main>
            <slot></slot>
        </main>
        `
  }
}

customElements.define('main-component', Main)

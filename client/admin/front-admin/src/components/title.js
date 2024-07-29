class Title extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
    this.title = this.getAttribute('title')
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
            *{
                box-sizing: border-box;
            }

            h1{
                color: hsl(0, 0%, 100%);
                font-family: "Ubuntu", sans-serif;
                margin: 0;
            }
        </style>

        <div class="title">
            <h1>${this.title}</h1>
        </div>
        `
  }
}

customElements.define('title-component', Title)

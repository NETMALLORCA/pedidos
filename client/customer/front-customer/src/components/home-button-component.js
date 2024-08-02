class HomeButton extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.title = this.getAttribute('title')
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      
      <style>
        svg{
          fill: hsl(0, 0%, 100%);
          height: 2rem;
          widows: 2rem;
        }
      </style>
  
      <section class="home-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>
      </section>
      `
  }
}

customElements.define('home-button-component', HomeButton)

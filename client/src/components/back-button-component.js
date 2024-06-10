class BackButton extends HTMLElement {

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
      /*html*/`
      
      <style>
        svg{
          fill: hsl(0, 0%, 100%);
          height: 2rem;
          widows: 2rem;
        }
      </style>
  
      <section class="home-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" /></svg>
      </section>
      `

    }
  }
  
  customElements.define('back-button-component', BackButton);
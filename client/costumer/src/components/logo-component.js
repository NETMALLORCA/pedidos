class Logo extends HTMLElement {

    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
    }
  
    connectedCallback () {
      this.render()
    }
  
    render () {
      this.shadow.innerHTML =
      /*html*/`
      
      <style>
        .logo img{
        align-items: left;
        fill: 2rem;
        padding: 2rem;
        max-width: 10vw;
        max-height 5vh;
      }
      </style>
        <div class="logo">
          <img src="../../images/logo.png" alt="logo.png">
        </div>
      `
    }
  }
  
  customElements.define('logo-component', Logo);
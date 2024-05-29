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
      
      <style>{
        align-items: left;
        fill: 1rem;
        padding: 20px;
      }
      </style>
      <div class="logo">
        <img src="../../images/logo.png" alt="logo.png">
      </div>
  
    `
    }
  }
  
  customElements.define('logo-component', Logo);
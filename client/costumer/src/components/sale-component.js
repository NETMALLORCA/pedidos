class Sale extends HTMLElement {

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
        .button {
          background: rgb(221,40,49);
          color: white;
          border: none;
          padding: 1rem 4rem;
          cursor: pointer;
          font-size: 16px;
          border-radius: 0.5rem;
          text-transform: uppercase;
        }

      </style>
        <div><button class="button">intro sale</button>
        </div>
      
      `
    }
  }
  
  customElements.define('sale-component', Sale);
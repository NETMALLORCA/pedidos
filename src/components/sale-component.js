class Title extends HTMLElement {

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
        h2{
            color: hsl(0, 0%, 100%);
            display: flex;
            font-family: "Lato", sans-serif;
            margin: 0;
            padding: 1rem;
            gap: 2rem;
            text-transform: capitalize;
        }
      </style>
  
      <div class="title">
        <h2>pedidos</h2>
      </div>
      `

    }
  }
  
  customElements.define('title-component', Title);
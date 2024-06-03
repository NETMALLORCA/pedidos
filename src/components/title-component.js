class Title extends HTMLElement {

    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
      this.title = this.getAttribute('title')
      this.fontSize = this.getAttribute('font-size')
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
            font-family: "Lato", sans-serif;
            font-size: ${this.fontSize};
            margin: 0;
            text-transform: capitalize;
        }
      </style>
  
      <div class="title">
        <h2>${this.title}</h2>
      </div>
      `

    }
  }
  
  customElements.define('title-component', Title);
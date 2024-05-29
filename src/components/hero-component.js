class Header extends HTMLElement {

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
        header{
          background-color: black;
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
          <h3>inicio</h3>
        </header>
      `
    }
  }
  
  customElements.define('header-component', Header);
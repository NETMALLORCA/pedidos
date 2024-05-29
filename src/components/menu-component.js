class Menu extends HTMLElement {

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
        h1, h2, h3, h4, h5, h6, span, li, label, a {
          font-family: "Roboto", sans-serif;
          margin: 0;
        }
        
        ul{
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        a{
          text-decoration: none;
          color: inherit;
        }
        
        img{
          object-fit: cover;
          width: 100%;
        }
        header{
          display: flex;
          align-items: center;   
          justify-content: space-between;
          width: 100%;
      }

        .menu-links ul{
          font-size: 1rem;
          text-transform: capitalize;
          display: flex;
          flex-direction: row;
          gap: 1rem;
          list-style: none;
          color: black;
          padding: 2rem;
        }
      </style>

      <div class="menu-links">
        <ul>
          <li><a href="#">demos</a></li>
          <li><a href="#">shop</a></li>
          <li><a href="#">product</a></li>
          <li><a href="#">features</a></li>
          <li><a href="#">documentation</a></li>
        </ul>
      </div>
    `
    }
  }
  
customElements.define('menu-component', Menu);
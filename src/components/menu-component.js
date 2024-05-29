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
        h2{
          main{
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        }

        .menu{
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .butom-element button{
          text-transform: capitalize;
          width: 100%;
          border-radius: 4rem;
          padding: 0.7rem;
          color: (256 3% 63%);
          font-size: medium;
        }
      </style>
      
      <section class="menu">
        <div class="butom-element">
          <button type="submit">nuevos pedidos</button>
        </div>
  
        <div class="butom-element">
          <button type="submit">pedidos anteriores</button>
        </div>
      </section>
      `
    }
  }
  
  customElements.define('menu-component', Menu);
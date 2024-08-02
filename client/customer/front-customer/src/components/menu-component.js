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
      /* html */`

      <style>
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
          font-size: 1.2rem;
          font-weight: 700;
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

customElements.define('menu-component', Menu)

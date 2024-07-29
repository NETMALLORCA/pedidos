class Orders extends HTMLElement {

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

        *{
          box-sizing: border-box;
        }

        h3{
          color: hsl(0, 0%, 100%);
          margin: 0;
        }

        span{
          color: hsl(0, 0%, 100%);
        }

        .orders{
          display: flex;
          flex-direction: column;
          gap: 1rem;
          height: 100vh;
          max-height: 100vh;
        }

        .orders-filter form{
          border-bottom: 2px solid hsl(0, 0%, 100%);
          display: grid;
          row-gap: 1rem;
          column-gap: 2rem;
          grid-template-columns: repeat(2, 1fr);
          padding-bottom: 1rem;
        }

        .orders-filter form input{
          padding: 0rem 0.5rem;
          width: 100%;
        }

        .orders-filter form input[type="number"]{
          padding: 0.2rem 0.5rem;
        }

        .orders-filter form button{
          background-color: hsl(0, 0%, 100%);
          border: none;
          outline: none;
          padding: 0.2rem 0;
          width: 100%;
        }

        .order{
          border-bottom: 2px solid hsl(0, 0%, 100%);
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(2, 1fr);
          padding-bottom: 1rem;
        }

        .order-total{
          display: flex;
          justify-content: flex-end;
        }

        .order-total span{
          font-size: 1.2rem;
        }

        .order-view{
          display: flex;
          justify-content: flex-end;
        }

        .order-view button{
          align-items: center;
          display: flex;
          justify-content: center;
          text-transform: capitalize;
          border-radius: 0.5rem;
          padding: 0.7rem;
          color: (256 3% 63%);
          font-size: 0.8rem;
          font-weight: 700;
          height: 1.5rem;
          width: 80%;
        }
      </style>
        <section class="orders">
          <div class="orders-filter">
            <form>
              <div class="form-element">
                <input type="number" name="reference">
              </div>
              <div class="form-element">
                <button>Buscar por referencia</button>
              </div>
              <div class="form-element">
                <input type="date" name="date">
              </div>
              <div class="form-element">
                <button>Buscar por fecha</button>
              </div>
            </form>
          </div>
          <div class="order">
            <div class="order-referece">
              <h3>0000000002</h3>
            </div>

            <div class="order-total">
              <span>180.00 €</span>
            </div>

            <div class="order-date">
              <span>20-05-2024 11:13</span>
            </div>

            <div class="order-view">
              <button>Ver pedido</button>
            </div>
          </div>

          <div class="order">
            <div class="order-referece">
              <h3>0000000002</h3>
            </div>

            <div class="order-total">
              <span>180.00 €</span>
            </div>

            <div class="order-date">
              <span>20-05-2024 11:13</span>
            </div>

            <div class="order-view">
              <button>Ver pedido</button>
            </div>
          </div>
      </section>
      `
    }
  }
  
  customElements.define('orders-component', Orders);
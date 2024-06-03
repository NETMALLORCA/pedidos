class Checkout extends HTMLElement {

    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
      this.data = {}
    }
  
    async connectedCallback () {
      await this.loadData()
      await this.render()
    }

    async loadData(){
      this.data = {
        reference: "00000000002"
      }
    }
  
    render () {
      this.shadow.innerHTML =
      /*html*/`
      <style>

        h2{
          margin: 0;
          color: hsl(0, 0%, 100%);
        }

        p{
          margin: 0;
          color: hsl(0, 0%, 100%);
        }

        .checkout{
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .checkout-title h2{
          font-size: 1.5rem;
          text-align: center;
        }

        .checkout-description p{
          font-size: 1.2rem;
          text-align: center;
        }

        .checkout-button button{
          width: 100%;
          border-radius: 4rem;
          padding: 0.7rem;
          color: (256 3% 63%);
          font-size: 1.2rem;
          font-weight: 700;
        }

      </style>
  
      <section class="checkout">
        <div class="checkout-title">
          <h2>Pedido realizado con éxito</h2>
        </div>
        <div class="checkout-description">
          <p>En breve recibirá un correo con los detalles. La referencia de su pedido es ${this.data.reference}</p>
        </div>
        <div class="checkout-button">
          <button>
            Volver a Inicio
          </button>
        </div>
      </section>
      `
    }
  }
  
  customElements.define('checkout-component', Checkout);
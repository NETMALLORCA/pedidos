class Cart extends HTMLElement {

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

        .products{
          display: flex;
          flex-direction: column;
          gap: 1rem;
          height: 80vh;
          max-height: 80vh;
        }

        .product{
          border-bottom: 2px solid hsl(0, 0%, 100%);
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(2, 1fr);
          padding-bottom: 1rem;
        }

        .product-name{

        }

        .product-total{
          display: flex;
          justify-content: flex-end;
        }

        .product-detail{
        
        }

        .product-amount{
          display: flex;
          justify-content: flex-end;
        }

        .amount-selector{
          height: 1.5rem;
          width: 2rem;
        }

        .amount-selector button{
          font-size: 1.1rem;
          height: 100%;
          width: 100%;
        }

        .display-amount{
          align-items: center;
          background-color: hsl(229 40% 43%);
          display: flex;
          height: 1.5rem;
          text-align: center;
          width: 2rem;
        }

        .display-amount span{
          width: 100%;
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
  
        <div class="products">
          <div class="product">

            <div class="product-name">
              <h3>cocacola</h3>
            </div>

            <div class="product-total">
              <span>180.00 €</span>
            </div>

            <div class="product-detail">
              <span>16u, 330ml</span>
            </div>

            <div class="product-amount">
              <span>2 x 90.00€</span>
            </div>
          </div>

          <div class="product">
            <div class="product-name">
              <h3>cocacola</h3>
            </div>

            <div class="product-total">
              <span>180.00 €</span>
            </div>

            <div class="product-detail">
              <span>16u, 330ml</span>
            </div>

            <div class="product-amount">
              <span>2 x 90.00€</span>
            </div>
          </div>
        </div>

        <div class="butom-element">
          <button>Ver pedido</button>
        </div>
      `
    }
  }
  
  customElements.define('cart-component', Cart);
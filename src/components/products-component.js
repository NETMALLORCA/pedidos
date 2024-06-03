class Products extends HTMLElement {

    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
      this.data = []
    }
  
    async connectedCallback () {
      await this.loadData()
      await this.render()
    }

    async loadData(){
      this.data = [
        {
          title: "Cocacola",
          price: "90.00",
          unities: "16",
          weight: "330",
          measurementeWeight: "ml"
        },
        {
          title: "Mazapanes",
          price: "20.00",
          unities: "32",
          weight: "24",
          measurementeWeight: "gr"
        }
      ]
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

        .product-price{
          display: flex;
          justify-content: flex-end;
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
  
        <div class="products"></div>

        <div class="butom-element">
          <button>Ver pedido</button>
        </div>
      `

      const products = this.shadow.querySelector('.products')

      this.data.forEach(product => {

        const productContainer = document.createElement('div')
        productContainer.classList.add('product')
        products.appendChild(productContainer)

        const productName = document.createElement('div')
        productName.classList.add('product-name')
        productContainer.appendChild(productName)

        const title = document.createElement("h3")
        title.textContent = product.title
        productName.appendChild(title)

        const productPrice = document.createElement('div')
        productPrice.classList.add('product-price')
        productContainer.appendChild(productPrice)

        const price = document.createElement('span')
        price.textContent = `${product.price} €`
        productPrice.appendChild(price)

        const productDetail = document.createElement('div')
        productDetail.classList.add('product-detail')
        productContainer.appendChild(productDetail)

        const detail = document.createElement('span')
        detail.textContent = `${product.unities}u, ${product.weight}${product.measurementeWeight}`
        productDetail.appendChild(detail)

        const productAmount = document.createElement('div')
        productAmount.classList.add('product-amount')
        productContainer.appendChild(productAmount)

        let amountSelector = document.createElement('div')
        amountSelector.classList.add('amount-selector')
        productAmount.appendChild(amountSelector)

        const lessButton = document.createElement("button")
        lessButton.classList.add('less')
        lessButton.textContent = "-"
        amountSelector.appendChild(lessButton)

        const displayAmount = document.createElement('div')
        displayAmount.classList.add('display-amount')
        productAmount.appendChild(displayAmount)

        const amountQuantity = document.createElement('span')
        amountQuantity.textContent = 0
        displayAmount.appendChild(amountQuantity)

        amountSelector = document.createElement('div')
        amountSelector.classList.add('amount-selector')
        productAmount.appendChild(amountSelector)

        const plusButton = document.createElement("button")
        plusButton.classList.add('plus')
        plusButton.textContent = "+"
        amountSelector.appendChild(plusButton)
      })
    }
  }
  
  customElements.define('products-component', Products);
class Hero extends HTMLElement {

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

        img{
          object-fit: cover;
          width: 100%;
        }

        .hero{
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          align-content: left;
        }     

        .title h1 {
          text-transform: capitalize;
          max-width: 30vh;
          font-weight: bold;
        }

        .sub-title p {
          max-width: 40vh;
          font-weight: bold;
        }
        
        .tag {
          display: flex;
          align-content:center;
          gap: 1rem;
        }

        .tag-element{
          align-items: center;
          display: flex;
          gap: 1rem;
        }

        .tag-element-image{
          width: 2rem;
        }

        .buttons {
          margin: 2rem;
          
        }

        .button-view {
          background: #0068C8;
          text-transform: uppercase;
          color: white;
          font-size: 1rem;
          border: none;
          padding: 1rem 2rem;
          cursor: pointer;
          border-radius: 0.5rem;
          text-transform: uppercase;
        }

        .button-buy {
          background: white;
          text-transform: uppercase;
          color: black;
          font-size: 1rem;
          padding: 1rem 2rem;
          cursor: pointer;
          border-radius: 0.5rem;
          text-transform: uppercase;
        }

      </style>
      
      <div class="hero">
        <div class="info">
          <div class="title">
            <h1>Ecomall WooCommerce WordPress Them</h1>
          </div>
          <div class="sub-title">
            <p>Easy to use Premium Multi-Purpose Theme</p>
          </div>
          <div class="tag">
            <div class="tag-element">
              <div class="tag-element-image">
                <img src="../../images/woo.png" alt="woo.png"> 
              </div>
              <div class="tag-element-text">
                <span>WooCommerce</span>
              </div>
            </div>
            <div class="tag-element">
              <div class="tag-element-image">
                <img src="../../images/elementor-54x54.png" alt="woo.png"> 
              </div>
              <div class="tag-element-text">
                <span>Elementor</span>
              </div>
            </div>
            <div class="tag-element">
              <div class="tag-element-image">
                <img src="../../images/elite-author-54x54.png" alt="woo.png"> 
              </div>
              <div class="tag-element-text">
                <span>Elite Author</span>
              </div>
            </div>
          </div>
          <div class="buttons">
          <button class="button-view">view demo</button>
          <button class="button-buy">buy ecomall</button>
          </div>
        </div>
        <div class="image">
          <img src="../../images/intro-homes-ecomall.gif" alt="intro-homes-ecomall.gif">
        </div>
      </div>
      `
    }
  }
  customElements.define('hero-component', Hero);
import { store } from '../../redux/store.js'
import { applyFilter } from '../../redux/crud-slice.js'

class ProductCategoriesFilterModal extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    document.addEventListener('showFilterModal', this.handleShowFilterModal.bind(this))
    this.render()
  }

  handleShowFilterModal (event) {
    this.shadow.querySelector('.filter-modal').classList.add('active')
  }

  render () {
    this.shadow.innerHTML =
      /* html */`

      <style>

        .filter-modal{
          align-items: center;
          background-color: hsla(0, 0%, 0%, 50%);
          display: flex;
          height: 100%;
          justify-content: center;
          position: fixed;
          left: 0;
          opacity: 0;
          top: 0;
          transition: opacity 0.3s;
          visibility: hidden;
          width: 100%;
          z-index: 5000;
        }

        .filter-modal.active{
          opacity: 1;
          visibility: visible;
        }

        .dialogo {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
            padding: 20px;
            text-align: center;
            width: 300px;
        }
        .dialogo p {
            font-size: 18px;
            margin-bottom: 20px;
        }
        .botones {
            display: flex;
            justify-content: space-around;
        }
        .boton {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        .boton-si {
          background-color: white;
            border: 2px solid #ccc;
            color: black;
        }
        .boton-no {
            background-color: white;
            border: 2px solid #ccc;
            color: black;
        }
        .boton-no:hover {
            background-color: #f0f0f0;
        }

        form{
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }

        .form-element{
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-element input{
          background-color: hsl(225, 63%, 65%);
          border-bottom: solid 1px #fff;
          color: hsl(0, 0%, 100%);
          width:  100%;
          padding: 0.3rem 0;
        }
    </style>
      
      <section class="filter-modal">
        <div class="dialogo">
          <p>Filtrar tabla</p>
          <form>
            <div class="form-element">
              <div class="form-label">
                <label>Titulo</label>
              </div>
              <div class="form-input">
                <input type="text" name="title">
              </div>
            </div>
          </form>
          <div class="botones">
              <button class="boton boton-si">SI</button>
              <button class="boton boton-no">NO</button>
          </div>
        </div>
      </section>
      `

    this.shadow.querySelector('.boton-si').addEventListener('click', async (event) => {
      event.preventDefault()
      const form = this.shadow.querySelector('form')
      const formData = new FormData(form)
      const formDataJson = {}

      for (const [key, value] of formData.entries()) {
        formDataJson[key] = value !== '' ? value : null
      }

      const queryString = Object.entries(formDataJson).map(([key, value]) => {
        return `${key}=${value}`
      }).join('&')

      store.dispatch(applyFilter(queryString))
      form.reset()
      this.shadow.querySelector('.filter-modal').classList.remove('active')
    })

    this.shadow.querySelector('.boton-no').addEventListener('click', () => {
      this.shadow.querySelector('.filter-modal').classList.remove('active')
    })
  }
}

customElements.define('product-categories-filter-modal-component', ProductCategoriesFilterModal)

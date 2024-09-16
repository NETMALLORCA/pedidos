import { store } from '../redux/store.js'
import { refreshTable, showFormElement } from '../redux/crud-slice.js'

class DeleteModal extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    document.addEventListener('show-delete-modal', this.handleShowDeleteModal.bind(this))
    this.render()
  }

  handleShowDeleteModal (event) {
    this.endpoint = event.detail.endpoint
    this.element = event.detail.element

    this.shadow.querySelector('.delete-modal').classList.add('active')
  }

  render () {
    this.shadow.innerHTML =
      /* html */`

      <style>

        .delete-modal{
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

        .delete-modal.active{
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
            background-color: red;
            color: white;
        }
        .boton-no {
            background-color: white;
            border: 2px solid #ccc;
            color: black;
        }
        .boton-no:hover {
            background-color: #f0f0f0;
        }
    </style>
      
      <section class="delete-modal">
        <div class="dialogo">
          <p>¿Quieres eliminar este elemento?</p>
          <div class="botones">
              <button class="boton boton-si">SI</button>
              <button class="boton boton-no">NO</button>
          </div>
        </div>
      </section>
      `

    this.shadow.querySelector('.boton-si').addEventListener('click', async () => {
      await fetch(this.element, {
        method: 'DELETE'
      })

      this.shadow.querySelector('.delete-modal').classList.remove('active')
      store.dispatch(refreshTable(this.endpoint))

      const formElement = {
        data: null
      }

      store.dispatch(showFormElement(formElement))

      document.dispatchEvent(new CustomEvent('message', {
        detail: {
          message: 'Dato eliminado correctamente',
          type: 'success'
        }
      }))
    })

    this.shadow.querySelector('.boton-no').addEventListener('click', () => {
      this.shadow.querySelector('.delete-modal').classList.remove('active')
    })
  }
}

customElements.define('delete-modal-component', DeleteModal)

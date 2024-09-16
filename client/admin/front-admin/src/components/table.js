import isEqual from 'lodash-es/isEqual'
import { store } from '../redux/store.js'
import { showFormElement } from '../redux/crud-slice.js'
class Table extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.unsubscribe = null
    this.endpoint = `${import.meta.env.VITE_API_URL}/api/admin/users`
  }

  async connectedCallback () {
    this.unsubscribe = null
    this.endpoint = `${import.meta.env.VITE_API_URL}/api/admin/users`
    this.unsubscribe = store.subscribe(async () => {
      const currentState = store.getState()

      if (currentState.crud.tableEndpoint && isEqual(this.endpoint, currentState.crud.tableEndpoint)) {
        await this.loadData()
        await this.render()
      }
    })

    await this.loadData()
    await this.render()
  }

  async loadData () {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/users`)
    this.data = await response.json()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
            *{
                box-sizing: border-box;
            }

            button{
                background-color: transparent;
                border: none;
                outline: none;
                padding: 0;
            }

            ul{
                list-style: none;
                margin: 0;
                padding: 0;
            }

            label, span, li, p{
                color: hsl(0, 0%, 100%);
                font-family: "Ubuntu", sans-serif;
            }

            .table{
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .table-header{
                align-items: center;
                background-color: hsl(0, 0%, 100%);
                display: flex;
                gap: 0.5rem;
                padding: 0 0.5rem;
            }

            .table-header-buttons ul{
                align-items: center;
                display: flex;
                gap: 0.5rem;
            }
            .table-header-buttons svg{
                fill: hwb(256 1% 66%);
                height: 1.8rem;
                width: 1.8rem;
            }
            .table-body{
                align-items: center;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                height: 75vh;
                max-height: 75vh;
                overflow-y: auto;
            }

            .table-body::-webkit-scrollbar{
                width: 5px;
            }

            .table-body::-webkit-scrollbar-thumb{
                background-color: hsl(225, 63%, 65%);  /* Color del thumb */
                border-radius: 10px;  /* Bordes redondeados del thumb */
                /*border: 1px solid hsl(0, 0%, 100%); Espacio entre el thumb y el track */
            }

            .table-register{
                width: 80%;
            }

            .table-register-buttons ul{
                align-items: center;
                background-color: hsl(0, 0%, 100%);
                display: flex;
                gap: 0.5rem;
                justify-content: flex-end;
            }

            .table-register-buttons{
            }

            .table-register-buttons ul li svg{
                fill: hwb(256 1% 66%);
                height: 1.8rem;
                width: 1.8rem;
            }
            .table-register-data{
                gap: 1rem;
            }
            .table-register-data ul{
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                background-color: #000;
                padding: 0.5rem;
            }

            .table-footer{
                align-items: center;
                display: flex;
                justify-content: space-between;
            }

            .table-info{
                background-color: hsl(0, 0%, 100%);
                display: flex;
                justify-content: space-between;
                padding: 0.5rem;
                width: 100%;  
            }

            .table-info p{
                color: hsl(0, 0%, 29%);   
                font-weight: 700;
                margin: 0;
            }
            .table-info-button{
                color: hsl(0, 0%, 29%);
            }
        </style>
        <section class="table">
            <div class="table-header">
                <div class="table-header-buttons">
                    <ul>
                        <li class="filter-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter-check</title><path d="M12 12V19.88C12.04 20.18 11.94 20.5 11.71 20.71C11.32 21.1 10.69 21.1 10.3 20.71L8.29 18.7C8.06 18.47 7.96 18.16 8 17.87V12H7.97L2.21 4.62C1.87 4.19 1.95 3.56 2.38 3.22C2.57 3.08 2.78 3 3 3H17C17.22 3 17.43 3.08 17.62 3.22C18.05 3.56 18.13 4.19 17.79 4.62L12.03 12H12M17.75 21L15 18L16.16 16.84L17.75 18.43L21.34 14.84L22.5 16.25L17.75 21" /></svg>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="table-body"></div>
            <div class="table-footer">
                <div class="table-info">
                    <div>
                        <p>
                            1 registro en total, mostrando 10 por página
                        </p>  
                    </div>                 
                    <div class="table-info-button">
                        <button><<</button>  
                    </div>                 
                </div>
            </div>
        </section>
        `

    const tables = this.shadow.querySelector('.table-body')

    this.data.rows.forEach(element => {
      const tableRegister = document.createElement('div')
      tableRegister.classList.add('table-register')
      tables.appendChild(tableRegister)

      const tableRegisterButtons = document.createElement('div')
      tableRegisterButtons.classList.add('table-register-buttons')
      tableRegister.appendChild(tableRegisterButtons)

      const registerButtons = document.createElement('ul')
      registerButtons.classList.add('register-buttons')
      tableRegisterButtons.appendChild(registerButtons)

      const editButton = document.createElement('li')
      editButton.classList.add('edit-button')
      editButton.dataset.id = element.id
      editButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>'
      registerButtons.appendChild(editButton)

      const deleteButton = document.createElement('li')
      deleteButton.classList.add('delete-button')
      deleteButton.dataset.id = element.id
      deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>'
      registerButtons.appendChild(deleteButton)

      const tableRegisterData = document.createElement('div')
      tableRegisterData.classList.add('table-register-data')
      tableRegister.appendChild(tableRegisterData)

      const tableRegisterDataUl = document.createElement('ul')
      tableRegisterData.appendChild(tableRegisterDataUl)

      let elementItemList = document.createElement('li')
      elementItemList.textContent = `nombre: ${element.name}`
      tableRegisterDataUl.appendChild(elementItemList)

      elementItemList = document.createElement('li')
      elementItemList.textContent = `email: ${element.email}`
      tableRegisterDataUl.appendChild(elementItemList)

      elementItemList = document.createElement('li')
      elementItemList.textContent = `creado el: ${element.createdAt}`
      tableRegisterDataUl.appendChild(elementItemList)
    })

    this.renderRegisterButtons()
  }

  async renderRegisterButtons () {
    this.shadow.querySelector('.table-body').addEventListener('click', async (event) => {
      if (event.target.closest('.edit-button')) {
        const id = event.target.closest('.edit-button').dataset.id
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/users/${id}`)
        const data = await response.json()

        const formElement = {
          data
        }

        store.dispatch(showFormElement(formElement))
      }

      if (event.target.closest('.delete-button')) {
        const id = event.target.closest('.delete-button').dataset.id

        document.dispatchEvent(new CustomEvent('show-delete-modal', {
          detail: {
            endpoint: this.endpoint,
            element: `${this.endpoint}/${id}`
          }
        }))
      }
    })
  }
}

customElements.define('table-component', Table)

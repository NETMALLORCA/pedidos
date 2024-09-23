import isEqual from 'lodash-es/isEqual'
import { store } from '../../redux/store.js'
import { showFormElement, applyFilter } from '../../redux/crud-slice.js'

class UserTable extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.unsubscribe = null
    this.endpoint = `${import.meta.env.VITE_API_URL}/api/admin/users`
    this.queryString = null
    this.page = 1
  }

  async connectedCallback () {
    this.unsubscribe = store.subscribe(async () => {
      const currentState = store.getState()

      if (currentState.crud.tableEndpoint && isEqual(this.endpoint, currentState.crud.tableEndpoint)) {
        await this.loadData()
        await this.render()
      }

      if (!isEqual(this.queryString, currentState.crud.queryString)) {
        this.queryString = currentState.crud.queryString
        await this.loadData()
        await this.render()

        if (this.queryString) {
          const filterButton = this.shadow.querySelector('.filter-button')
          const filterCancelButton = this.shadow.querySelector('.filter-cancel-button')

          filterButton.classList.remove('active')
          filterCancelButton.classList.add('active')
        }
      }
    })

    await this.loadData()
    await this.render()
  }

  async loadData () {
    const endpoint = this.queryString ? `${this.endpoint}?${this.queryString}&page=${this.page}` : `${this.endpoint}?page=${this.page}`
    const response = await fetch(endpoint)
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

            .filter-button, .filter-cancel-button {
              display: none;
              background: none;
              border: none;
              cursor: pointer;
              padding: 0;
            }

            .filter-button.active, .filter-cancel-button.active{
              display: block;
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
            .table-page-buttons{
              align-items: center;
              display: flex;
              gap: 0.5rem;
            }

            .table-page-button{
              cursor: pointer;
              fill: hsl(225, 63%, 65%);
              height: 1.5rem;
              width: 1.5rem;
            }

            .current-page{
              align-items: center;
              display: flex;
              height: 1.5rem;
              width: 4rem;
            }

            .current-page input{
              border: none;
              border-radius: 0.5rem;
              color: hsl(225, 63%, 65%);
              font-weight: 600;
              outline: none;
              text-align: center;
              width: 100%;
            }

            .current-page label{
              border: 1px solid  hsl(225, 63%, 65%);
              border-radius: 0.5rem;
              display: flex;
              gap: 0.2rem;
              padding: 0 0.2rem;
            }

            .current-page button{
              background-color: transparent;
              border: none;
              cursor: pointer;
              outline: none;
              padding: 0;
            }

            .current-page svg{
              fill: hsl(225, 63%, 65%);
              width: 1.5rem;
            }

            input[type="number"]::-webkit-outer-spin-button,
            input[type="number"]::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }

        </style>
        <section class="table">
            <div class="table-header">
              <div class="table-header-buttons">
                <ul>
                  <li class="filter-button active">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter-check</title><path d="M12 12V19.88C12.04 20.18 11.94 20.5 11.71 20.71C11.32 21.1 10.69 21.1 10.3 20.71L8.29 18.7C8.06 18.47 7.96 18.16 8 17.87V12H7.97L2.21 4.62C1.87 4.19 1.95 3.56 2.38 3.22C2.57 3.08 2.78 3 3 3H17C17.22 3 17.43 3.08 17.62 3.22C18.05 3.56 18.13 4.19 17.79 4.62L12.03 12H12M17.75 21L15 18L16.16 16.84L17.75 18.43L21.34 14.84L22.5 16.25L17.75 21" /></svg>
                  </li>
                  <li class="filter-cancel-button">          
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.76,20.83L17.6,18L14.76,15.17L16.17,13.76L19,16.57L21.83,13.76L23.24,15.17L20.43,18L23.24,20.83L21.83,22.24L19,19.4L16.17,22.24L14.76,20.83M12,12V19.88C12.04,20.18 11.94,20.5 11.71,20.71C11.32,21.1 10.69,21.1 10.3,20.71L8.29,18.7C8.06,18.47 7.96,18.16 8,17.87V12H7.97L2.21,4.62C1.87,4.19 1.95,3.56 2.38,3.22C2.57,3.08 2.78,3 3,3V3H17V3C17.22,3 17.43,3.08 17.62,3.22C18.05,3.56 18.13,4.19 17.79,4.62L12.03,12H12Z" /></svg>
                  </li>
                </ul>
              </div>
            </div>
            <div class="table-body"></div>
            <div class="table-footer">
                <div class="table-info">
                    <div>
                        <p>
                          ${this.data.count} ${this.data.count === 1 ? 'registro' : 'registros'} en total, mostrando ${this.data.meta.size} por página
                        </p>  
                    </div>                 
                    <div class="table-page-buttons">
                      <div class="table-page-button" data-page="1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z" /></svg>
                      </div>  
                      <div class="table-page-button" data-page="${this.data.meta.currentPage > 1 ? parseInt(this.data.meta.currentPage) - 1 : 1}">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-left</title><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg>                     
                      </div>  
                      <div class="current-page">
                        <label>
                          <input type="number" value="${this.data.meta.currentPage}"> 
                          <button class="go-to-page">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,10V14H13L9.5,17.5L11.92,19.92L19.84,12L11.92,4.08L9.5,6.5L13,10H4Z" /></svg>
                          </button>
                        </label>
                      </div>
                      <div class="table-page-button" data-page="${parseInt(this.data.meta.currentPage) + 1}">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-right</title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                      </div>  
                      <div class="table-page-button" data-page="${this.data.meta.pages}">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-double-right</title><path d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z" /></svg>                      
                      </div>  
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
    this.shadow.querySelector('.go-to-page').addEventListener('click', async event => {
      const page = this.shadow.querySelector('.current-page input').value

      if (!page || page < 1 || page.includes('.') || page.includes(',')) {
        this.shadow.querySelector('.current-page input').value = this.page
      } else if (page > this.data.meta.pages) {
        document.dispatchEvent(new CustomEvent('message', {
          detail: {
            message: `No se puede acceder a la página ${page}, solo hay ${this.data.meta.pages} ${this.data.meta.pages === 1 ? 'página disponible' : 'páginas disponibles'} `,
            type: 'error'
          }
        }))
        this.shadow.querySelector('.current-page input').value = this.page
      } else {
        this.page = page
        await this.loadData()
        await this.render()
      }
    })

    this.shadow.querySelector('.table').addEventListener('click', async (event) => {
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

      if (event.target.closest('.table-page-button')) {
        const pageButton = event.target.closest('.table-page-button')
        this.page = pageButton.dataset.page
        await this.loadData()
        await this.render()
      }

      if (event.target.closest('.filter-button')) {
        document.dispatchEvent(new CustomEvent('showFilterModal'))
      }

      if (event.target.closest('.filter-cancel-button')) {
        const filterCancelButton = event.target.closest('.filter-cancel-button')
        const filterButton = this.shadow.querySelector('.filter-button')
        store.dispatch(applyFilter(null))
        filterButton.classList.add('active')
        filterCancelButton.classList.remove('active')
      }
    })
  }
}

customElements.define('users-table-component', UserTable)

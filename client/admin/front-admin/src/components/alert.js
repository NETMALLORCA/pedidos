class Alert extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    document.addEventListener('message', this.handleMessage.bind(this))
    this.render()
  }

  handleMessage (event) {
    const alertBox = this.shadow.querySelector('.alert')
    alertBox.classList.add('active')

    const alertHeader = this.shadow.querySelector('.alert-header')
    alertHeader.classList.add(event.detail.type)

    this.shadow.querySelector('.message').textContent = event.detail.message

    setTimeout(() => {
      alertBox.classList.remove('active')
    }, 3000)
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      <style>

        *{
          box-sizing: border-box;
        }

        .alert {
          position: fixed;
          right: 1rem;
          opacity: 0;
          bottom: 1rem;
          transition: opacity 0.3s;
          visibility: hidden;
          width: 300px;
          z-index: 4000;
          border-radius: 8px;
          box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
          text-align: center;
          width: 300px;
        }

        .alert.active {
          opacity: 1;
          visibility: visible;
        }

        .alert-header{
          padding: 1rem;
          width: 100%;
        }

        .alert-header.success{
          background-color: green;
        }

        .alert-header.error{
          background-color: red;
        }

        .alert-body{
          background-color: white;
          padding: 20px;
        }

        .alert-body p {
          font-size: 18px;
          margin-bottom: 20px;
        }

      </style>

      <div class="alert">
        <div class="alert-header"></div>
        <div class="alert-body">
          <p class="message"></p>
        </div>
      </div>
    `
  }
}

customElements.define('alert-component', Alert)

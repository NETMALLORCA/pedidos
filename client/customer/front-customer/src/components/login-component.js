class Login extends HTMLElement {

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
        form{
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.5rem;
          width: 100%;
        }
        
        .form-element{
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.2rem;
          text-transform: capitalize;
        }

        .form-element label{
          color: hsl(0, 0%, 100%);
          font-family: "Lato", sans-serif;
          font-weight: 700;
        }

        .form-element input{
          background-color: hsl(226, 63%, 45%);
          border: none;
          padding: 0.5rem 1rem;
        }

        .button {
          display: flex;
        }

        .button button {
          border: none;
          background-color:rgb(92,54,125);
          width: 100%;
          color: white;
          font-size: 1.1rem;
          text-transform: capitalize;
          padding: 0.4rem 0;
          border-radius: 0.5rem;
        }

        .clave {
          color: hsl(0, 0%, 100%);
          display: flex;
          flex-direction: column;
          font-weight: 700;
          justify-content: center;
          gap: 1rem;
          text-align: center;
        }

        .clave a::first-letter{
          text-transform: uppercase;
        }

        .button- {
          border: none;
          background-color:rgb(92,54,125);
          width: 100%;
          color: white;
          font-size: 1.1rem;
          font-family: "Lato", sans-serif;
          text-transform: capitalize;
          padding: 0.4rem 0;
          border-radius: 0.5rem;
        }

        a{
          text-decoration: none;
          color: inherit;
          font-family: "Lato", sans-serif;
        }

      </style>
  
      <form>
        <div class="form-element">
          <label for="username">email:</label>
          <input type="text" id="username" name="username" required>
        </div>

        <div class="form-element">
          <label for="password">password:</label>
          <input type="password" id="password" name="password" required>
        </div>

        <div class="button">
          <button type="submit">enviar</button>
        </div>
        
        <div class="clave">
          <a href="">olvide mi contraseña</a>
        </div>
      </form>
      `
    }
  }
  
  customElements.define('login-component', Login);
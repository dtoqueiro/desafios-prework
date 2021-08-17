import './style.css'

const app = document.querySelector('[data-js="app"]')
const link = document.querySelector('[data-js="toggle-app"]')

app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`

const toggleAppVisibility = () => {
  if(app.style.display !== "none") {
    app.style.display = "none"
    link.textContent = "MOSTRAR APP"
  }
  else {
    app.style.display = "block"
    link.textContent = "ESCONDER APP"
  }
}

link.addEventListener('click', (e)=>{
  e.preventDefault()
  toggleAppVisibility()
}, false)

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

      <header class="header">
       <a href="#" class="logo">Campus EVO</a>
       <nav class="navbar">
        <a href='#'>Inicio</a>
        <a href='#'>Cursos</a>
        <a href='#'>Mi espacio</a>
        <a href='#'>Contacto</a>
       </nav>
      </header>

      <section class="home">
        <div class="home-content">
          <h1>Comienza a crecer</h1>
          <h3>Cursos gratuitos</h3>
          <h3>Para cualquier nivel</h3>
          <p></p>
        </div>
      </section>

      
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import * as React from 'react'

import { ChakraProvider, Container, Heading } from '@chakra-ui/react'

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
        <Container class="home-content">
          <Heading>Comienza a crecer</Heading>
          <h3>Cursos gratuitos</h3>
          
          
        </Container>
      </section>

      
    </>
  )
}

export default App

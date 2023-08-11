import React from 'react'
import { Container } from 'react-bootstrap'
import Header from "./components/header"
import Footer from "./components/footer"
import Home from './screens/home'
const App = () => {
  return (
    <>
      <Header/>
      <main className='py-3'>
        <Container>
          <Home/>
        </Container>
      </main>
      <Footer/>
    </>
  )
}

export default App
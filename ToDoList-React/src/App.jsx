import { useState } from 'react'
import './App.css'
import Container from './Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container></Container>
    </>
  )
}

export default App

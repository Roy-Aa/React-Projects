import { useState } from 'react'
import './Container.css'
import List from './List'

function Container() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
      <List>
          
          </List>
      </main>
    </>
  )
}

export default Container

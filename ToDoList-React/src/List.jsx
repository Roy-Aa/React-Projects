import { useState } from 'react'
import './List.css'
import Clip from './Clip'
import Paper from './Paper'

function List() {
  const [count, setCount] = useState(0)

  return (
    <>
      <article>
        <Clip></Clip>
        <Paper></Paper>
      </article>
    </>
  )
}

export default List

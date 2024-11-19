import { useState } from 'react'
import './Paper.css'

function Paper() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <h2>📋To Do List</h2>
        <figure>            
            <div><input type="checkbox" /> <textarea placeholder="// Type iets hier!" id=""></textarea></div>
            <div><input type="checkbox" /> <textarea placeholder="// Type iets hier!" id=""></textarea></div>
            <div><input type="checkbox" /> <textarea placeholder="// Type iets hier!" id=""></textarea></div>
            <div><input type="checkbox" /> <textarea placeholder="// Type iets hier!" id=""></textarea></div>
            <div><input type="checkbox" /> <textarea placeholder="// Type iets hier!" id=""></textarea></div>
            <div><input type="checkbox" /> <textarea placeholder="// Type iets hier!" id=""></textarea></div>
            <div><input type="checkbox" /> <textarea placeholder="// Type iets hier!" id=""></textarea></div>
       </figure>
      </section>
    </>
  )
}

export default Paper

import { useState } from 'react'
import './Clip.css'


function Clip() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="clipline">
        <div className="clipcircle">
            <div className="clipblackcircle"></div>
        </div>
    </div>
    </>
  )
}

export default Clip
import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import "./Card2.css"
import screenshot from "./images/screenshot_01.png"

function Card2() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div src={screenshot} onClick={() => set(state => !state)} >
      <a.div className="Card2 dback" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
      <a.div className="Card2 dfront" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
    </div>
  )
}

// render(<Card2 />, document.getElementById('root'));

export default Card2;


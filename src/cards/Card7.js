import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import "./style.css"
import screenshot from "./images/screen-shot.png"

function Card7() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div src={screenshot} onClick={() => set(state => !state)}>
      <a.div class="d dback" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
      <a.div class="d dfront" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
    </div>
  )
}

render(<Card7 />, document.getElementById('root'));

export default Card7;
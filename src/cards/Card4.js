import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import "./Card4.css"
import screenshot4 from "./images/screenshot_00_fe.png"

function Card4() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div src={screenshot4} onClick={() => set(state => !state)}>
      <a.div className="Card4 fback" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
      <a.div className="Card4 ffront" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
    </div>
  )
}

// render(<Card4 />, document.getElementById('root'));

export default Card4;
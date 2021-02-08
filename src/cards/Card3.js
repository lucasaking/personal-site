import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import "./Card3.css"
import screenshot3 from "./images/screenshot_00.png"

function Card3() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div src={screenshot3} onClick={() => set(state => !state)}>
      <a.div className="Card3 eback" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
      <a.div className="Card3 efront" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
    </div>
  )
}

// render(<Card3 />, document.getElementById('root'));

export default Card3;
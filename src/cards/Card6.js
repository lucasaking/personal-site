import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import "./Card6.css"
import screenshot6 from "./images/screenshot_02.png"

function Card6() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div src={screenshot6} onClick={() => set(state => !state)}>
      <a.div className="Card6 hback" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
      <a.div className="Card6 hfront" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
    </div>
  )
}

export default Card6;
import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import "./Card5.css"
import screenshot5 from "./images/screenshot_00_wg.png"

function Card5() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div src={screenshot5} onClick={() => set(state => !state)}>
      <a.div className="Card5 gback" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
      <a.div className="Card5 gfront" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
    </div>
  )
}

// render(<Card5 />, document.getElementById('root'));

export default Card5;
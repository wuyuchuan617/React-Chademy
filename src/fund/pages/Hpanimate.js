/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { Fragment, useState, useEffect } from 'react'
import '../styles/Hpanimate.scss'
import { animated, useSpring } from 'react-spring'

const OFFSET = Math.random()

const map = function (value, in_min, in_max, out_min, out_max) {
  console.log(value)
  console.log(
    ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  )
  if (value === 0) {
    console.log('00000')
    return out_min
  }
  return ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

function Hpanimate() {
  const textRef = React.useRef(null)

  const r = 200
  const cx = 250
  const cy = 250
  const [power, setPower] = useState(0)
  const [acc, setAcc] = useState(0)
  const config = { mass: 50, tension: 200, friction: 200, precision: 0.001 }
  const [props, set] = useSpring(() => ({
    transform: 'rotate(0deg)',
    immediate: false,
  }))

  useEffect(() => {
    set({
      from: { transform: `rotate(${map(acc, 0, 100, 0, 700)}deg)` },
      transform: `rotate(${map(acc + power, 0, 100, 0, 700)}deg)`,
      immediate: false,
      config,
    })
    setAcc(acc + power)
  }, [power])

  const rederItems = (numOfItems) => {
    let items = []
    for (let i = 0; i < numOfItems; i++) {
      let xLength = Math.cos(2 * Math.PI * (i / numOfItems + OFFSET)) * (r - 5)
      let yLength = Math.sin(2 * Math.PI * (i / numOfItems + OFFSET)) * (r - 5)
      let txLength =
        Math.cos(2 * Math.PI * ((i + 0.5) / numOfItems + OFFSET)) * (r / 2)
      let tyLength =
        Math.sin(2 * Math.PI * ((i + 0.5) / numOfItems + OFFSET)) * (r / 2)
      items.push(
        <Fragment key={i}>
          <line
            stroke="#a28b69"
            strokeWidth="2"
            x1={cx + xLength}
            y1={cy + yLength}
            x2={cx}
            y2={cy}
          />
          <text
            ref={(textRef) => {
              if (!textRef) return
              console.log(
                '  => textRef ',
                JSON.stringify(textRef.getBoundingClientRect(), null, 2)
              )
            }}
            className="wheel"
            x={cx + txLength}
            y={cy + tyLength}
            fontSize="15px"
            transform={`rotate(${((i + 0.5) / numOfItems + OFFSET) * 360} 
                  ${cx + txLength},
                  ${cy + tyLength})`}
          >
            {i} 未中獎
          </text>
        </Fragment>
      )
    }
    return items
  }

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        style={{ width: '45vw', height: '80vh' }}
      >
        <g fill="#D9C7AA" stroke="#d68b51" strokeWidth="10">
          <circle cx="250" cy="250" r={r} />
        </g>
        <animated.g
          style={{
            transform: props.transform,
            transformOrigin: 'center',
          }}
        >
          {rederItems(12)}
        </animated.g>
        <g fill="#E0E4DE">
          <circle cx="250" cy="250" r="15" />
        </g>
        <g fill="#436464">
          <circle cx="250" cy="250" r="5" />
        </g>
        <g fill="#436464" stroke="#E0E4DE" strokeWidth="2">
          <polygon points="250,70 230,30 270,30" />
        </g>
      </svg>
      <div className="e_pbtn">
      <PressButton setPower={setPower} style={{ height: '20vh' }} />
      </div>
    </div>
  )
}

const PressButton = ({ setPower }) => {
  const [pressed, toggle] = useState(false)
  const [width, setWidth] = useState(0)
  const [props, set] = useSpring(() => ({
    width: '0%',
    backgroundColor: '#e7d6ba',
  }))
  useEffect(() => {
    if (pressed)
      set({
        from: { width: '0%', backgroundColor: '#e7d6ba' },
        to: { width: '100%', backgroundColor: '#C77334' },
        immediate: false,
        config: { duration: 2000 },
      })
    else {
      setPower(parseInt(width))
      set({ to: { width: '0%', backgroundColor: '#e7d6ba' }, immediate: true })
    }
  }, [pressed])

  return (
    <button
      className="main"
      onMouseDown={() => {
        toggle(!pressed)
      }}
      onMouseUp={() => {
        toggle(!pressed)
      }}
      onTouchStart={() => {
        toggle(!pressed)
      }}
      onTouchEnd={() => {
        toggle(!pressed)
      }}
    >
      <animated.div
        className="fill"
        style={{
          width: props.width,
          background: props.backgroundColor,
        }}
      />
      <animated.div className="content">
        {props.width.interpolate((x) => {
          setWidth(parseInt(x))
          return x === '0%' ? 'Press me!' : parseInt(x) + '%'
        })}
      </animated.div>
    </button>
  )
}

export default Hpanimate

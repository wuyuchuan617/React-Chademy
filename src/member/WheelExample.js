import React from 'react'

import Winwheel from 'winwheel'

// http://dougtesting.net/winwheel/docs

const Dashboard = (props) => {
  const { start } = props
  React.useEffect(() => {
    console.log('     setTheWheel(theWheel)  ')
    const theWheel = new Winwheel({
      canvasId: 'myCanvas',
      numSegments: 6,
      segments: [
        { fillStyle: '#eae56f', text: 'Prize One' },
        { fillStyle: '#89f26e', text: 'Prize Two' },
        { fillStyle: '#7de6ef', text: 'Prize Three' },
        { fillStyle: '#e7706f', text: 'Prize Four' },
        { fillStyle: 'red', text: 'P6r' },
        { fillStyle: '#7de6ef', text: 'Pr7ize Four' },
        { fillStyle: '#e7706f', text: 'Pri8ze Four' },
      ],
      animation: {
        type: 'spinToStop',
        duration: 5,
        spins: 8,
      },
    })
    // setTheWheel(wheel)

    if (start) {
      theWheel.startAnimation()
    }
  }, [start])
  return <canvas id="myCanvas" width="880" height="300"></canvas>
}

const WheelExample = () => {
  const [start, setStart] = React.useState(false)

  const startSpin = () => {
    setStart(true)
  }

  return (
    <div>
      <input type="button" value="Start" onClick={startSpin} />
      <Dashboard start={start}></Dashboard>
    </div>
  )
}

export default WheelExample

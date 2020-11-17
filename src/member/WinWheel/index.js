import React from 'react'

// js 套件
import Winwheel from 'winwheel'
import './index.scoped.scss'
import basicPointer from './basic_pointer.png'

// http://dougtesting.net/winwheel/docs

const Dashboard = (props) => {
  const { start } = props

  const theWheel = new Winwheel({
    canvasId: 'myCanvas',
    numSegments: 8, // 顯示數量
    pointerAngle: 0,
    segments: [
      { fillStyle: '#eae56f', text: 'Prize 1' },
      { fillStyle: '#89f26e', text: 'Prize 2' },
      { fillStyle: '#7de6ef', text: 'Prize 3' },
      { fillStyle: '#e7706f', text: 'Prize 4' },
      { fillStyle: '#eae56f', text: 'Prize 5' },
      { fillStyle: '#89f26e', text: 'Prize 6' },
      { fillStyle: '#7de6ef', text: 'Prize 7' },
      { fillStyle: '#e7706f', text: 'Prize 8' },
    ],
    animation: {
      type: 'spinToStop',
      duration: 5, // 持續時間
      spins: 8,

      // NOTE: callBack 都 GG
      // callbackAfter: 'drawTriangle()', // 會噴錯
      // callbackFinished: 'alertPrize()', // 會噴錯
    },
  })

  const alertPrize = () => {
    // Call getIndicatedSegment() function to return pointer to the segment pointed to on wheel.
    let winningSegment = theWheel.getIndicatedSegment()
    // Basic alert of the segment text which is the prize name.
    alert('You have won ' + (winningSegment || {}).text + '!')
  }

  React.useEffect(() => {
    console.log('     setTheWheel(theWheel)  ')

    if (start) {
      theWheel.startAnimation()

      setTimeout(() => {
        // 沒招了，設定謝湯豪，持續時間到之後延遲 100ms，然後取得結果
        alertPrize()
      }, 5160)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start])

  // ref: http://dougtesting.net/winwheel/docs/tut10_pointers_and_backgrounds
  return (
    <div id="canvasContainer">
      <canvas id="myCanvas" width="300" height="300"></canvas>
      <img id="prizePointer" src={basicPointer} alt="V" />
    </div>
  )
}

//
const WinWheel = () => {
  const [start, setStart] = React.useState(false)

  return (
    <div className="wheel_container">
      <input
        className="start_button"
        type="button"
        value="Start"
        onClick={() => {
          setStart(true)
        }}
      />

      {/* 轉盤組件 */}
      <Dashboard start={start}></Dashboard>
    </div>
  )
}

export default WinWheel

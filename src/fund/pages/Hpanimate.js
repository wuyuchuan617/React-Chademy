import React from 'react'

// js 套件
import Winwheel from 'winwheel'
import '../styles/Hpanimate.scss'
import basicPointer from '../images/po_0000_point.png'

// http://dougtesting.net/winwheel/docs

const Dashboard = (props) => {
  const { start } = props

  const theWheel = new Winwheel({
    canvasId: 'myCanvas',
    numSegments: 8, // 顯示數量
    pointerAngle: 0,
    segments: [
      { fillStyle: '#e7d6ba', text: '未中獎' },
        { fillStyle: '#b7bdb3', text: '1000折價券' },
        { fillStyle: '#e7d6ba', text: '未中獎' },
        { fillStyle: '#b7bdb3', text: '9折優惠' },
        { fillStyle: '#e7d6ba', text: '未中獎' },
        { fillStyle: '#b7bdb3', text: '2000折價券' },
        { fillStyle: '#e7d6ba', text: '未中獎' },
        { fillStyle: '#b7bdb3', text: '1500折價券' },
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
    alert('恭喜贏得'+ (winningSegment || {}).text + '!')
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
      <canvas id="myCanvas" width="350" height="350"></canvas>
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

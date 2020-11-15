/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Countdown, {
  zeroPad
} from 'react-countdown'
import '../styles/counter.scss'
const Counter = (props) => {
  const { enddate, total } = props
  // const Completionist = () => <span>Sold Out!</span>
  const renderer = ({  hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return ''
    } else {
      // Render a countdown
      return (
        <span className="g-smalltime">
          倒數時間：
          {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      )
    }
  }

  return (
    <>
      {total ? (
        <Countdown
          date={new Date(enddate).getTime()}
          renderer={renderer}
        ></Countdown>
      ) : (
        ''
      )}
    </>
  )
}

export default Counter

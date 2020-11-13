/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import '../styles/entryAnimation.css'

function EntryAnimation(props) {
  useEffect(
    () => {
      const aa = document.querySelector('.w_aa')
      const rr = document.querySelector('.w_rr')
      const tt = document.querySelector('.w_tt')
      const better = document.querySelector('.w_better')
      const tomorrow = document.querySelector('.w_tomorrow')
      const text = document.querySelector('.w_text')
      const w_entryBg = document.querySelector('.w_entryBg')
      const w_skip = document.querySelector('.w_skip')

      const changeColor = setTimeout(() => {
        aa.style.color = '#C77334'
        rr.style.color = '#C77334'
        tt.style.color = '#C77334'
        better.style.left = '39.5%'
        tomorrow.style.left = '59.5%'
      }, 7000)

      const showAnim = setTimeout(() => {
        aa.style.display = 'block'
        better.style.display = 'block'
        tomorrow.style.display = 'block'
        text.style.display = 'none'
      }, 4000)

      const disapearEntry = setTimeout(() => {
        aa.style.display = 'none'
        better.style.display = 'none'
        tomorrow.style.display = 'none'
        w_entryBg.style.display = 'none'
        w_skip.style.display = 'none'
      }, 8000)
      // async function first() {
      //   await fisrtText()
      //   await showAnim()
      // console.log('hello');
      //   changeColor()
    },
    // first()
    //   }
    []
  )

  return (
    <>
      <div className="w_entryBg">
        <div className="w_aa">A</div>
        <div className="w_text">Thinking learning and design.</div>
        <div className="w_better">
          BETTE<span className="w_rr">R</span>
        </div>

        <div className="w_tomorrow">
          <span className="w_tt">T</span>OMORROW
        </div>

        <div className="w_skip">
          <p>-SKIP-</p>
        </div>
      </div>
    </>
  )
}

export default EntryAnimation

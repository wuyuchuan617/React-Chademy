import React from 'react'
import Img from '../../img/WireDiningChair_LeatherSaddle.jpg'

function Firstview() {
  return (
    <div className="i_fv">
      <img src={Img} alt="" />
      <div className="i_fv_text text-center">
        <p className="i_slogan">Thinking learning and design.</p>
        <p className="i_subslogan lora">
          Create your own fascinating masterpiece.
        </p>
      </div>
    </div>
  )
}

export default Firstview

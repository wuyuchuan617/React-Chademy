import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../styles/designer.scss'
function Designer() {
  return (
    <>
      <div className="container">
        <div className="d-flex align-items-center ">
          <div className="designer-des d-flex align-items-center px-5">
            <div className="text-center">
              <h3 className="design">DESIGN BY</h3>
              <h1 className="name">Verner Panton</h1>
              <h3 className="brief">
                Verner Panton started out as a painter before studying
                architecture at the Royal Academy of Fine Arts in Copenhagen.
                After an apprenticeship with architect / designer Arne Jacobsen,
                Panton pursued a path in furniture and interior design, where he
                became famous for his avant-garde designs. Such as chairs with
                no legs and a sofa placed vertically against the wall. In the
                60’s and 70’s, his passion for designing entire environments led
                to immersive interiors featuring his hypnotic patterns and
                futuristic designs for furniture, lighting, wallpapers, posters
                and rugs. Panton’s pioneering use of materials, colours and
                shapes earned him a reputation as a visionary.
              </h3>
              <span>
                <Link to="#">Learn more</Link>
              </span>
            </div>
          </div>
          <div className="designer-img"></div>
        </div>
      </div>
    </>
  )
}

export default Designer

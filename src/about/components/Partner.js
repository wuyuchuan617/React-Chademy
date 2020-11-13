import React, { useState, useEffect } from 'react'
import '../styles/about.css'
import imagepartnerone from '../images/50.png'
import imagepartnertwo from '../images/51.png'
import imagepartnerthree from '../images/52.png'
import imagepartnerfour from '../images/53.png'
import imagepartnerfive from '../images/54.png'
import imagepartnersix from '../images/55.png'
import imagepartnerseven from '../images/56.png'
import imagepartnereight from '../images/57.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Partner(props) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className="container-fluid">
      <div className="a_aboutwrapper2">
        <div className="title01">
          <div className="titlech noto-serif text-center">海外代理商</div>
          <div className="titleEN lora text-center">Foreign Agency</div>
        </div>

        <div className="row">
          <div
            className="article col-md-3 col-mb-4 col-sm-6"
            data-aos="flip-left"
            data-aos-delay="50000"
            data-aos-duration="2400"
          >
            <div className="a_boxpartner">
              <div className="a_upper1">
                <img src={imagepartnerone} />
              </div>

              <div className="a_wordpartner">
                <div className="a_wor1dpartner">
                  <h4>Zürich</h4>
                  <h6>Feldeggstrasse 2, 8152 Glattbrugg</h6>
                  <h6>+43 67 67 107 704</h6>
                </div>
              </div>
            </div>
          </div>
          <div
            className="article col-md-3 col-mb-4 col-sm-6"
            data-aos="flip-left"
            data-aos-delay="50000"
            data-aos-duration="2400"
            data-aos-once="true"
          >
            <div className="a_boxpartner">
              <div className="a_upper1">
                <img src={imagepartnertwo} />
              </div>

              <div className="a_wordpartner">
                <div className="a_wor1dpartner">
                  <h4>Berlin</h4>
                  <h6>Auguststrasse 19, 10117 Berlin</h6>
                  <h6>+49 30 27 59 35 74</h6>
                </div>
              </div>
            </div>
          </div>
          <div
            className="article col-md-3 col-mb-4 col-sm-6"
            data-aos="flip-left"
            data-aos-delay="50000"
            data-aos-duration="2400"
            data-aos-once="true"
          >
            <div className="a_boxpartner">
              <div className="a_upper1">
                <img src={imagepartnerthree} />
              </div>

              <div className="a_wordpartner">
                <div className="a_wor1dpartner">
                  <h4>Amsterdam</h4>
                  <h6>Aalsmeerderdijk 640, 1435 BW Rijsenhout Netherlands</h6>
                  <h6>+31 29 73 74 747</h6>
                </div>
              </div>
            </div>
          </div>
          <div
            className="article col-md-3 col-mb-4 col-sm-6"
            data-aos="flip-left"
            data-aos-delay="50000"
            data-aos-duration="2400"
            data-aos-once="true"
          >
            <div className="a_boxpartner">
              <div className="a_upper1">
                <img src={imagepartnerfour} />
              </div>

              <div className="a_wordpartner">
                <div className="a_wor1dpartner">
                  <h4>Helsinki</h4>
                  <h6>Eteläranta 14, 00130 Helsinki</h6>
                  <h6>+35 85 05 02 02 75</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="article col-md-3 col-mb-4 col-sm-6"
            data-aos="flip-left"
            data-aos-delay="50000"
            data-aos-duration="2400"
            data-aos-once="true"
          >
            <div className="a_boxpartner">
              <div className="a_upper1">
                <img src={imagepartnerfive} />
              </div>

              <div className="a_wordpartner">
                <div className="a_wor1dpartner">
                  <h4>London</h4>
                  <h6>34 Queen Anne’s Gate, SW1H 9AB London United Kingdom</h6>
                  <h6>+44 20 72 22 05 74</h6>
                </div>
              </div>
            </div>
          </div>
          <div
            className="article col-md-3 col-mb-4 col-sm-6"
            data-aos="flip-left"
            data-aos-delay="50000"
            data-aos-duration="2400"
            data-aos-once="true"
          >
            <div className="a_boxpartner">
              <div className="a_upper1">
                <img src={imagepartnersix} />
              </div>

              <div className="a_wordpartner">
                <div className="a_wor1dpartner">
                  <h4>Stockholm</h4>
                  <h6>Rosenlundsgatan 38, 118 53 Stockholm</h6>
                  <h6>+46 84 10 32 502</h6>
                </div>
              </div>
            </div>
          </div>
          <div
            className="article col-md-3 col-mb-4 col-sm-6"
            data-aos="flip-left"
            data-aos-delay="50000"
            data-aos-duration="2400"
            data-aos-once="true"
          >
            <div className="a_boxpartner">
              <div className="a_upper1">
                <img src={imagepartnerseven} />
              </div>

              <div className="a_wordpartner">
                <div className="a_wor1dpartner">
                  <h4>Paris</h4>
                  <h6>3, Avenue du Président Wilson, 75016 Paris</h6>
                  <h6>+33 1 45 63 04 29</h6>
                </div>
              </div>
            </div>
          </div>
          <div
            className="article col-md-3 col-mb-4 col-sm-6"
            data-aos="flip-left"
            data-aos-delay="50000"
            data-aos-duration="2400"
            data-aos-once="true"
          >
            <div className="a_boxpartner">
              <div className="a_upper1">
                <img src={imagepartnereight} />
              </div>

              <div className="a_wordpartner">
                <div className="a_wor1dpartner">
                  <h4>Shanghai</h4>
                  <h6>F14 No.100 East Yan An Road, Shanghai, China</h6>
                  <h6>+86 13 81 72 50 436</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partner

import React, { useEffect } from 'react'
import imagelogo from '../images/LOGO-01.svg'
import facebook from '../images/facebook-brands.svg'
import instagram from '../images/instagram-brands.svg'
import linkedin from '../images/linkedin-brands.svg'
import line from '../images/line-brands.svg'
import pinterest from '../images/pinterest-brands.svg'
import youtube from '../images/youtube-brands.svg'
import '../styles/testfooter.css'

function Testfooter() {
  return (
    <div className="container-fluid">
      <div className="row">
        <footer className="d-flex flex-column align-items-center justify-content-center">
          <div className="footer-logo-container">
            <img src={imagelogo} />
          </div>
          <nav className="d-flex flex-wrap footer-navbar justify-content-center">
            <div className="workchance">
              <a href="#">關於</a>
            </div>
            <div className="worktwo">
              <a href="#">客服支援</a>
            </div>
            <div className="workthree">
              <a href="#">購物須知</a>
            </div>
            <div className="workfour">
              <a href="#">配送方式</a>
            </div>
            <div className="workfive">
              <a href="#">退貨規則</a>
            </div>
            <div className="worksix">
              <a href="#">常見問題</a>
            </div>
            <div className="workseven">
              <a href="#">法律條款</a>
            </div>
          </nav>

          <nav className="d-flex flex-wrap footer-navbar justify-content-center">
            <div className="a_icons">
              <img src={facebook} alt="" />
            </div>
            <div className="a_icons">
              <img src={instagram} alt="" />
            </div>
            <div className="a_icons">
              <img src={linkedin} alt="" />
            </div>
            <div className="a_icons">
              <img src={line} alt="" />
            </div>
            <div className="a_icons">
              <img src={pinterest} alt="" />
            </div>
            <div className="a_icons">
              <img src={youtube} alt="" />
            </div>
          </nav>
          <div className="copyright">© 2020 - &Chademy Co. Ltd 版權所有</div>
          <nav className="d-flex footer-sub-navbar">
            <div className="privacy">
              <a href="#">隱私</a>
            </div>
            <div className="low">
              <a href="#">法律聲明</a>
            </div>
            <div className="low-terms">
              <a href="#">條款</a>
            </div>
            <div className="cookies">
              <a href="#">COOKIES</a>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  )
}

export default Testfooter

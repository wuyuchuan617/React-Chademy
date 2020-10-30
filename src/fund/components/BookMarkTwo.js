import React from 'react'
import '../styles/FundHomepage.scss'
import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function BookMarkTwo() {
  return (
    <>
      <div className="e_lablebox2">
        <Link to="/newfundproject" className="e_defaultlable">
          專案ㄧ
        </Link>
        <Link to="/endsoonfund" className="e_activelable">
        專案二
        </Link>
        <Link to="/endsoonfund" className="e_activelable">
        專案三
        </Link>
        <Link to="/endsoonfund" className="e_activelable">
        專案四
        </Link>
      </div>
    </>
  )
}

export default BookMarkTwo

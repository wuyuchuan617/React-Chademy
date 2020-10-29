import React, { useState, useEffect } from 'react'

import Header from './header'
import Catchcopy from './catchcopy'
import About from './about'

import classes from './style.module.scss'
import Antique from './antique'
import News from './news'
import Classic from './classic'
import Bidding from './bidding'

import Courses from './courses'
import Blogs from './blogs'

function Home(props) {
  return (
    <>
      <Header />
      <body className="container">
        <Catchcopy />
        <About />
        <News />
        <Classic />
        <Antique />
        <Bidding />
        <Courses />
        <Blogs />
      </body>
    </>
  )
}

export default Home

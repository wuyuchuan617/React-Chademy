import React from 'react'
import bookmark from '../styles/bookmark.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


function Bookmark(){
    return(
        <>
        {/* <div className="container"> */}
        <div className="row">
        <div className="col g_lablebox">
        <Link to="/pages/desc/record" 
        onClick={()=>{}}
        className="g_defaultlable">
          出價紀錄
        </Link>
        <Link to="/pages/desc/chatroom" className=" g_activelable">
          聊天室
        </Link>
        <Link to="/pages/desc/spec" className="g_defaultlable">
          產品規格
        </Link>
      </div>
      </div>
      {/* </div> */}
        </>
    )
}

export default Bookmark




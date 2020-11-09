import React from 'react'
import bookmark from '../styles/bookmark.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


function Bookmark(props){
  const{data}=props
    return(
        <>
        {/* <div className="container"> */}
        <div className="row">
        <div className="col g_lablebox">
        <Link to={`/pages/desc/record/${data.sid}`}
        onClick={()=>{}}
        className="g_activelable">
          出價紀錄
        </Link>
        <Link to={`/pages/desc/chatroom/${data.sid}`} className=" g_defaultlable">
          聊天室
        </Link>
      </div>
      </div>
      {/* </div> */}
        </>
    )
}

export default Bookmark




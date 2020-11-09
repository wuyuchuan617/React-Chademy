import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import webSocket from 'socket.io-client'

function Chatroom(){
    // const [ws,setWs] = useState(null)

    // const connectWebSocket = () => {
    //     //開啟
    //     setWs(webSocket('http://localhost:5555'))
    // }

    // useEffect(()=>{
    //     if(ws){
    //         //連線成功在 console 中打印訊息
    //         console.log('success connect!')
    //         //設定監聽
    //         initWebSocket()
    //     }
    // },[ws])

    // const initWebSocket = () => {
    //     //對 getMessage 設定監聽，如果 server 有透過 getMessage 傳送訊息，將會在此被捕捉
    //     ws.on('getMessage', message => {
    //         console.log(message)
    //     })
    // }   
    // const sendMessage = () => {
    //     //以 emit 送訊息，並以 getMessage 為名稱送給 server 捕捉
    //     ws.emit('getMessage', '只回傳給發送訊息的 client')
    // }
    //     //增加監聽
    //     ws.on('addRoom', message => {
    //         console.log(message)
    //     })
    // }
    
    // //選擇聊天室時觸發，如果有選擇那就將房間 id 送給 Server
    // const changeRoom = (event) => {
    //     let room = event.target.value
    //     if(room !== ''){
    //         ws.emit('addRoom', room)
    //     }
    // }
    // const disConnectWebSocket = () =>{
    //     //向 Server 送出申請中斷的訊息，讓它通知其他 Client
    //     ws.emit('disConnection', 'XXX')
    // }
    
    // const initWebSocket = () => {
    
    //     /*其餘程式碼省略*/
      
    //     //以 leaveRoom 接收有使用者離開聊天的訊息
    //     ws.on('leaveRoom', message => {
    //         console.log(message)
    //     })
    //     // Server 通知完後再傳送 disConnection 通知關閉連線
    //     ws.on('disConnection', () => {
    //         ws.close()
    //     })
    
    return(
        <>
        {/* <div>
            <input type='button' value='連線' onClick={connectWebSocket} />
            <input type='button' value='送出訊息，只有自己收到回傳' onClick={() => { sendMessage('getMessage') }} />
            <input type='button' value='送出訊息，讓所有人收到回傳' onClick={() => { sendMessage('getMessageAll') }} />
            <input type='button' value='送出訊息，除了自己外所有人收到回傳' onClick={() => { sendMessage('getMessageLess') }} />
            <select onChange={changeRoom}>
                <option value=''>請選擇房間</option>
                <option value='room1'>房間一</option>
                <option value='room2'>房間二</option>
            </select>
            <input type='button' value='斷線' onClick={disConnectWebSocket} />
        </div> */}
        </>
    )
}

export default Chatroom
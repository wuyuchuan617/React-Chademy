import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

import spec from '../styles/spec.scss'
import desc from '../styles/desc.scss'

const ENDPOINT = "http://127.0.0.1:8080";

function Spec(){
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
    });
  }, []);
    return(
        <>
        <div className="row">
            <div className="col g-bg">
            <p>
              It's <time dateTime={response}>{response}</time>
            </p>
            <div className="info">
              <h4>產品規格</h4>
              <div className="line2"></div>
              <div className="justify-content-center d-flex">
                <div className="col-6">
                  <h4 className="text-center">尺寸</h4>
                  <table className="mx-auto">
                    <tbody className="text-right justify-content-center ">
                      <tr>
                        <th>Height</th>
                        <td>76cm</td>
                      </tr>
                      <tr>
                        <th>width</th>
                        <td>74cm</td>
                      </tr>
                      <tr>
                        <th>Depth</th>
                        <td>66cm</td>
                      </tr>
                      <tr>
                        <th>Seat Height</th>
                        <td>55cm</td>
                      </tr>
                      <tr>
                        <th>Armrest Height</th>
                        <td>54cm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-6">
                  <h4 className="text-center">材質</h4>
                  <p className="text-center">
                    Solid soaped oak frame with seat and back in natural
                    canvas.Solid soaped oak frame with seat and back in natural
                    canvas.Solid soaped oak frame with seat and back in natural
                    canvas.Solid soaped oak frame with seat and back in natural
                    canvas.Solid soaped oak frame with seat and back in natural
                    canvas.
                  </p>
                </div>
              </div>
            </div>
          </div>
            </div>
        
        </>
    )
}

export default Spec
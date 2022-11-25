import React, { useContext, useRef } from 'react'
/* import { useEffect } from 'react' */
import { SocketContext } from '../../context/socket'

function StreamVideo () {
    const canvas = useRef(null)
    // const [btn, setBtn] = useState(null)
    const video = useRef(null)

    const socket = useContext(SocketContext)
    // const [Transitir, setTransmitir] = useState([])

    function pubmsg(msg){
        document.querySelector('.status').innertext = msg

    }
    function loadCamara(stream){
        video.current.srcObject = stream
        pubmsg('camara funcionando')

    }
    function errorCamara(){
        pubmsg('camara ha fallado')

    }
    function verVideo(video, context){
        context.drawImage(video, 0, 0, 200, 150)
        socket.emit('stream', canvas.current.toDataURL('image/webp', .2))

    }

    function emit () {
        navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msgGetUserMedia)
        if (navigator.getUserMedia){
            navigator.getUserMedia({video:true}, loadCamara, errorCamara)
        }
        setInterval( ()=> {
            verVideo(video.current, canvas.current.getContext('2d'))
        }, 100)
    }
    
    return (
        <div style={{'justifyContent': 'center'}}>
        <h1>EMISION DE VIDEO</h1>
        <button onClick={emit}>Emitir</button>
        <div></div>
        <video ref={video} src="" id="video" style={{'width': '50%'}} autoPlay={true} ></video>
        <div>transmitir</div>
        <canvas ref={canvas} id="preview" style={{'width': '50%','marginLeft': '200px' }} ></canvas>
        <div className="status"></div>
        </div>
    )
}
  
export default StreamVideo;  
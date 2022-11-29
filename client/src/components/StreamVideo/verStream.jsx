import { SocketContext } from '../../context/socket'
import React, { useContext, useRef } from 'react'

function VerStream () {
    const socket = useContext(SocketContext)
    const img = useRef(null)
    const arr = []
    socket.on('stream', function (image){
        arr.push(image)
    })
    arr.map(p => setInterval(() => {img.current.src = p.image }, 100));
    return (
        <div style={{'justifyContent': 'center'}}>
        <img alt='' ref={img} style={{'width': '300px', 'height': '200px'}}/>
        </div>
    )
}
export default VerStream;
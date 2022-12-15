import socketio from 'socket.io-client'
import React from 'react'

export const socket = socketio.connect('https://deploy-hash-production.up.railway.app')
export const SocketContext = React.createContext()

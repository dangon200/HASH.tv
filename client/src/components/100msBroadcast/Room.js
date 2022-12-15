import { useEffect } from 'react'
import Stream from './Stream.js'
import ChatNdParticipants from './ChatNdParticipants.js'
import Controls from './Controls.js'

function Room() {

  return (
    <div className='room'>
      <div className='room__streamSpace'>
        <Stream />
        <Controls />
      </div>
      <ChatNdParticipants />
    </div>
  )
}

export default Room
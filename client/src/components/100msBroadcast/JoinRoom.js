import { React, useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";
import { useDispatch, useSelector } from 'react-redux'

function JoinRoom() {
  // const ENDPOINT = 'https://prod-in2.100ms.live/hmsapi/hashtv.app.100ms.live'
  // const ROOM_ID = process.env.REACT_APP_ROOM_ID

  const user = useSelector(state => state.user)
  const [selectedRole, setSelectedRole] = useState("broadcaster")
  const hmsActions = useHMSActions()

  const handleSubmit = async (e) => {
    e.preventDefault()
   /*  const response = await fetch(`${ENDPOINT}api/token`, {
      method: "POST",
      body: JSON.stringify({
        user_id: user._id ,
        role: selectedRole, //broadcaster, hls-viewer
        type: "app",
        room_id: ROOM_ID,
      }),
    })
    console.log(response)
    const { token } = await response.json()  */
    // console.log(token)
    // Joining the room
    hmsActions.join({
      userName: user.name,
      authToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2Nlc3Nfa2V5IjoiNjM4MDQ5MzUxOTVhZDE0YmRjZDZlZDZmIiwicm9vbV9pZCI6IjYzODA0YjViYWVlNTQ2MjVkYTYzZTg3MSIsInVzZXJfaWQiOiJqamhydGpxYSIsInJvbGUiOiJicm9hZGNhc3RlciIsImp0aSI6IjNlODkyNDhkLTFjMDQtNGY0OS1iNmZkLWU0Mzc4ZGYzNjdlMCIsInR5cGUiOiJhcHAiLCJ2ZXJzaW9uIjoyLCJleHAiOjE2NzEyMDU0MzR9.DOu0Ux0UcIxPpGc2LVoea18ctWp_eu2eZz392_nSric",
    })
  }
  return (
    <form className="join" onSubmit={handleSubmit}>
      <button>Iniciar Stream</button>
    </form>
  );
}

export default JoinRoom;
import { React, useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";
import { useDispatch, useSelector } from 'react-redux'

function JoinRoom() {
  const ENDPOINT = process.env.REACT_APP_TOKEN_ENDPOINT
  const ROOM_ID = process.env.REACT_APP_ROOM_ID

  const user = useSelector(state => state.user)
  const [selectedRole, setSelectedRole] = useState("broadcaster")
  const hmsActions = useHMSActions()

  const handleSubmit = async (e) => {
    e.preventDefault()
    hmsActions.join({
      userName: user.name || "Anonimo",
      authToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2Nlc3Nfa2V5IjoiNjM4MDQ5MzUxOTVhZDE0YmRjZDZlZDZmIiwicm9vbV9pZCI6IjYzODA0YjViYWVlNTQ2MjVkYTYzZTg3MSIsInVzZXJfaWQiOiJvaXBkbGpjbSIsInJvbGUiOiJobHMtdmlld2VyIiwianRpIjoiNTg5MDk1NTgtZTU3MC00NTcwLWI0ZjAtMTQwMWI2NDIyNDgzIiwidHlwZSI6ImFwcCIsInZlcnNpb24iOjIsImV4cCI6MTY3MTEyMDM5MH0.6Xe8jvNQbDSThakoWipXwXS0E94-zRDqoHu11r9d_t4",
    })
  }
  return (
    <form className="join" onSubmit={handleSubmit}>
      <button>Join</button>
    </form>
  );
}

export default JoinRoom;
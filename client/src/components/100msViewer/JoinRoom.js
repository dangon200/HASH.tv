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
      authToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2Nlc3Nfa2V5IjoiNjM4MDQ5MzUxOTVhZDE0YmRjZDZlZDZmIiwicm9vbV9pZCI6IjYzODA0YjViYWVlNTQ2MjVkYTYzZTg3MSIsInVzZXJfaWQiOiJ0d2FxZHN5ZiIsInJvbGUiOiJobHMtdmlld2VyIiwianRpIjoiNjg4MWNmODAtYjc0OC00ZWNiLWIxNjktYjhkYTY4ODJhYmM0IiwidHlwZSI6ImFwcCIsInZlcnNpb24iOjIsImV4cCI6MTY3MTIwNTQzNH0.9G_tr3Uj1o_q_uumbm6gR3v8_9CVQhvpGYC6h1gZXY8",
    })
  }
  return (
    <form className="join" onSubmit={handleSubmit}>
      <button>Join</button>
    </form>
  );
}

export default JoinRoom;
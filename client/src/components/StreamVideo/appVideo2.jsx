import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import {
    chunk,
    Constants,
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import { authToken, createMeeting } from "./API";
import PlayerView from "./PlayerView"
import { Col , Row } from '@mui/material';


function ParticipantView(props) {
    const webcamRef = useRef(null);
    const micRef = useRef(null);
    const screenShareRef = useRef(null);
    const {
      displayName,
      webcamStream,
      micStream,
      screenShareStream,
      webcamOn,
      micOn,
      screenShareOn,
    } = useParticipant(props.participantId);
  
    useEffect(() => {
      if (micRef.current) {
        if (micOn && micStream) {
          const mediaStream = new MediaStream();
          mediaStream.addTrack(micStream.track);
          micRef.current.srcObject = mediaStream;
          micRef.current
            .play()
            .catch((error) =>
              console.error("videoElem.current.play() failed", error)
            );
        } else {
          micRef.current.srcObject = null;
        }
      }
    }, [micStream, micOn]);
  
    useEffect(() => {
      if (webcamRef.current) {
        if (webcamOn && webcamStream) {
          const mediaStream = new MediaStream();
          mediaStream.addTrack(webcamStream.track);
          webcamRef.current.srcObject = mediaStream;
          webcamRef.current
            .play()
            .catch((error) =>
              console.error("videoElem.current.play() failed", error)
            );
        } else {
          webcamRef.current.srcObject = null;
        }
      }
    }, [webcamStream, webcamOn]);
  
    useEffect(() => {
      if (screenShareRef.current) {
        if (screenShareOn) {
          const mediaStream = new MediaStream();
          mediaStream.addTrack(screenShareStream.track);
          screenShareRef.current.srcObject = mediaStream;
          screenShareRef.current
            .play()
            .catch((error) =>
              console.error("videoElem.current.play() failed", error)
            );
        } else {
          screenShareRef.current.srcObject = null;
        }
      }
    }, [screenShareStream, screenShareOn]);
    return (
      <div key={props.participantId}>
        <audio ref={micRef} autoPlay />
        {webcamRef || micOn ? (
          <div>
            <h2>{displayName}</h2>
            <video height={"100%"} width={"100%"} ref={webcamRef} autoPlay />
          </div>
        ) : null}
        {screenShareOn ? (
          <div>
            <h2>Screen Shared</h2>
            <video height={"100%"} width={"100%"} ref={screenShareRef} autoPlay />
          </div>
        ) : null}
        <br />
        <span>
          Mic:{micOn ? "Yes" : "No"}, Camera: {webcamOn ? "Yes" : "No"}, Screen
          Share: {screenShareOn ? "Yes" : "No"}
        </span>
      </div>
    );
}

function JoinScreen({ updateMeetingId, getMeetingAndToken, setMeetingMode }) {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter Meeting Id"
          onChange={(e) => {
            updateMeetingId(e.target.value);
          }}
        />
        <button
          onClick={() => {
            getMeetingAndToken();
            setMeetingMode(Constants.modes.CONFERENCE);
          }}
        >
          Join as a host
        </button>
        <button
          onClick={() => {
            getMeetingAndToken();
            setMeetingMode(Constants.modes.CONFERENCE);
          }}
        >
          Create Meeting
        </button>
        <button
          onClick={() => {
            getMeetingAndToken();
            setMeetingMode(Constants.modes.VIEWER);
          }}
        >
          Join as viewer
        </button>
      </div>
    );
  }

function MeetingContainer({ meetingId, meetingMode }) {
    const [downStreamUrl, setDownStreamUrl] = useState(null);
    const [afterMeetingJoinedHLSState, setAfterMeetingJoinedHLSState] =
      useState(null);
    const [joined, setJoined] = useState(false);
  
    const _handleOnHlsStateChanged = (data) => {
      if (
        data.status === Constants.hlsEvents.HLS_STARTED ||
        data.status === Constants.hlsEvents.HLS_STOPPED
      ) {
        setDownStreamUrl(
          data.status === Constants.hlsEvents.HLS_STARTED
            ? data.downstreamUrl
            : null
        );
      }
  
      if (data.status === Constants.hlsEvents.HLS_STARTING) {
        setAfterMeetingJoinedHLSState("STARTING");
      }
  
      if (data.status === Constants.hlsEvents.HLS_STARTED) {
        setAfterMeetingJoinedHLSState("STARTED");
      }
  
      if (data.status === Constants.hlsEvents.HLS_STOPPING) {
        setAfterMeetingJoinedHLSState("STOPPING");
      }
  
      if (data.status === Constants.hlsEvents.HLS_STOPPED) {
        setAfterMeetingJoinedHLSState("STOPPED");
      }
    };
  
    const {
      join,
      leave,
      toggleMic,
      toggleWebcam,
      toggleScreenShare,
      startHls,
      stopHls,
    } = useMeeting({
      onHlsStateChanged: _handleOnHlsStateChanged,
    });
  
    const { participants } = useMeeting();
  
    const participantsArr = [];
    participants.forEach((values, keys) => {
      if (values.mode === "CONFERENCE") {
        participantsArr.push(values);
      }
    });
    const participantMap = new Map(participantsArr.map((id) => [id.id, id]));
  
    const joinMeeting = () => {
      setJoined(true);
      join();
    };
  
    return (
      <div
        style={{
          height: "100vh",
          overflowY: "auto",
          width: "100vw",
          overflowX: "hidden",
        }}
      >
        <div style={{ height: "40px" }}>
          <header>Meeting Id: {meetingId}</header>
        </div>
        {joined ? (
          meetingMode === Constants.modes.CONFERENCE && (
            <div>
              <button onClick={leave}>Leave</button>
              <button onClick={toggleMic}>toggleMic</button>
              <button onClick={toggleWebcam}>toggleWebcam</button>
              <button onClick={toggleScreenShare}>toggleScreenShare</button>
              <button
                onClick={() => {
                  if (afterMeetingJoinedHLSState === "STARTED") {
                    stopHls();
                  } else {
                    const layout = {
                      type: "GRID",
                      priority: "SPEAKER",
                      gridSize: 12,
                    };
                    startHls({ layout, theme: "LIGHT" });
                  }
                }}
              >
                {afterMeetingJoinedHLSState === "STARTING"
                  ? "Starting HLS"
                  : afterMeetingJoinedHLSState === "STARTED"
                  ? afterMeetingJoinedHLSState === "STOPPING"
                    ? "Stopping HLS"
                    : "Stop HLS"
                  : "Start HLS"}
              </button>
            </div>
          )
        ) : (
          <button onClick={joinMeeting}>Join</button>
        )}
        {meetingMode === Constants.modes.CONFERENCE ? (
          <div>
            {chunk([...participantMap.keys()]).map((k) => (
              <Row key={k} gutter={80}>
                {k.map((l) => (
                  <Col span={4}>
                    <ParticipantView key={l} participantId={l} />
                  </Col>
                ))}
              </Row>
            ))}
          </div>
        ) : (
          <div style={{ display: "flex", flex: 1 }}>
            {joined && <PlayerView downStreamUrl={downStreamUrl} />}{" "}
          </div>
        )}
      </div>
    );
  }

function App() {
  const [meetingId, setMeetingId] = useState(null);
  const [meetingMode, setMeetingMode] = useState(Constants.modes.CONFERENCE);

  const getMeetingAndToken = async (id) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };

  const updateMeetingId = (meetingId) => {
    setMeetingId(meetingId);
  };

  return authToken && meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: false,
        name: "C.V. Raman",
        mode: "CONFERENCE", // "CONFERENCE" || "VIWER"
        multiStream: false,
      }}
      token={authToken}
    >
      <MeetingConsumer>
        {() => <MeetingContainer meetingId={meetingId} meetingMode={meetingMode} />}
      </MeetingConsumer>
    </MeetingProvider>
  ) : (
    <JoinScreen
      getMeetingAndToken={getMeetingAndToken}
      updateMeetingId={updateMeetingId}
      setMeetingMode={setMeetingMode}
    />
  );
}

export default App;
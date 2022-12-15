import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals.js";
// import { SocketContext, socket } from './context/socket'
import { Provider } from "react-redux";
import store from "./store/index.js";
import { BrowserRouter } from "react-router-dom";
import { HMSRoomProvider } from "@100mslive/react-sdk";

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
      <HMSRoomProvider>
      <App />
      </HMSRoomProvider>
      </BrowserRouter>
    </Provider>
  ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// <SocketContext.Provider value={socket}></SocketContext.Provider>
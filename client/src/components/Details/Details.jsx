import React from "react";
import { Link } from "react-router-dom";
import { getStreamId } from "../../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import s from "./Details.module.css";
<<<<<<< HEAD
import styled from "styled-components";
import PagarMP from "../PagarMP/Subscriptions";
import Donations from "../PagarMP/Donations";
import ComprarHC from "../PagarMP/ComprarHC";
import Rating from "../Rating/Rating";
=======
import styled from 'styled-components';
import PagarMP from "../PagarMP/Subscriptions"
import Donations from "../PagarMP/Donations"
import ComprarHC from "../PagarMP/ComprarHC"
>>>>>>> 41c498fa7dbb19fcc8a2e418c9893d65aec7f6e8

const Detail = (props) => {
  const streamId = props.match.params.id;
  const dispatch = useDispatch();
  const streamDetail = useSelector((state) => state.streamDetail);
  console.log(
    "🚀 ~ file: Details.jsx:16 ~ Detail ~ streamDetail",
    streamDetail
  );

  useEffect(() => {
    dispatch(getStreamId(streamId));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Rating />
      <LinkContainer>
        <StyledLink to="/">Back</StyledLink>
        <span style={{ fontWeight: "700", fontSize: "20px" }}>
          CONTENIDO EN VIVO
        </span>
        {/* <StyledLink to={`/user`}>Mi Perfil</StyledLink> */}
      </LinkContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          marginTop: "10px",
          height: "88vh",
        }}
      >
        <div
          style={{
            width: "15%",
            backgroundColor: "#E3E5E5",
            borderRadius: "16px",
            marginBottom: "20px",
            height: "88vh",
          }}
        >
          <p>
            <b>CANALES RECOMENDADOS</b>
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "10px",
              overflowY: "scroll",
              height: "78vh",
            }}
          >
            {[0, 1, 2, 3, 4, 5, 6].map((e) => {
              return (
                <div
                  key={e}
                  style={{
                    display: "flex",
                  }}
                >
                  <img
                    src={streamDetail[0]?.image}
                    className={s.img}
                    alt={streamDetail[0]?.name}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "left",
                      padding: "10px 0",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ margin: "0" }}>
                      <b>{streamDetail[0]?.name}</b> @{streamDetail[0]?.user}
                    </span>
                    <span style={{ margin: "0" }}>
                      {streamDetail[0]?.category || "Sin Categoría"}
                    </span>
                    <span style={{ margin: "0" }}>
                      {streamDetail[0]?.subcriptores || "0"} subs
                    </span>
                    {/* <span style={{ margin: "0" }}>
                      {streamDetail[0].rating.map((r) => (
                        <div key={r._id}>
                          <p>{r.score}</p>
                          <p>{r.name[0].name}</p>
                        </div>
                      ))}
                    </span> */}
                    <span style={{ margin: "0" }}>
                      <span style={{ color: "#2ce02c", margin: "0" }}>● </span>
                      9999
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ width: "60%" }}>
          <div
            style={{
              backgroundColor: "black",
              width: "100%",
              height: "43vh",
              borderRadius: "16px",
              position: "relative",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                color: "white",
                backgroundColor: "red",
                borderRadius: "16px",
                height: "30px",
                width: "120px",
                position: "absolute",
                top: "20px",
                left: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                lineHeight: "30px",
                fontWeight: "700",
              }}
            >
              EN DIRECTO
            </div>
          </div>
          <div
            style={{
              boxSizing: "border-box",
              backgroundColor: "#E3E5E5",
              width: "100%",
              borderRadius: "16px",
              padding: "20px",
              marginBottom: "10px",
              height: "43vh",
            }}
          >
            {streamDetail[0] && (
              <div>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <img
                    src={streamDetail[0].image}
                    className={s.img}
                    alt={streamDetail.name}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "left",
                      padding: "10px 0",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ margin: "0" }}>
                      <b>{streamDetail[0].name}</b> @{streamDetail[0].user}
                    </span>
                    <span style={{ margin: "0" }}>
                      {streamDetail[0].category || "Sin Categoría"}
                    </span>
                    <span style={{ margin: "0" }}>
                      {streamDetail[0].subcriptores || "0"} subs
                    </span>
                    <span style={{ margin: "0" }}>
                      <span style={{ color: "#2ce02c", margin: "0" }}>● </span>
                      9999
                    </span>
                    <span>
                      {streamDetail[0].rating.map((r) => (
                        <div key={r._id}>
                          <p>User: {r.name[0].name}</p>
                          <p>Score: {r.score}</p>
                        </div>
                      ))}
                    </span>
                  </div>
                </div>
                <PagarMP />
                <Donations />
                <ComprarHC />

                <p>{streamDetail[0].description}</p>
                <p>
                  <b>Reglas:</b> {streamDetail[0].rules}
                </p>
                <p>Network: {streamDetail[0].networks}</p>
                <p>Contents: {streamDetail[0].contents}</p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                    // border: "2px solid #f00",
                    width: "100%",
                    justifyContent: "space-around",
                  }}
                >
                  <p>Ratings:</p>
                  <p>
                    {streamDetail[0].rating.map((r) => (
                      <div
                        key={r._id}
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          borderBottom: "1px solid #0003",
                        }}
                      >
                        <p>
                          <b>User:</b>
                          {r.name[0].name}
                        </p>
                        <p>
                          <b>Score:</b> {r.score}
                        </p>
                      </div>
                    ))}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          style={{
            width: "15%",
            backgroundColor: "#E3E5E5",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "88vh",
          }}
        >
          <p style={{ fontWeight: "700" }}>CHAT EN VIVO</p>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              width: "90%",
              height: "77vh",
              borderRadius: "16px",
              marginBottom: "10px",
            }}
          ></div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              width: "90%",
              height: "32px",
              borderRadius: "16px",
            }}
          >
            <input
              style={{
                border: "none",
                outline: "none",
                lineHeight: "30px",
                width: "75%",
                height: "30px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const StyledLink = styled(Link)`
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  color: white;
  background-color: red;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin: 0;
  padding: 0 10px;
  font-weight: 700;
`;

const LinkContainer = styled.div`
  display: flex;
  padding: 0 5%;
  justify-content: space-between;
  margin-top: 10px;
`;

export default Detail;

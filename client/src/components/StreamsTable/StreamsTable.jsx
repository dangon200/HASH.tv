import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStreams } from "../../store/actions/actions.js";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

export default function StreamsTable() {
  const allStreams = useSelector((state) => state.streams);
  const cookies = new Cookies();
  const token = cookies.get("TOKEN");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStreams());
    console.log(
      "🚀 ~ file: StreamsTable.jsx:11 ~ StreamsTable ~ token",
      token.user
    );
    console.log(
      "🚀 ~ file: StreamsTable.jsx:9 ~ StreamsTable ~ allStreams",
      allStreams
    );
  }, []);

  return (
    <div>
      <Link to="/admin">
        <button>Admin</button>
      </Link>
      {/* {allusers.length > 0 ? (
        <div>
          <h3>Table of Users</h3>
          <table>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Roles</th>
            </tr>
            <tr>
              <td>
                {allusers.map((u) => (
                  <tr key={u._id}>
                    <td>{u.name}</td>
                  </tr>
                ))}
              </td>
              <td>
                {allusers.map((u) => (
                  <tr key={u._id}>
                    <td>{u.email}</td>
                  </tr>
                ))}
              </td>
              <td>
                {allusers.map((u) => (
                  <tr key={u._id}>
                    <td>{u.roles.map((r) => r.name)}</td>
                  </tr>
                ))}
              </td>
            </tr>
          </table>
        </div>
      ) : null} */}
      {allStreams.length > 0 ? (
        <div>
          <h3>Table of Streams</h3>
          <table>
            <tr>
              <th>Channel</th>
              <th>Language</th>
              <th>Category</th>
            </tr>
            <tr>
              <td>
                {allStreams.map((s) => (
                  <tr key={s._id}>
                    <td>{s.name}</td>
                  </tr>
                ))}
              </td>
              <td>
                {allStreams.map((s) => (
                  <tr key={s._id}>
                    <td>{s.language}</td>
                  </tr>
                ))}
              </td>
              <td>
                {allStreams.map((s) => (
                  <tr key={s._id}>
                    <td>{s.category}</td>
                  </tr>
                ))}
              </td>
            </tr>
          </table>
        </div>
      ) : null}
    </div>
  );
}

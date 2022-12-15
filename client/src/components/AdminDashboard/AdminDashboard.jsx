import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";

import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const cookies = new Cookies();
  const token = cookies.get("TOKEN");

  return (
    <div>
      <h1>{`Welcome ${token.user.name.toUpperCase()}`}</h1>
      <Link to="/admin/users">
        <button>Users</button>
      </Link>
      <Link to="/admin/streams">
        <button>Streams</button>
      </Link>
    </div>
  );
}

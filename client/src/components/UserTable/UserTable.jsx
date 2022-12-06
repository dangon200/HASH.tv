import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/actions/actions";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import "./UserTable.css";

export default function UserTable() {
  const allusers = useSelector((state) => state.users);
  const cookies = new Cookies();
  const token = cookies.get("TOKEN");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      {/* //   <div>
    //     <div>
    //       <span>Filter by Name:</span>
    //       <select>
    //         <option value="" id="opt">
    //           Ordernar
    //         </option>
    //         <option value="az"> A-Z </option>
    //         <option value="za"> Z-A </option>
    //       </select>
    //     </div>
    //   </div> */}
      <div>
        {allusers.length > 0 ? (
          <div className="container">
            <table className="table">
              <caption>List of users</caption>
              <tr className="tr-head">
                <div className="table_container">
                  <th className="th-name">Name</th>
                  {/* <tr className="td_name_content">
                      {allusers.map((u) => (
                        <tr key={u._id}>
                          <td>{u.name}</td>
                        </tr>
                      ))}
                    </tr> */}
                  <th className="th-email">Email</th>
                  {/* <tr className="td_email_content">
                      {allusers.map((u) => (
                        <tr key={u._id}>
                          <td>{u.email}</td>
                        </tr>
                      ))}
                    </tr> */}
                  <th className="th-roles">Roles</th>
                  {/* <tr className="td_roles_content">
                      {allusers.map((u) => (
                        <tr key={u._id}>
                          <td>{u.roles.map((r) => r.name)}</td>
                        </tr>
                      ))}
                    </tr> */}
                </div>
              </tr>
              {/*<tbody className="tr-body">
                <tr>
                   <td>
                    {allusers.map((u) => (
                      <tr key={u._id}>
                        <td>{u.name}</td>
                      </tr>
                    ))}
                  </td> */}
              {/* <td>
                    {allusers.map((u) => (
                      <tr key={u._id}>
                        <td>{u.email}</td>
                      </tr>
                    ))}
                  </td> */}
              {/* <td>
                    {allusers.map((u) => (
                      <tr key={u._id}>
                        <td>{u.roles.map((r) => r.name)}</td>
                      </tr>
                    ))}
                  </td> 
                </tr>
              </tbody>*/}
            </table>
          </div>
        ) : null}
      </div>
    </div>
  );
}

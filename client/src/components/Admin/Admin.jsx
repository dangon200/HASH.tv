import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStreams, getUserId, getUsers, updateUserAdmin,updateBanned } from "../../store/actions/actions";
import "../Admin/Admin.css"


function Admin() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.usersDetail)
    const users = useSelector(state => state.users)
    const streams = useSelector(state => state.streams)
    console.log(users)
    console.log(streams)

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getStreams())
        dispatch(getUserId("63911ccdac0e93d87575b4c8"))
        
    },[])

    const banned = users.filter((user) => user.banned === true)
    const bannedTotal = users.filter((user) => user.banned === true).length
    const prueba = users.map((user) => user.myStreams)
    console.log(prueba)
    const prueba2 = prueba.flat().length

    const donationsAll=users.map((donation) => donation.donations) 
    const flatDonationsAll = donationsAll.flat().length

    const subscriptionsAll=users.map((sub) => sub.Subscriptions) 
    const flatsubscriptionsAll = subscriptionsAll.flat().length
    const handleUpdateUserAdmin = (e) => {
        dispatch(updateUserAdmin(e))
    }
    const handleUpdateBanned = (e) => {
        dispatch(updateBanned(e))
    }

    return (
<>
<div class="d-flex" id="wrapper">
  <div class="bg-white" id="sidebar-wrapper">
      <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
              class="fas fa-user-secret me-2 text-dark"></i>HASH
      </div>
      <div class="list-group list-group-flush my-3">
     
          <a href="#" class="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i
                  class="fas fa-power-off me-2"></i>Volver</a>
      </div>
  </div>
  <div id="page-content-wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4"/>
          <div class="d-flex align-items-center">
              <i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
              <h2 class="fs-2 m-0 text-dark">Dashboard Admin</h2>
          </div>

          <div id="page-content-wrapper">
            

              <div class="container-fluid px-4">
                  <div class="row g-3 my-2">
                      <div class="col-md-3">
                          <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded text-dark">
                              <div>
                                  <h3 class="fs-2">{users.length}</h3>
                                  <p class="fs-5">Usuarios en la Plataforma</p>
                              </div>
                              <i class="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                          </div>
                      </div>

                      <div class="col-md-3">
                          <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded text-dark">
                              <div>
                                  <h3 class="fs-2">{streams.length}</h3>
                                  <p class="fs-5">Canales de Stream en la plataforma</p>
                              </div>
                              <i class="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                          </div>
                      </div>

                      <div class="col-md-3">
                          <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded text-dark">
                              <div>
                                  <h3 class="fs-2">{flatDonationsAll}</h3>
                                  <p class="fs-5">Donaciones en la Plataforma</p>
                              </div>
                              <i class="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                          </div>
                      </div>

                     

                      <div class="col-md-3">
                          <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded text-dark">
                              <div>
                                  <h3 class="fs-2">{flatsubscriptionsAll}</h3>
                                  <p class="fs-5">Subcripciones echas en la Plataforma</p>
                              </div>
                              <i class="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                          </div>
                      </div>

                      <div class="col-md-3">
                          <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded text-dark">
                              <div>
                                  <h3 class="fs-2">{bannedTotal}</h3>
                                  <p class="fs-5">Usuarios Baneados</p>
                              </div>
                              <i class="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                          </div>
                      </div>

          </div>

          <div class="row my-5">
              <h3 class="fs-4 mb-3 text-dark">Informacion de Usuarios</h3>
              <div class="col">
                  <table class="table bg-white rounded shadow-sm   ">
                      <thead>
                          <tr>
                              <th scope="col" width="50">#</th>
                              <th scope="col">Usuario</th>
                              <th scope="col">Email</th>
                              <th scope="col">Pais</th>
                              <th scope="col">Rol</th>
                          </tr>
                      </thead>
                      <tbody>
                        {users?.map((user,index)=>{
                          return(
                              <tr>
                              <th scope="row ">{index + 1}</th>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.country}</td>
                              <td>{user.roles[0].name}</td>
                              <button type="button" class="btn m-2 btn-primary btn-lg active" onClick={() => handleUpdateUserAdmin(user._id)}>User/Admin</button>
                              {user.banned === false?
                              (<><button type="button" class="btn btn-danger btn-lg active" onClick={() => handleUpdateBanned(user._id)}>Banned</button></>)
                              :(<></>)}
                              <Link to={"/info/"+ user._id}>
                              <button type="button" class="btn m-2 btn-warning btn-lg active" onClick={() => handleUpdateUserAdmin(user._id)}>Info</button>
                              </Link>
                              </tr>
                          )
                        })}
                          
                      </tbody>
                  </table>
              </div>
          </div>
          <div class="row my-5">
              <h3 class="fs-4 mb-3 text-dark">Usuarios baneados</h3>
              <div class="col">
                  <table class="table bg-white rounded shadow-sm  ">
                      <thead>
                          <tr>
                              <th scope="col" width="50">#</th>
                              <th scope="col">Usuario</th>
                              <th scope="col">Email</th>
                              <th scope="col">Pais</th>
                          </tr>
                      </thead>
                      <tbody>
                      {banned?.map((user,index)=>{
                          return(
                              <tr>
                              <th scope="row">{index + 1}</th>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.country}</td>
                              {user.banned === true?
                              (<><button type="button " class="btn btn-success btn-lg active  m-2" onClick={() => handleUpdateBanned(user._id)}>Unbanned</button></>)
                              :(<></>)}
                              </tr>
                          )
                        })}
                        
                      </tbody>
                  </table>
              </div>
          </div>
          </div>
      </div>
</div>
</div>

</>
    )
}
export default Admin
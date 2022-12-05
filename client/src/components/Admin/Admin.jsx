import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStreams, getUserId, getUsers, updateUserAdmin, updateBanned } from "../../store/actions/actions";
import "../Admin/Admin.css"
import { Link } from "react-router-dom";

function Admin() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.usersDetail)
    const users = useSelector(state => state.users)
    const streams = useSelector(state => state.streams)
    // console.log(users)

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getStreams())
        dispatch(getUserId("638a7616c701444ba7c53faa"))

    }, [])


    const banned = users.filter((user) => user.banned === true)
    const prueba = users.map((user) => user.myStreams)
    const prueba2 = prueba.flat().length

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
                        class="fas fa-user-secret me-2"></i>Codersbite</div>
                    <div class="list-group list-group-flush my-3">
                        <Link to="/">
                            <a href="#" class="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i
                                class="fas fa-power-off me-2"></i>Volver</a>
                        </Link>
                    </div>
                </div>

                <div id="page-content-wrapper">
                    <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                        <div class="d-flex align-items-center">
                            <i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
                            <h2 class="fs-2 m-0">Dashboard</h2>
                        </div>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle second-text fw-bold" href="#" id="navbarDropdown"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fas fa-user me-2"></i>{user.map((e) => e.name)}
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Profile</a></li>

                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div class="container-fluid px-4">
                        <div class="row g-3 my-2">
                            <div class="col-md-3">
                                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 class="fs-2">{users.length}</h3>
                                        <p class="fs-5">Usuarios en la Plataforma</p>
                                    </div>
                                    <i class="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 class="fs-2">{prueba2}</h3>
                                        <p class="fs-5">Usuarios con Canales de Stream</p>
                                    </div>
                                    <i
                                        class="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 class="fs-2">{streams.length}</h3>
                                        <p class="fs-5">Usuarios sin Canales de Stream</p>
                                    </div>
                                    <i class="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 class="fs-2">%25</h3>
                                        <p class="fs-5">Donaciones echas en la Plataforma</p>
                                    </div>
                                    <i class="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 class="fs-2">%25</h3>
                                        <p class="fs-5">Administradores en la Plataforma</p>
                                    </div>
                                    <i class="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                                </div>
                            </div>
                        </div>

                        <div class="row my-5">
                            <h3 class="fs-4 mb-3">Informacion de Usuarios</h3>
                            <div class="col">
                                <table class="table bg-white rounded shadow-sm  table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col" width="50">#</th>
                                            <th scope="col">Usuario</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Pais</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users?.map((user, index) => {
                                            return (
                                                <tr>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.country}</td>
                                                    <td>{user.roles[0].name}</td>
                                                    <button type="button" class="btn btn-danger" onClick={() => handleUpdateUserAdmin(user._id)}>User/Admin</button>
                                                    <button type="button" class="btn btn-danger" onClick={() => handleUpdateBanned(user._id)}>Banned/No Banned</button>
                                                </tr>
                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row my-5">
                            <h3 class="fs-4 mb-3">Usuarios baneados</h3>
                            <div class="col">
                                <table class="table bg-white rounded shadow-sm  table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col" width="50">#</th>
                                            <th scope="col">Usuario</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Pais</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {banned?.map((user, index) => {
                                            return (
                                                <tr>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.country}</td>
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



        </>
    )
}
export default Admin
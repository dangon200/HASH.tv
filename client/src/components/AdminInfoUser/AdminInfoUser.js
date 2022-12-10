import React from "react";
import Chart from "react-apexcharts";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserId} from "../../store/actions/actions";
import "../AdminInfoUser/AdminInfoUser.css";

function AdminInfoUser() {
    const dispatch = useDispatch()
    const user = useSelector(state=> state.usersDetail)
    const {id} =useParams()
    useEffect(()=>{
        dispatch(getUserId(id))
    },[])
    console.log(user)
  const options = {
    labels: ["Apple", "Mango", "Orange"],
  };
  const series = [45, 17, 89];
 
        
  return (
    <body className="bg-ligth">
    <div className="">
 
    <div className="row d-flex justify-content-center" >
        <div className="col-md-5  pt-2">
            <div className="row z-depth-2">
                <div className="col-sm-10 rounded-left">
                    <div className="card-block text-center text-white">
                    {/* className="fas fa-user-tie fa-7x mt-5" */}
                        <img className="imge"  src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c325.png" />
                        <h2 className="font-weight-bolt mt-2">{user[0].name}</h2>
                        <p>{user[0].country}</p>
                        <i className="far fa-edit fa-2x mb-4"></i>
                    </div>
                </div>
                <div className="col-sm-10 bg-white rounded-right">
                        <h3 className="mt-1 text-center">Datos del Usuario</h3>
                        <hr className="badge-primary "></hr>
                        <div className="row">
                            <div className="d-flex justify-content-around ">
                                <p className="font-weight-bold" >Email</p>
                                <h6 className="text-muted">{user[0].email}</h6>
                            </div>
                            <div className="d-flex justify-content-around ">
                                <p className="font-weight-bold">Rol del Usuario</p>
                                <h6 className="text-muted">{user[0].roles[0].name}</h6>
                            </div>
                            <div className="d-flex justify-content-around ">
                                <p className="font-weight-bold">Canales de Streams</p>
                                <h6 className="text-muted">{user[0].myStreams.length}</h6>
                            </div>
                            <div className="d-flex justify-content-around ">
                                <p className="font-weight-bold">Subcriptores registr</p>
                                <h6 className="text-muted">{user[0].myStreams.length}</h6>
                            </div>
                            <div className="d-flex justify-content-around ">
                                <p className="font-weight-bold">Baneado</p>
                                <h6 className="text-muted">{user[0].banned === true?
                                (<>SI</>)
                                :(<>NO</>)}</h6>
                            </div>
                            <div className="d-flex justify-content-around ">
                                <p className="font-weight-bold">Fecha de Creacion</p>
                                <h6 className="text-muted">{user[0].createdAt.slice(0,10)}</h6>
                            </div>
                        </div>
                        
                        <hr className="bg-primary"></hr>
                        
                </div>

            </div>

        </div>

    </div>
     <div className="grafic">                              
    <Chart
        type="donut"
        options={options}
        series={series}
        height={640}
        width={600}
        />
    <Chart
        type="bar"
        options={options}
        series={series}
        height={440}
        width={600}
    />
      </div> 
   </div>
   </body>
  );
}

export default AdminInfoUser;

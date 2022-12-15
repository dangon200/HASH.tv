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
  // const options = {
  //   labels: ["3 Meses", "6 Meses", "12 Meses"],
  // };
//   const meses3=user[0].filter((sub) => sub.subcriptions[0].totalAmount === 1500)
//   const meses6=user[0].filter((sub) => sub.subcriptions[0].totalAmount === 2500)
//   const meses12=user[0].filter((sub) => sub.subcriptions[0].totalAmount === 3500)
  // const series = [45, 17, 89];


  // const series2= [{
  //   name: 'series1',
  //   data: [31, 40,45, 51, 60]
  // }]
  // const options2= {

  //   dataLabels: {
  //     enabled: false
  //   },
  //   stroke: {
  //     curve: 'smooth'
  //   },
  //   xaxis: {
  //     type: 'datetime',
  //     categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  //   },
  //   tooltip: {
  //     x: {
  //       format: 'dd/MM/yy HH:mm'
  //     },
  //   },
  // }
        
  return (
    <body className="bg-ligth">
      <div>
        <button>Volver</button>
      </div>
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
                <div className="col-sm-10  rounded-right">
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
                                <p className="font-weight-bold">Hash Cash</p>
                                <h6 className="text-muted">{user[0].HashCash}</h6>
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
    {/* <h1>Datos de su canal </h1>  
     <div className="grafic">                            
    <Chart
        type="donut"
        options={options}
        series={series}
        height={640}
        width={600}
        />
    <Chart
        type="area"
        options={options2}
        series={series2}
        height={440}
        width={600}
    />
      </div>  */}
   </div>
   </body>
  );
}

export default AdminInfoUser;

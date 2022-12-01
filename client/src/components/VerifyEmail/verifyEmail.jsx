import axios from 'axios'
import swal from 'sweetalert';
const urlApi = 'http://localhost:3001'

function Verify(uniqueKey) {
    const key = uniqueKey.uniqueKey
    axios.put(`${urlApi}/api/user/email/verify/${key}`)
        .then(respuesta => {
            swal({
                title: "Cuenta Validada!",
                text: "Presiona continuar para inicia sesión",
                icon: "success",
                button: "Continuar"
            }).then(function() { window.location.href = '/'})
        })
        .catch(error => {
                let respuesta= error.response.data;
                swal({
                    title: "Error al verificar!",
                    text: (respuesta),
                    icon: "warning",
                    dangerMode: true,
                    button: "Continuar"
                }).then(function(){ window.location.href = '/'})
        })
        return(
            <>
            </>
        )
    };
    /* .then(res => {
    if(res.data === true){
        return (
            <div>
            <div className="justify-content:center;align-items:center;font-weight:900;
            font-size: 40px;
            width: 300px;
            height: 100px;">Verificacíon Exitosa</div>
            <button href="/" className="justify-content:center;align-items:center;font-weight:300;
            font-size: 20px;
            width: 200px;
            height: 100px;background-color: #03EFFE">Home</button>
            </div>
        )
        }
    })
    .catch(error => {
            console.log(error)
            if (error) {
              return(
                <div>
            <div className="justify-content:center;align-items:center;font-weight:900;
            font-size: 40px;
            width: 300px;
            height: 100px;">Error al verificar tu correo</div>
            <button href="/" className="justify-content:center;align-items:center;font-weight:300;
            font-size: 20px;
            width: 200px;
            height: 100px;background-color: #03EFFE">Home</button>
            </div>
              ) // eslint-disable-line
            }
        }) */

    

export default Verify;
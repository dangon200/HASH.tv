import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import s from './userProfile.module.css'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { updateProfileImage, getUserId } from '../../store/actions/actions'
import { useEffect, useRef } from 'react'
import ComprarHC from '../PagarMP/ComprarHC'
import App from '../100msBroadcast/App.js'

export default function UserProfile () {
  const user = useSelector(state => state.user)
  /* const userDetail = useSelector(state => state.usersDetail) */
  const dispatch = useDispatch()
  const hiddenFileInput = useRef(null);
 /*  useEffect(() => {
    dispatch(getUserId(user._id))
  }, [dispatch, userDetail])
 console.log(userDetail) */
 const handleClick = event => {
    hiddenFileInput.current.click();
  };
  const handleChange = async (e) => {
    const reader = new FileReader()
    reader.addEventListener('load', function () {
      document.getElementById('image').src = reader.result
    })
    reader.readAsDataURL(e.target.files[0])

    const cloudName = 'dfq27ytd2'
    const preset = 'cpnushlf'
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`

    const formData = new FormData()
    formData.append('upload_preset', preset)
    formData.append('file', e.target.files[0])

    const send = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    console.log(send)
    const urlImage = send.data.secure_url
    dispatch(updateProfileImage(user._id, urlImage))
  }
  return (
    <div>
      <Container fluid style={{ height: '100vh' }}>
        <Row className='grid h-100'>
          <Col className={`${s.container}`}>
            <Row className='m-auto w-75' id={s.grid}>
              <Row className={`d-flex mb-5 ${s.title}`}>
                <h1 className='d-flex w-100'>My Profile</h1>
              </Row>
              <Row className={`fs-4 ${s.datos}`}>
                <Col className={s.h2}>
                  <h2>Account data</h2>
                </Col>
              </Row>
              <Container className={s.dataContainer}>
                <div className={s.imageContainer}>
                  <img id='image' className={s.image} src={user.image ? user.image : 'https://i.ibb.co/rxQxPbb/hashlogoblack.png'} alt='profile' />
                  <input type='file' className={s.input} ref={hiddenFileInput} onChange={handleChange} />
                  <button className={s.btn1} onClick={handleClick}>Cambiar foto de perfil</button>
                </div>
                <Table responsive className={s.table} size='lg'>
                  {/* <thead>
                  <tr>
                    <th colSpan={3} className='pb-3'>
                      Datos de cuenta
                      <Link className='text-decoration-none' to='/formEditUser'>
                        Modificar datos de cuenta
                      </Link>
                    </th>
                  </tr>
                </thead> */}
                  <tbody className={s.firstTd}>
                    <tr>
                      <td className="width:100px" style={{ 'paddingLeft': '5px' }}>Usuario</td>
                      <td style={{ 'paddingRight': '5px' }} className={s.secTd}>{user.name}</td>
                    </tr>
                    <tr>
                      <td style={{ 'paddingLeft': '5px' }}>E-mail</td>
                      <td style={{ 'paddingRight': '5px' }} className={s.secTd}>{user.email}</td>
                    </tr>
                    <tr>
                      <td style={{ 'paddingLeft': '5px' }}>HashCash</td>
                      <td style={{ 'paddingRight': '5px' }} className={s.secTd}>{user.hashcash}</td>
                    </tr>
                    </tbody>
                </Table>
              </Container>
              <Row className='fs-3 d-flex justify-content-center align-items-center pt-3'>
                <Col className='d-flex justify-content-start'>
                  <Link className='text-dark font-weight-bold fs-4 p-2' to='/user/edit'>
                    Cambiar contraseña
                  </Link>
                </Col>
                <Col className='d-flex justify-content-end align-items-center mr-4 pb-3'>
                <ComprarHC />
                
                </Col>
              </Row>
              {/* <Table responsive className={s.table2} size='lg'>
                <tbody className={s.Td}>
                  <tr>
                    <td style={{ 'padding-left': '10px' }}>Usuario</td>
                    <td style={{ 'padding-right': '10px' }} className={s.secTd}>mark.65</td>
                  </tr>
                  <tr>
                    <td style={{ 'padding-left': '10px' }}>E-mail</td>
                    <td style={{ 'padding-right': '10px' }} className={s.secTd}>mark.65@gmail.com</td>
                  </tr>
                  <tr>
                    <td style={{ 'padding-left': '10px' }}>Domicilio</td>
                    <td style={{ 'padding-right': '10px' }} className={s.secTd}>Corrientes 123</td>
                  </tr>
                  <tr>
                    <td style={{ 'padding-left': '10px' }}>Telefono</td>
                    <td style={{ 'padding-right': '10px' }} className={s.secTd}>47326875</td>
                  </tr>
                </tbody>
              </Table> */}
            </Row>
          </Col>

        </Row>
      </Container>
    </div>
  )
}
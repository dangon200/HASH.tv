import axios from 'axios'
import * as Yup from 'yup'
import { provinces } from './data'

const startWichLetter = /^[^0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][a-zA-Z0-9$-?¿¡!%.,\s]*$/gi // eslint-disable-line
const passwordValidate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/gm
// at least 8 characters
// - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
// - Can contain special characters
const urlApi = 'http://localhost:3001'
// http:///users/email/:email
// users/username/:username

export const schemaValidateUser = Yup.object().shape({
  username: Yup.string().required('Es Requerido')
    .matches(startWichLetter, 'Debe comenzar con una letra')
    .min(3, 'Min 4 caracteres').max(50, 'Max 50 caracteres')
    .test('testEmail', 'Este usuario ya existe',
      value => {
        return new Promise((resolve, reject) => {
          axios.get(`${urlApi}/api/user/username/${value}`)
            .then(res => {
              resolve(true)
            })
            .catch(error => {
              if (error.response.data === true) {
                resolve(false) // eslint-disable-line
              }
            })
        })
      }),
  email: Yup.string().email('Email no válido').required('Es Requerido')
    .test('testEmail', 'Este correo ya existe',
      value => {
        return new Promise((resolve, reject) => {
          axios.get(`${urlApi}/api/user/email/${value}`)
            .then(res => {
              resolve(true)
            })
            .catch(error => {
              console.log(error)
              if (error.response.data === true) {
                resolve(false) // eslint-disable-line
              }
            })
        })
      }),
  password: Yup.string().required('Es Requerido')
    .min(8, 'Min 8 caracteres')
    .matches(passwordValidate, 'Debe contener al menos 1 mayúscula, 1 minúscula y 1 número')
    .oneOf([Yup.ref('copyPassword'), null], 'Las contraseñas no coinciden').max(20, 'Max 20 caracteres'),
  copyPassword: Yup.string().required('Es Requerido').oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
})

export const schemaValidateEmail = Yup.object().shape({
  email: Yup.string().email('Email no válido').required('Es Requerido')
    .test('testEmail', 'Este correo no existe como cuenta',
      value => {
        return new Promise((resolve, reject) => {
          axios.get(`${urlApi}/api/user/email/${value}`, {
            method: 'GET',
            headers: new Headers({ 'Content-type': 'application/json'}),
          })
            .then(res => {
              resolve(false)
            })
            .catch(error => {
              if (error.response.data === true) {
                resolve(true) // eslint-disable-line
              }
            })
        })
      })
})

export const schemaValidateChangesOfUser = Yup.object().shape({
  password: Yup.string().required('Es Requerido')
    .min(8, 'Min 8 caracteres'),
  newPassword: Yup.string().required('Es Requerido')
    .min(8, 'Min 8 caracteres')
    .matches(passwordValidate, 'Debe contener al menos 1 mayúscula, 1 minúscula y 1 número')
    .oneOf([Yup.ref('repeatNewPassword'), null], 'Las contraseñas no coinciden').max(20, 'Max 20 caracteres'),
  repeatNewPassword: Yup.string().required('Es Requerido').oneOf([Yup.ref('repeatNewPassword'), null], 'Las contraseñas no coinciden')
})

export const schemaValidatePasswordEmail = Yup.object().shape({
  password: Yup.string().required('Es Requerido')
    .min(8, 'Min 8 caracteres')
    .matches(passwordValidate, 'Debe contener al menos 1 mayúscula, 1 minúscula y 1 número')
    .oneOf([Yup.ref('repeatPassword'), null], 'Las contraseñas no coinciden').max(20, 'Max 20 caracteres'),
  repeatPassword: Yup.string().required('Es Requerido').oneOf([Yup.ref('repeatPassword'), null], 'Las contraseñas no coinciden')
})

export const schemaLogin = Yup.object().shape({
  email: Yup.string().email('Formato inválido').required('Es requerido'),
  password: Yup.string().required('Es requerido')
})

// FUNCTION VALIDATE URL IMAGE
export const validateUrl = (value) => {
  if (/[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi.test(value)) {
    return true
  } else return false
}

export const schemaUrl = Yup.object().shape({
  url: Yup.string().required().matches(/[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi, 'Invalid url')
})

// CLOUDINARY FUNCTION UPLOAD AN IMG
export const uplodCloudinary = async (file) => {
  try {
    const cloudName = 'dfq27ytd2'
    const preset = 'cpnushlf'
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`

    const formData = new FormData()
    formData.append('upload_preset', preset)
    formData.append('file', file)

    const send = await fetch(url, {
      method: 'POST',
      body: formData
    })
    const response = await send.json()
    const urlImage = response.secure_url
    if (validateUrl(urlImage)) {
      return urlImage
    } else throw Error('url not valid')
    // END CLOUDINARY
  } catch (error) {
    console.log(error)
  }
}

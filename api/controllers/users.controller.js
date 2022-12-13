const Users = require("../models/Users");
const nodemailer = require ("nodemailer")
require('dotenv').config()

const randomString = () => {
  const len = 8
  let randstr = ''
  for (let i = 0; i<len; i++){
  const ch = Math.floor((Math.random() * 10) + 1)
  randstr += ch
  }
  return randstr
}
const sendMail = ( username, email, uniqueKey) => {
  let transporter = nodemailer.createTransport({
    service: "Gmail", // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SOPORTE,
      pass: process.env.EMAIL_API
    }})

    transporter.verify().then(() => {
      console.log("Preparado para enviar")
    })

  var mailOptions;
  let sender = '"HASH Only Players" <soportehash@gmail.com>'
  mailOptions = {
    from: sender,
    to: email,
    subject: "Verifica tu cuenta HASH ✔",
    html: `<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <meta name="x-apple-disable-message-reformatting">
      <title></title>
      <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <![endif]-->
      <style>
        table, td, div, h1, p {font-family: Arial, sans-serif;}
      </style>
    </head>
    <body style="margin:0;padding:0;"><table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
    <tr>
      <td align="center" style="padding:0;">
        <table role="presentation" style="width:602px;height=400px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
          <tr>
            <td align="center" style="padding:40px 0 30px 0;background:#000000;">
            <img src="https://i.ibb.co/X4Rf0zd/LogoMail.png" alt="" width="602px" style="height:400px;display:block;"/>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 30px 42px 30px;">
              <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                <tr>
                  <td style="padding:0 0 36px 0;color:#153643;">
                    <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;">Muchas Gracias por registrarse en HASH, bienvenid@ a nuestra comunidad ${username}.</h1>
                    <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">Para poder verificar tu cuenta y disfrutar de todo nuestro contenido por favor has click en el siguiente enlace:</p>
                    <p style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><a href="http://localhost:3000/verify/${uniqueKey}" style="color:#11F930;text-decoration:underline;">Link de Verificación</a></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0;">
                    <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                      <tr>
                        <td style="width:260px;padding:0;vertical-align:top;color:#153643;">
                          <p style="margin:0 0 25px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><img src="https://i.ibb.co/YtDmghy/img2Mail.png" alt="" width="260" style="height:200px;display:block;" /></p>
                          <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">Empieza a  transmitir con tan solo unos clicks. Comienza cuando quieras. Estaremos a tu lado para ayudarte, brindandote una experiencia de interaccion unica con tu publico, uneté a nuestra familia de streameres.</p>
                        </td>
                        <td style="width:20px;padding:0;font-size:0;line-height:0;">&nbsp;</td>
                        <td style="width:260px;padding:0;vertical-align:top;color:#153643;">
                          <p style="margin:0 0 25px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><img src="https://i.ibb.co/dDjbt3L/img3.png" alt="" width="260" style="height:200px;display:block;"/></p>
                          <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">Por cualquier consulta o problema tecnico contactanos a soportehash@gmail.com uno de nuestros representantes se pondra en contacto lo antes posible.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:30px;background:#ee4c50;">
              <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                <tr>
                  <td style="padding:0;width:50%;" align="left">
                    <p style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;">HASH, Argentina 2022<br/></p>
                  </td>
                  <td style="padding:0;width:50%;" align="right">
                    <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                      <tr>
                        <td style="padding:0 0 0 10px;width:38px;">
                          <a href="http://www.twitter.com/" style="color:#ffffff;"><img src="https://assets.codepen.io/210284/tw_1.png" alt="Twitter" width="38" style="height:auto;display:block;border:0;" /></a>
                        </td>
                        <td style="padding:0 0 0 10px;width:38px;">
                          <a href="http://www.facebook.com/" style="color:#ffffff;"><img src="https://assets.codepen.io/210284/fb_1.png" alt="Facebook" width="38" style="height:auto;display:block;border:0;" /></a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  </body>
</html>`
  }

transporter.sendMail(mailOptions, function(error, response){
  if(error){
    console.log(error)
  }
  else{
    console.log(`Mensaje de verificación enviado a ${email}`)
  }
}) 
}


const getUsers = async (req, res) => {
  try {
    const { name } = req.query;
    const usersDb = await Users.find({}).populate("roles").populate("donations").populate("myStreams");
    if (name) {
      const filterUser = usersDb.filter((users) =>
        users.name.toLowerCase().includes(name.toLowerCase())
      );
      filterUser.length?
      res.send(filterUser)
      :res.send("No se encontro ese usuario")
    } else {
      res.send(usersDb);
    }
  } catch (error) {
    res.status(404).send("Se rompio como mi corazon");
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const usersDb = await Users.find({}).populate("roles");
    if (id) {
      const filterUser = usersDb.filter((users) => users._id == id);
      filterUser.length
        ? res.send(filterUser)
        : res.send("Error al obtener Id de User");
    }
  } catch (error) {
    res.status(404).send("Se rompio como mi corazon");
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.send("Ingrese un User correcto");
    } else {
      Users.remove({ _id: id });
      res.send("User elminado con exito");
    }
  } catch (error) {
    res.status(404).send("Se rompio como mi corazon");
  }
};

module.exports = { getUsers, getUserById, deleteUser, randomString, sendMail };

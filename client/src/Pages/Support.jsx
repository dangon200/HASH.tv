import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import NavBarTop from '../components/NavBarTop/NavBarTop';
import s from 'styled-components'

function Support() {
  return (
    <>
      <NavBarTop />
      <Container>
        <Title>Preguntas Frecuentes</Title>
        <Accordion defaultActiveKey="0" flush style={{ width: '75%', marginLeft: '15%', background: '#D9D9D9' }}>
          <Accordion.Item eventKey="0" >
            <Accordion.Header style={{ width: '97%' }}>¿Qué es streaming?</Accordion.Header>
            <Accordion.Body style={{ background: 'rgba(217, 217, 217, 0.6)' }}>
              Streaming es una tecnología que permite transmitir y acceder a videos, audios, imágenes y otro tipo de contenidos desde cualquier dispositivo conectado a internet, sin necesidad de descargarlo.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header style={{ width: '97%' }}>¿Cuándo es indicado hacer streaming?</Accordion.Header>
            <Accordion.Body>
              Antes de pensar si vale la pena usar este recurso, tratá de ponerte en el lugar de los compradores e imaginá si te interesaría asistir a esa transmisión. Por eso, invertí en un contenido que genere valor e incentivá a tus clientes a participar en él.

              Podés hacer streaming para divulgar el lanzamiento de una nueva colección, promociones o, inclusive, una entrevista para conocer mejor a tus clientes. Recordá que es fundamental ofrecer informaciones relevantes y de calidad para los espectadores.

              Si tenés una tienda de moda, por ejemplo, podés hacer un streaming con las prendas de la nueva temporada y aprovechar para dar algunos consejos, mostrando hacia el final del video cómo combinar estampados y colores.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header style={{ width: '97%' }}>¿Qué quiere decir en streaming?</Accordion.Header>
            <Accordion.Body>
              Streaming significa visualización o transmisión en directo y se refiere al envío de datos en un flujo continuo, sin tener que esperar a que se descargue el contenido.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header style={{ width: '97%' }}>¿Cómo se puede ver un streaming?</Accordion.Header>
            <Accordion.Body>
              En líneas generales, se accede a un streaming a través de un enlace (link) único. También podés ver una transmisión en vivo desde el perfil de una persona o una marca dentro de una red social como HASH.tv!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header style={{ width: '97%' }}>¿Qué es ser un streamer?</Accordion.Header>
            <Accordion.Body>
              Un streamer es la persona que realiza transmisiones en vivo a través de las plataformas ideadas para esto.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header style={{ width: '97%' }}>¿A qué hora hacer streaming?</Accordion.Header>
            <Accordion.Body>
              Las mejores horas para hacer streaming en 2022 son de 3:00 pm a 6:00 pm (hora Argentina) y los mejores días son sábados y domingos. Así lo reportó la reconocida empresa de análisis de redes sociales Hootsuite. Sin embargo, te recomendamos que investigues en qué horarios suele estar más activa tu audiencia.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header style={{ width: '97%' }}>¿Cómo registrarse en HASH.tv?</Accordion.Header>
            <Accordion.Body>
              Simple. Ingresa en el botón de arriba a la derecha "Iniciar Sesión", luego da click en "Crear Usuario". Podrás crear un usuario con el correo electrónico que desees o iniciando sesión con Google.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header style={{ width: '97%' }}>¿Cómo suscribirse a un canal?</Accordion.Header>
            <Accordion.Body>
              El sistema de suscripciones se maneja con una moneda digital denominada "HashCash". Para adquirir tu HashCash podés dirigirte hacia tu perfil de usuario y comprar mediante MercadoPago.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}

const Container = s.div`
  background: #404040;
`
const Title = s.h2`
  text-align: left;
  margin-left: 15%;
  color: white;
  margin-top: 48px;
`

export default Support;
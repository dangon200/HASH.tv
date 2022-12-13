import React from 'react';
import './AboutUs.css'
// import logo from '../utils/logo.svg'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Agustin from '../utils/developers/AgustinFraile.jpg';
import Daniel from '../utils/developers/DanielGonzalez.jpg';
import Franco from '../utils/developers/FrancoHermosilla.jpg';
import Frank from '../utils/developers/FrankSantos.jpg';
import Rene from '../utils/developers/ReneValderrey.jpg';
import Victor from '../utils/developers/VictorFalconi.jpg';
import github from '../utils/icons/github.png'
import linkedin from '../utils/icons/linkedin.png'
import styled from 'styled-components';

function AboutUs() {
  return (
    <Container>
      <Title>Team HASH.tv</Title>
      <Separator>
        <Card style={{ width: '15rem', background: 'rgba(0, 0, 0, 0.35)' }}>
          <Card.Img variant="top" src={Agustin} style={{ width: '200px', height: '200px' }} />
          <Card.Body>
            <Card.Title style={{ color: 'white' }}>Agustin Fraile</Card.Title>
            <Card.Text style={{ color: 'white' }}>
              Full Stack Web Developer
            </Card.Text>
            <a href="https://github.com/agustinfraile">
              <img src={github} />
            </a>
            <a href="https://www.linkedin.com/in/agustinfraile">
              <img src={linkedin} />
            </a>
          </Card.Body>
        </Card>
      </Separator>

      <Separator>
        <Card style={{ width: '15rem', background: 'rgba(0, 0, 0, 0.35)' }}>
          <Card.Img variant="top" src={Daniel} style={{ width: '200px', height: '200px' }} />
          <Card.Body>
            <Card.Title style={{ color: 'white' }}>Daniel Gonzalez</Card.Title>
            <Card.Text style={{ color: 'white' }}>
              Full Stack Web Developer
            </Card.Text>
            <a href="https://github.com/dangon200">
              <img src={github} />
            </a>
            <img src={linkedin} />
          </Card.Body>
        </Card>
      </Separator>

      <Separator>
        <Card style={{ width: '15rem', background: 'rgba(0, 0, 0, 0.35)' }}>
          <Card.Img variant="top" src={Franco} style={{ width: '200px', height: '200px' }} />
          <Card.Body>
            <Card.Title style={{ color: 'white' }}>Franco Hermosilla</Card.Title>
            <Card.Text style={{ color: 'white' }}>
              Full Stack Web Developer
            </Card.Text>
            <a href="https://github.com/FrancoNicolas1">
              <img src={github} />
            </a>
            <img src={linkedin} />
          </Card.Body>
        </Card>
      </Separator>

      <Separator>
        <Card style={{ width: '15rem', background: 'rgba(0, 0, 0, 0.35)' }}>
          <Card.Img variant="top" src={Frank} style={{ width: '200px', height: '200px' }} />
          <Card.Body>
            <Card.Title style={{ color: 'white' }}>Frank Santos</Card.Title>
            <Card.Text style={{ color: 'white' }}>
              Full Stack Web Developer
            </Card.Text>
            <a href="https://github.com/Harurin5671">
              <img src={github} />
            </a>
            <img src={linkedin} />
          </Card.Body>
        </Card>
      </Separator>

      <Separator>
        <Card style={{ width: '15rem', background: 'rgba(0, 0, 0, 0.35)' }}>
          <Card.Img variant="top" src='' style={{ width: '200px', height: '200px' }} />
          <Card.Body>
            <Card.Title style={{ color: 'white' }}>Lenyn Bejar</Card.Title>
            <Card.Text style={{ color: 'white' }}>
              Full Stack Web Developer
            </Card.Text>
            <a>
              <img src={github} />
            </a>
            <img src={linkedin} />
          </Card.Body>
        </Card>
      </Separator>

      <Separator>
        <Card style={{ width: '15rem', background: 'rgba(0, 0, 0, 0.35)' }}>
          <Card.Img variant="top" src='' style={{ width: '200px', height: '200px' }} />
          <Card.Body>
            <Card.Title style={{ color: 'white' }}>Luis Cardenas</Card.Title>
            <Card.Text style={{ color: 'white' }}>
              Full Stack Web Developer
            </Card.Text>
            <a>
              <img src={github} />
            </a>
            <img src={linkedin} />
          </Card.Body>
        </Card>
      </Separator>

      <Separator>
        <Card style={{ width: '15rem', background: 'rgba(0, 0, 0, 0.35)' }}>
          <Card.Img variant="top" src={Rene} style={{ width: '200px', height: '200px' }} />
          <Card.Body>
            <Card.Title style={{ color: 'white' }}>René Valderrey</Card.Title>
            <Card.Text style={{ color: 'white' }}>
              Full Stack Web Developer
            </Card.Text>
            <a href="https://github.com/renevalderrey">
              <img src={github} />
            </a>
            <a href="https://www.linkedin.com/in/renevalderrey/">
              <img src={linkedin} />
            </a>
          </Card.Body>
        </Card>
      </Separator>

      <Separator>
        <Card style={{ width: '15rem', background: 'rgba(0, 0, 0, 0.35)' }}>
          <Card.Img src={Victor} style={{ width: '200px', height: '200px' }} />
          <Card.Body>
            <Card.Title style={{ color: 'white' }}>Victor Falconí</Card.Title>
            <Card.Text style={{ color: 'white' }}>
              Full Stack Web Developer
            </Card.Text>
            <a>
              <img src={github} />
            </a>
            <img src={linkedin} />
          </Card.Body>
        </Card>
      </Separator>
    </Container>
  );
}

const Separator = styled.div`
  display: inline-block;
  margin: 20px;
`
const Container = styled.div`
  background: #404040;
  position:absolute;
`
const Title = styled.h1`
  color: white;
  margin: 30px;
  margin-right: 970px;
`

export default AboutUs;
import React from "react";
import './Card.css'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import s from 'styled-components'

function Card2(id) {
    console.log(id)
    return (
        <>
            <Container>
                <Card style={{ width: '18rem', background: 'rgba(0, 0, 0, 0.35)', margin: '20px' }}>
                    <Card.Img variant="top" src="https://www.lavoz.com.ar/resizer/0fxZwzeUimfv1px5rWhlgI-Rvr4=/980x640/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/UJ675QSW4ZCS7GWFD3J4FSEUKE.jpg" />
                    <Card.Body>
                        <TitleCard>{id.name}</TitleCard>
                        <Profile src={id.image} />
                        <Card.Text>
                            <p>{id.language}</p>
                            <p>{id.description}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

const Container = s.div`
    display: flex;
    align-items: flex-end;
`
const Profile = s.img`
    witdh: 40px;
    height: 40px;
    border: 1px solid black;
    border-radius: 1000px;
    position: relative;
    margin-right: 400px;
`
const Title = s.h2`
    display: flex;
    padding: 10px;
    margin-top: 40px;
`
const TitleCard = s.h4`
    margin-left: 30px;
    position: absolute;
    color: white;
`

export default Card2;
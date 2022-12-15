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
                    <Card style={{ width: '22rem', background: 'rgba(0, 0, 0, 0.35)', margin: '20px' }}>
                <Link to={`/stream/${id._id}`}>
                        <Card.Img variant="top" src={id.banner} />
                </Link>
                <Card.Body>
                    <Profile src={id.image} />
                    <TitleCard>{id.name}</TitleCard>
                        <Card.Text className="text-white">
                        {id.language}
                        </Card.Text>
                        <Card.Text className="text-white">
                        {id.description}
                    </Card.Text>
                </Card.Body>
            </Card>

        </Container>
        </>
    )
}

const Container = s.div`
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    justify-content: center

`
const Profile = s.img`
    witdh: 60px;
    height: 60px;
    border: 1px solid black;
    border-radius: 50%;
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
    color: white;
`

export default Card2;
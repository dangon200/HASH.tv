import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import s from 'styled-components'

function CardStream() {
    const streams = useSelector(state => state.streams)
    const streams3 = streams.slice(0, 3)

    return (
        <>
            <Title>Streams en vivo</Title>
            <Container>
                {streams3 && streams3.map((s, index) =>
                    <Card key={index} style={{ width: '18rem', background: 'rgba(0, 0, 0, 0.35)', margin: '20px' }}>
                        <Link to={`/stream/${s._id}`}>
                            <Card.Img variant="top" src="https://www.lavoz.com.ar/resizer/0fxZwzeUimfv1px5rWhlgI-Rvr4=/980x640/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/UJ675QSW4ZCS7GWFD3J4FSEUKE.jpg" />
                        </Link>
                        <Card.Body>
                            <TitleCard>{s.title}</TitleCard>
                            <Profile src={s.image} />
                            <Card.Text style={{ marginTop: '10px' }}>
                                {s.user}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}
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
    margin-top: 70px;
`
const TitleCard = s.h4`
    margin-left: 30px;
    position: absolute;
    color: white;
`

export default CardStream;

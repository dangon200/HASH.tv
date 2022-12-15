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
                            <Card.Img variant="top" src={s.banner} />
                        </Link>
                        <Card.Body style={{ display: "flex", flexDirection: "column", boxSizing: "border-box"}}>
                            <div >
                            <TitleCard>{s.title}</TitleCard>
                            </div>
                            <div>
                            <Profile src={s.image} />
                            <Card.Text style={{ marginTop: '10px' }}>
                                {s.user}
                            </Card.Text>
                            </div>
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
    justify-content: center
`
const Profile = s.img`
    justify-content: start
    witdh: 40px;
    height: 40px;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 1000px;
    position: relative;
    margin-right: 400px;
`
const Title = s.h2`
 color: white;
`
const TitleCard = s.h4`
    display: flex;
    padding: 10px;
    padding-left: 1rem;
    padding-bottom: 1rem;
    margin-left: 30px;
    position: absolute;
    color: white;
`

export default CardStream;

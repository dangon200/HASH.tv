import React from "react";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from "react-redux";
import s from 'styled-components'
import { Link } from "react-router-dom";

const Slidershow = () => {
    const streams = useSelector(state => state.streams)

    return (
        <Container>
            {streams.length > 0 &&
                <Carousel style={{ width: '400px', margin: '0px auto' }}>
                    <Carousel.Item>
                        <Card style={{ width: '400px', background: 'rgba(0, 0, 0, 0.35)', margin: '20px' }}>
                            <Link to={`/stream/${streams[0]._id}`}>
                                <Card.Img variant="top" src="https://www.lavoz.com.ar/resizer/0fxZwzeUimfv1px5rWhlgI-Rvr4=/980x640/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/UJ675QSW4ZCS7GWFD3J4FSEUKE.jpg" />
                            </Link>
                            <Card.Body>
                                <Title>{streams[0].title}</Title>
                                <Profile src={streams[0].image} />
                                <Card.Text style={{ marginTop: '10px' }}>
                                    {streams[0].user}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '400px', background: 'rgba(0, 0, 0, 0.35)', margin: '20px' }}>
                            <Link to={`/stream/${streams[1]._id}`}>
                                <Card.Img variant="top" src="https://www.lavoz.com.ar/resizer/0fxZwzeUimfv1px5rWhlgI-Rvr4=/980x640/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/UJ675QSW4ZCS7GWFD3J4FSEUKE.jpg" />
                            </Link>
                            <Card.Body>
                                <Title>{streams[1].title}</Title>
                                <Profile src={streams[1].image} />
                                <Card.Text style={{ marginTop: '10px' }}>
                                    {streams[1].user}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '400px', background: 'rgba(0, 0, 0, 0.35)', margin: '20px' }}>
                            <Link to={`/stream/${streams[2]._id}`}>
                                <Card.Img variant="top" src="https://www.lavoz.com.ar/resizer/0fxZwzeUimfv1px5rWhlgI-Rvr4=/980x640/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/UJ675QSW4ZCS7GWFD3J4FSEUKE.jpg" />
                            </Link>
                            <Card.Body>
                                <Title>{streams[2].title}</Title>
                                <Profile src={streams[2].image} />
                                <Card.Text style={{ marginTop: '10px' }}>
                                    {streams[2].user}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                </Carousel>}
        </Container>
    )
}

const Container = s.div`
    width: 1100px;
    background: rgba(0, 0, 0, 0.35);
    border-radius: 20px;
    text-align: center;
    margin-left: 5%;
`
const Profile = s.img`
    witdh: 40px;
    height: 40px;
    border: 1px solid black;
    border-radius: 1000px;
    position: relative;
    margin-right: 400px;
`
const Title = s.h4`
    margin-left: 50px;
    position: absolute;
    color: white;
`

export default Slidershow;
import React, { useEffect } from "react";
import Card from "../Card/Card"
// import { ReactComponent as LeftArrow } from "../../icons/iconmonstr-caret-left-lined.svg"
// import { ReactComponent as RightArrow } from "../../icons/iconmonstr-caret-right-lined.svg"
// import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from "react-redux";
import { getStreams } from "../../store/actions/actions";

const Slidershow = () => {
    const dispatch = useDispatch()
    const streams = useSelector(state => state.streams)
    getStreams()
    // const slideshow = useRef(null);
    // const intervalSlideshow = useRef(null);
    // const next = () => {
    //     if (slideshow.current.children.length > 0) {
    //         const firstElement = slideshow.current.children[0];
    //         slideshow.current.style.transition = `500ms ease-out all`;
    //         const slideSize = slideshow.current.children[0].offsetWidth;
    //         slideshow.current.style.transform = `translateX(-${slideSize}px)`;
    //         const transition = () => {
    //             slideshow.current.style.transition = 'none';
    //             slideshow.current.style.transform = `translateX(0)`;
    //             slideshow.current.appendChild(firstElement);
    //             slideshow.current.removeEventListener('transitionend', transition);
    //         }
    //         slideshow.current.addEventListener('transitionend', transition);
    //     }
    // };
    // const previous = () => {
    //     if (slideshow.current.children.length > 0) {
    //         const lastElement = slideshow.current.children[slideshow.current.children.length - 1];
    //         slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);
    //         slideshow.current.style.transition = 'none';
    //         const slideSize = slideshow.current.children[0].offsetWidth;
    //         slideshow.current.style.transform = `translateX(-${slideSize}px)`;
    //         setTimeout(() => {
    //             slideshow.current.style.transition = '300ms ease-out all';
    //             slideshow.current.style.transform = `translateX(0)`;
    //         }, 30);
    //     }
    // };
    useEffect(() => {
        dispatch(getStreams())
        //     intervalSlideshow.current = setInterval(() => {
        //         next();
        //     }, 5000);
        //     slideshow.current.addEventListener('mouseenter', () => {
        //         clearInterval(intervalSlideshow.current);
        //     });
        //     slideshow.current.addEventListener('mouseleave', () => {
        //         intervalSlideshow.current = setInterval(() => {
        //             next();
        //         }, 5000);
        //     });
    }, []);

    return (
        // <div>
        //     <Container>
        //         <ContainerSlideshow ref={slideshow}>
        //             <Slide>
        //                 <Card />
        //             </Slide>
        //             <Slide>
        //                 <Card />
        //             </Slide>
        //             <Slide>
        //                 <Card />
        //             </Slide>
        //         </ContainerSlideshow>
        //     </Container>
        //     <Controls>
        //         <Button onClick={previous}>
        //             <LeftArrow />
        //         </Button>
        //         <Button right onClick={next}>
        //             <RightArrow />
        //         </Button>
        //     </Controls>
        // </div>
        <Carousel>
            <Carousel.Item>
                {streams[0] && <Card 
                    image={streams[0].image}
                    title={streams[0].name}
                    description={streams[0].description}
                    language={streams[0].language}
                />}
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            {streams[0] && <Card 
                    image={streams[0].image}
                    title={streams[0].name}
                    description={streams[0].description}
                    language={streams[0].language}
                />}
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            {streams[0] && <Card 
                    image={streams[0].image}
                    title={streams[0].name}
                    description={streams[0].description}
                    language={streams[0].language}
                />}
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

// const Container = styled.div`
//     max-width: 400px;
//     margin: 50px auto;
//     overflow: hidden;
//     position: relative;
// `;
// const ContainerSlideshow = styled.div`
//     display: flex;
//     flex-wrap: nowrap;
// `;
// const Slide = styled.div`
//     min-width: 100%;
//     overflow: hidden;
//     transition: .3s ease all;
//     z-index: 10;
//     max-height: 500px;
//     position: relative;
// `;
// const Controls = styled.div`
//     position: absolute;
//     top: 0;
//     z-index: 20;
//     width: 100%;
//     height: 100%;
//     pointer-events: none;
// `;
// const Button = styled.button`
//     pointer-events: all;
//     background: none;
//     border: none;
//     cursor: pointer;
//     outline: none;
//     width: 50px;
//     height: 100%;
//     text-align: center;
//     position: absolute;
//     transition: .3s ease all;

//     ${props => props.right ? 'right: 0' : 'left: 0'}
// `;

export default Slidershow;
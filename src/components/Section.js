import React from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import {FaMap} from "react-icons/fa";
import {Container, Video, Button, Description} from "./Section.elements";
import video from "../videos/production ID_3775278.mp4";
import video2 from "../videos/production ID_3784238.mp4";
import video3 from "../videos/production ID_4512518.mp4";
import video4 from "../videos/video (3).mp4";
import video5 from "../videos/video (4).mp4";
import video6 from "../videos/video (5).mp4";

const CarouselUI = ({ children }) => <Container>{children}</Container>;
const Carousel = makeCarousel(CarouselUI);

const h1styles = {
    fontFamily: "Montserrat', sans-serif"
};

const pStyles = {
    fontSize : "2.3rem"
};

const icon ={
    fontSize : "4rem"
};

const Section = () => {

        return (
            <Carousel defaultWait={15000}> 
                <Slide right>
                <Video src={video} autoPlay loop muted>
                </Video>
                <Description>
                    <div>
                        <h1 style={h1styles}>Greece</h1>
                    </div>
                    <div>
                        <p style={pStyles}>Slide Description</p>
                    </div>
                    <div style={{margin:"3rem 0"}}>
                        <a>
                            <FaMap style={icon}>
                            </FaMap>
                            Plan your next trip to Greece
                        </a>
                    </div>
                </Description>
                </Slide>
                <Slide right>
                <Video src={video2} autoPlay loop muted>
                </Video>
                <Description>
                    <div>
                        <h1 style={h1styles}>Slide 1</h1>
                    </div>
                    <div>
                        <p style={pStyles}>Slide Description</p>
                    </div>
                    <div style={{margin:"3rem 0"}}>
                        <a>
                            <FaMap style={icon}>
                            </FaMap>
                            Plan your next trip to Greece
                        </a>
                    </div>
                </Description>
                </Slide>
                <Slide right>
                <Video src={video3} autoPlay loop muted>
                </Video>
                <Description >
                    <div>
                        <h1 style={h1styles}>Slide 1</h1>
                    </div>
                    <div>
                        <p style={pStyles}>Slide Description</p>
                    </div>
                    <div style={{margin:"3rem 0"}}>
                        <a>
                            <FaMap style={icon}>
                            </FaMap>
                            Plan your next trip to Greece
                        </a>
                    </div>
                </Description>
                </Slide>
                <Slide right>
                <Video src={video4} autoPlay loop muted>
                </Video>
                <Description >
                    <div>
                        <h1 style={h1styles}>Slide 1</h1>
                    </div>
                    <div>
                        <p style={pStyles}>Slide Description</p>
                    </div>
                    <div style={{margin:"3rem 0"}}>
                        <a>
                            <FaMap style={icon}>
                            </FaMap>
                            Plan your next trip to Greece
                        </a>
                    </div>
                </Description>
                </Slide>
                <Slide right>
                <Video src={video5} autoPlay loop muted>
                </Video>
                <Description >
                    <div>
                        <h1 style={h1styles}>Slide 1</h1>
                    </div>
                    <div>
                        <p style={pStyles}>Slide Description</p>
                    </div>
                    <div style={{margin:"3rem 0"}}>
                        <a>
                            <FaMap style={icon}>
                            </FaMap>
                            Plan your next trip to Greece
                        </a>
                    </div>
                </Description>
                </Slide>
                <Slide right>
                <Video src={video6} autoPlay loop muted>
                </Video>
                <Description >
                    <div>
                        <h1 style={h1styles}>Slide 1</h1>
                    </div>
                    <div>
                        <p style={pStyles}>Slide Description</p>
                    </div>
                    <div style={{margin:"3rem 0"}}>
                        <a>
                            <FaMap style={icon}>
                            </FaMap>
                            Plan your next trip to Greece
                        </a>
                    </div>
                </Description>
                </Slide>
            </Carousel>
        );
}


export default Section;

import React from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Flash from 'react-reveal/Flash';
import {Container, Video, Arrow, Description, Paragraph, Title, Icon, TitleDiv} from "./Section.elements";
import video from "../videos/production ID_4611892.mp4";
import video2 from "../videos/Pexels Videos 2096551.mp4";
import video3 from "../videos/Pexels Videos 1826896.mp4";
import video4 from "../videos/Pexels Videos 1291114.mp4";
import video5 from "../videos/pexels-suporna-ghosh-5880939.mp4";
import video6 from "../videos/pexels-svanur-gabriele-5969705.mp4";

const CarouselUI = ({ position, handleClick, children }) => (
    <Container>
        {children}
        <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
        <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
    </Container>
);
const Carousel = makeCarousel(CarouselUI);

const Section = () => {

        return (
            <Carousel defaultWait={15000}> 
                <Flash right>
                <Video src={video} autoPlay loop muted>
                </Video>
                <Description>
                    <TitleDiv>
                        <Title>Miami</Title>
                    </TitleDiv>
                    <div>
                        <Paragraph>Plan your next trip to Miami today, <br/>and check out our other great deals for this week below </Paragraph>
                    </div>
                    <div>
                        <Icon className="fas fa-atlas"/>
                    </div>
                </Description>
                </Flash>
                <Flash right>
                <Video src={video2} autoPlay loop muted>
                </Video>
                <Description>
                    <TitleDiv>
                        <Title>Dubai</Title>
                    </TitleDiv>
                    <div>
                    <Paragraph>Plan your next trip to Dubai today, <br/>and check out our other great deals for this week below </Paragraph>
                    </div>
                    <div>
                        <Icon className="fas fa-atlas"/>
                    </div>
                </Description>
                </Flash>
                <Flash right>
                <Video src={video3} autoPlay loop muted>
                </Video>
                <Description >
                    <TitleDiv>
                        <Title>Chicago</Title>
                    </TitleDiv>
                    <div>
                    <Paragraph>Plan your next trip to Chicago today, <br/>and check out our other great deals for this week below </Paragraph>
                    </div>
                    <div>
                        <Icon className="fas fa-atlas"/>
                    </div>
                </Description>
                </Flash>
                <Flash right>
                <Video src={video4} autoPlay loop muted>
                </Video>
                <Description >
                    <TitleDiv>
                        <Title>Ontario</Title>
                    </TitleDiv>
                    <div>
                    <Paragraph>Plan your next trip to Ontario today, <br/>and check out our other great deals for this week below </Paragraph>
                    </div>
                    <div>
                        <Icon className="fas fa-atlas"/>
                    </div>
                </Description>
                </Flash>
                <Flash right>
                <Video src={video5} autoPlay loop muted>
                </Video>
                <Description>
                    <TitleDiv>
                        <Title>Oslo</Title>
                    </TitleDiv>
                    <div>
                    <Paragraph>Plan your next trip to Oslo today, <br/>and check out our other great deals for this week below </Paragraph>
                    </div>
                    <div>
                        <Icon className="fas fa-atlas"/>
                    </div>
                </Description>
                </Flash>
                <Flash right>
                <Video src={video6} autoPlay loop muted>
                </Video>
                <Description >
                    <TitleDiv>
                        <Title>Reykjavík</Title>
                    </TitleDiv>
                    <div>
                    <Paragraph>Plan your next trip to Reykjavík today, <br/>and check out our other great deals for this week below </Paragraph>
                    </div>
                    <div>
                        <Icon className="fas fa-atlas"/>
                    </div>
                </Description>
                </Flash>
            </Carousel>
        );
}


export default Section;

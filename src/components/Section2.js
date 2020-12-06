import React, { useState } from 'react';
import {
    Container,
    TitleDiv,
    Title,
    CardsDiv,
    CardDiv,
    BackgroundImage,
    InfoDiv,
    ImageDiv,
    InfoTitleDiv,
    InfoTitle,
    BottomInfoDiv,
    NavBar,
    NavBarLink,
    NavBarList,
    NavBarItem,
    NavBarItemActive,
    PlacesInfoDiv,
    PlacesInfoSubDiv,
    InfoImage,
    ImagesDiv,
    ExploreDiv,
    ExploreLink,
    ArrowIcon,
    HotelInfo,
} from './Section2.elements';
import image from '../images/andre-benz-Mn9Fa_wQH-M-unsplash.jpg';
import image2 from '../images/luca-bravo-_QdFx92MO2U-unsplash.jpg';
import image3 from '../images/mikel-parera-ccrvtFDXacg-unsplash.jpg';
import image4 from '../images/reuben-chew-PQIE431vXI4-unsplash.jpg';
import image5 from '../images/1407953244000-177513283.jpg';
import image6 from '../images/Thompson Chicago Guestroom Corner King Lowres MK0214 CRPD1200x800.jpg';
import image7 from '../images/jakub-kapusnak-4f4YZfDMLeU-unsplash.jpg';
import image8 from '../images/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg';
import image9 from '../images/cristina-gottardi-05P65mxLuW8-unsplash.jpg';
import image10 from '../images/lance-anderson-uevmkfCH98Q-unsplash.jpg';
import image11 from '../images/mark-pecar-CNdjopTC1qA-unsplash.jpg';
import image12 from '../images/tim-trad-AIwlyvpQJ18-unsplash.jpg';

const Section2 = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    let info = [
        {
            id: 0,
            category: 'Hotels',
            company: 'Hotels LTD',
            addressPartOne: '333 W. Wacker Drive,',
            addressPartTwo: 'Suite 1100, Chicago',
            number: '+1 123 654 987 36',
            images: {
                image1: image5,
                image2: image6,
            },
        },
        {
            id: 1,
            category: 'Restaurants',
            company: 'Restaurants LTD',
            addressPartOne: '333 N Dearborn St,',
            addressPartTwo: 'Chicago, IL 60654',
            number: ' +1 312 245 0333',
            images: {
                image1: image7,
                image2: image8,
            },
        },
        {
            id: 2,
            category: 'Museums',
            company: 'Museums LTD',
            addressPartOne: '111 S Michigan Ave,',
            addressPartTwo: 'Chicago, IL 60603',
            number: '+1 312 443 3600',
            images: {
                image1: image9,
                image2: image10,
            },
        },
        {
            id: 3,
            category: 'Activities',
            company: 'Amuse LTD',
            addressPartOne: '172 N Racine Ave,',
            addressPartTwo: 'Chicago, IL 60607',
            number: '+1 872 249 9957',
            images: {
                image1: image11,
                image2: image12,
            },
        },
    ];

    const changeDescription = (idx) => {
        setActiveIndex(idx);
    };

    return (
        <Container id="deals">
            <TitleDiv>
                <div>
                    <Title>Our Top Destinations of this week</Title>
                </div>
            </TitleDiv>
            <CardsDiv>
                <CardDiv>
                    <ImageDiv>
                        <BackgroundImage src={image2} alt="hello" />
                    </ImageDiv>
                    <InfoDiv>
                        <InfoTitleDiv>
                            <InfoTitle>Chicago</InfoTitle>
                        </InfoTitleDiv>
                        <BottomInfoDiv>
                            <NavBar>
                                <div>
                                    <NavBarList>
                                        {info.map((item) =>
                                            item.id === activeIndex ? (
                                                <NavBarItemActive
                                                    onClick={() =>
                                                        changeDescription(
                                                            item.id
                                                        )
                                                    }
                                                    key={item.id}
                                                >
                                                    <NavBarLink>
                                                        {item.category}
                                                    </NavBarLink>
                                                </NavBarItemActive>
                                            ) : (
                                                <NavBarItem
                                                    onClick={() =>
                                                        changeDescription(
                                                            item.id
                                                        )
                                                    }
                                                    key={item.id}
                                                >
                                                    <NavBarLink>
                                                        {item.category}
                                                    </NavBarLink>
                                                </NavBarItem>
                                            )
                                        )}
                                    </NavBarList>
                                </div>
                            </NavBar>
                            <PlacesInfoDiv>
                                <PlacesInfoSubDiv>
                                    <HotelInfo>
                                        <h3>{info[activeIndex].company}</h3>
                                        <p>
                                            {info[activeIndex].addressPartOne}
                                            <br />{' '}
                                            {info[activeIndex].addressPartTwo}
                                        </p>
                                        <h3>{info[activeIndex].number}</h3>
                                    </HotelInfo>
                                    <ImagesDiv>
                                        <InfoImage
                                            src={
                                                info[activeIndex].images.image1
                                            }
                                        />
                                        <InfoImage
                                            src={
                                                info[activeIndex].images.image2
                                            }
                                        />
                                    </ImagesDiv>
                                </PlacesInfoSubDiv>
                            </PlacesInfoDiv>
                        </BottomInfoDiv>
                    </InfoDiv>
                </CardDiv>
                <CardDiv>
                    <ImageDiv>
                        <BackgroundImage src={image4} alt="hello" />
                    </ImageDiv>
                    <InfoDiv>
                        <InfoTitleDiv>
                            <InfoTitle>Singapore</InfoTitle>
                        </InfoTitleDiv>
                        <BottomInfoDiv>
                            <NavBar>
                                <div>
                                    <NavBarList>
                                        {info.map((item) =>
                                            item.id === activeIndex ? (
                                                <NavBarItemActive
                                                    onClick={() =>
                                                        changeDescription(
                                                            item.id
                                                        )
                                                    }
                                                    key={item.id}
                                                >
                                                    <NavBarLink>
                                                        {item.category}
                                                    </NavBarLink>
                                                </NavBarItemActive>
                                            ) : (
                                                <NavBarItem
                                                    onClick={() =>
                                                        changeDescription(
                                                            item.id
                                                        )
                                                    }
                                                    key={item.id}
                                                >
                                                    <NavBarLink>
                                                        {item.category}
                                                    </NavBarLink>
                                                </NavBarItem>
                                            )
                                        )}
                                    </NavBarList>
                                </div>
                            </NavBar>
                            <PlacesInfoDiv>
                                <PlacesInfoSubDiv>
                                    <HotelInfo>
                                        <h3>{info[activeIndex].company}</h3>
                                        <p>
                                            {info[activeIndex].addressPartOne}
                                            <br />{' '}
                                            {info[activeIndex].addressPartTwo}
                                        </p>
                                        <h3>{info[activeIndex].number}</h3>
                                    </HotelInfo>
                                    <ImagesDiv>
                                        <InfoImage
                                            src={
                                                info[activeIndex].images.image1
                                            }
                                        />
                                        <InfoImage
                                            src={
                                                info[activeIndex].images.image2
                                            }
                                        />
                                    </ImagesDiv>
                                </PlacesInfoSubDiv>
                            </PlacesInfoDiv>
                        </BottomInfoDiv>
                    </InfoDiv>
                </CardDiv>
                <CardDiv>
                    <ImageDiv>
                        <BackgroundImage src={image3} alt="hello" />
                    </ImageDiv>
                    <InfoDiv>
                        <InfoTitleDiv>
                            <InfoTitle>London</InfoTitle>
                        </InfoTitleDiv>
                        <BottomInfoDiv>
                            <NavBar>
                                <div>
                                    <NavBarList>
                                        {info.map((item) =>
                                            item.id === activeIndex ? (
                                                <NavBarItemActive
                                                    onClick={() =>
                                                        changeDescription(
                                                            item.id
                                                        )
                                                    }
                                                    key={item.id}
                                                >
                                                    <NavBarLink>
                                                        {item.category}
                                                    </NavBarLink>
                                                </NavBarItemActive>
                                            ) : (
                                                <NavBarItem
                                                    onClick={() =>
                                                        changeDescription(
                                                            item.id
                                                        )
                                                    }
                                                    key={item.id}
                                                >
                                                    <NavBarLink>
                                                        {item.category}
                                                    </NavBarLink>
                                                </NavBarItem>
                                            )
                                        )}
                                    </NavBarList>
                                </div>
                            </NavBar>
                            <PlacesInfoDiv>
                                <PlacesInfoSubDiv>
                                    <HotelInfo>
                                        <h3>{info[activeIndex].company}</h3>
                                        <p>
                                            {info[activeIndex].addressPartOne}
                                            <br />{' '}
                                            {info[activeIndex].addressPartTwo}
                                        </p>
                                        <h3>{info[activeIndex].number}</h3>
                                    </HotelInfo>
                                    <ImagesDiv>
                                        <InfoImage
                                            src={
                                                info[activeIndex].images.image1
                                            }
                                        />
                                        <InfoImage
                                            src={
                                                info[activeIndex].images.image2
                                            }
                                        />
                                    </ImagesDiv>
                                </PlacesInfoSubDiv>
                            </PlacesInfoDiv>
                        </BottomInfoDiv>
                    </InfoDiv>
                </CardDiv>
                <CardDiv>
                    <ImageDiv>
                        <BackgroundImage src={image} alt="hello" />
                    </ImageDiv>
                    <InfoDiv>
                        <InfoTitleDiv>
                            <InfoTitle>Tokyo</InfoTitle>
                        </InfoTitleDiv>
                        <BottomInfoDiv>
                            <NavBar>
                                <div>
                                    <NavBarList>
                                        {info.map((item) =>
                                            item.id === activeIndex ? (
                                                <NavBarItemActive
                                                    onClick={() =>
                                                        changeDescription(
                                                            item.id
                                                        )
                                                    }
                                                    key={item.id}
                                                >
                                                    <NavBarLink>
                                                        {item.category}
                                                    </NavBarLink>
                                                </NavBarItemActive>
                                            ) : (
                                                <NavBarItem
                                                    onClick={() =>
                                                        changeDescription(
                                                            item.id
                                                        )
                                                    }
                                                    key={item.id}
                                                >
                                                    <NavBarLink>
                                                        {item.category}
                                                    </NavBarLink>
                                                </NavBarItem>
                                            )
                                        )}
                                    </NavBarList>
                                </div>
                            </NavBar>
                            <PlacesInfoDiv>
                                <PlacesInfoSubDiv>
                                    <HotelInfo>
                                        <h3>{info[activeIndex].company}</h3>
                                        <p>
                                            {info[activeIndex].addressPartOne}
                                            <br />{' '}
                                            {info[activeIndex].addressPartTwo}
                                        </p>
                                        <h3>{info[activeIndex].number}</h3>
                                    </HotelInfo>
                                    <ImagesDiv>
                                        <InfoImage
                                            src={
                                                info[activeIndex].images.image1
                                            }
                                        />
                                        <InfoImage
                                            src={
                                                info[activeIndex].images.image2
                                            }
                                        />
                                    </ImagesDiv>
                                </PlacesInfoSubDiv>
                            </PlacesInfoDiv>
                        </BottomInfoDiv>
                    </InfoDiv>
                </CardDiv>
            </CardsDiv>
            <ExploreDiv>
                <ExploreLink to="/deals">Check more deals</ExploreLink>
                <ArrowIcon></ArrowIcon>
            </ExploreDiv>
        </Container>
    );
};

export default Section2;

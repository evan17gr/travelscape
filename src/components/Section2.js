import React from 'react';
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
    PlacesInfoDiv,
    PlacesInfoSubDiv,
    InfoImage,
    ImagesDiv,
    ExploreDiv,
    ExploreLink,
    NavBarItemActive,
    ArrowIcon,
    HotelInfo
} from './Section2.elements';
import image from '../images/andre-benz-Mn9Fa_wQH-M-unsplash.jpg';
import image2 from '../images/luca-bravo-_QdFx92MO2U-unsplash.jpg';
import image3 from '../images/mikel-parera-ccrvtFDXacg-unsplash.jpg';
import image4 from '../images/reuben-chew-PQIE431vXI4-unsplash.jpg';
import image5 from '../images/1407953244000-177513283.jpg';
import image6 from '../images/Thompson Chicago Guestroom Corner King Lowres MK0214 CRPD1200x800.jpg';

const Section2 = () => {
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
                                        <NavBarItemActive>
                                            <NavBarLink>Hotels</NavBarLink>
                                        </NavBarItemActive>
                                        <NavBarItem>
                                            <NavBarLink>Restaurants</NavBarLink>
                                        </NavBarItem>
                                        <NavBarItem>
                                            <NavBarLink>Museums</NavBarLink>
                                        </NavBarItem>
                                        <NavBarItem>
                                            <NavBarLink>Activities</NavBarLink>
                                        </NavBarItem>
                                    </NavBarList>
                                </div>
                            </NavBar>
                            <PlacesInfoDiv>
                                <PlacesInfoSubDiv>
                                    <HotelInfo>
                                        <h3>Hotels LTD</h3>
                                        <p>
                                            333 W. Wacker Drive,
                                            <br /> Suite 1100, Chicago
                                        </p>
                                        <h3>+1 123 654 987 36</h3>
                                    </HotelInfo>
                                    <ImagesDiv>
                                        <InfoImage src={image5} />
                                        <InfoImage src={image6} />
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
                                        <NavBarItemActive>
                                            <NavBarLink>Hotels</NavBarLink>
                                        </NavBarItemActive>
                                        <NavBarItem>
                                            <NavBarLink>Restaurants</NavBarLink>
                                        </NavBarItem>
                                        <NavBarItem>
                                            <NavBarLink>Museums</NavBarLink>
                                        </NavBarItem>
                                        <NavBarItem>
                                            <NavBarLink>Activities</NavBarLink>
                                        </NavBarItem>
                                    </NavBarList>
                                </div>
                            </NavBar>
                            <PlacesInfoDiv>
                                <PlacesInfoSubDiv>
                                    <HotelInfo>
                                        <h3>Hotels LTD</h3>
                                        <p>
                                            333 W. Wacker Drive,
                                            <br /> Suite 1100, Chicago
                                        </p>
                                        <h3>+1 123 654 987 36</h3>
                                    </HotelInfo>
                                    <ImagesDiv>
                                        <InfoImage src={image5} />
                                        <InfoImage src={image6} />
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
                                        <NavBarItemActive>
                                            <NavBarLink>Hotels</NavBarLink>
                                        </NavBarItemActive>
                                        <NavBarItem>
                                            <NavBarLink>Restaurants</NavBarLink>
                                        </NavBarItem>
                                        <NavBarItem>
                                            <NavBarLink>Museums</NavBarLink>
                                        </NavBarItem>
                                        <NavBarItem>
                                            <NavBarLink>Activities</NavBarLink>
                                        </NavBarItem>
                                    </NavBarList>
                                </div>
                            </NavBar>
                            <PlacesInfoDiv>
                                <PlacesInfoSubDiv>
                                    <HotelInfo>
                                        <h3>Hotels LTD</h3>
                                        <p>
                                            333 W. Wacker Drive,
                                            <br /> Suite 1100, Chicago
                                        </p>
                                        <h3>+1 123 654 987 36</h3>
                                    </HotelInfo>
                                    <ImagesDiv>
                                        <InfoImage src={image5} />
                                        <InfoImage src={image6} />
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
                                        <NavBarItemActive>
                                            <NavBarLink>Hotels</NavBarLink>
                                        </NavBarItemActive>
                                        <NavBarItem>
                                            <NavBarLink>Restaurants</NavBarLink>
                                        </NavBarItem>
                                        <NavBarItem>
                                            <NavBarLink>Museums</NavBarLink>
                                        </NavBarItem>
                                        <NavBarItem>
                                            <NavBarLink>Activities</NavBarLink>
                                        </NavBarItem>
                                    </NavBarList>
                                </div>
                            </NavBar>
                            <PlacesInfoDiv>
                                <PlacesInfoSubDiv>
                                    <HotelInfo>
                                        <h3>Hotels LTD</h3>
                                        <p>
                                            333 W. Wacker Drive,
                                            <br /> Suite 1100, Chicago
                                        </p>
                                        <h3>+1 123 654 987 36</h3>
                                    </HotelInfo>
                                    <ImagesDiv>
                                        <InfoImage src={image5} />
                                        <InfoImage src={image6} />
                                    </ImagesDiv>
                                </PlacesInfoSubDiv>
                            </PlacesInfoDiv>
                        </BottomInfoDiv>
                    </InfoDiv>
                </CardDiv>
            </CardsDiv>
            <ExploreDiv>
                <ExploreLink>Check more deals</ExploreLink>
                <ArrowIcon></ArrowIcon>
            </ExploreDiv>
        </Container>
    );
};

export default Section2;

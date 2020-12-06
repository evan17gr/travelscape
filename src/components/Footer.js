import React from 'react';
import {
    Center,
    Container,
    LeftSide,
    RightSide,
    TopPart,
    Line,
    MidPart,
    Links,
    ItemInfo,
    LinkItemInfo,
    MidPart2,
    SocialMedia,
    SocialMediaInfo,
    VerticalLine,
    LowerPart,
    NewsLetter,
    LowPart,
    Input,
    Inputs,
    Button,
    TopPart2,
    Title,
    SocialMediaLink,
    Paragraph,
    Line2,
    ParaDiv,
    FacebookIcon,
    InstagramIcon,
    PinterestIcon,
} from './Footer.elements';

const Footer = () => {
    return (
        <Container>
            <LeftSide>
                <TopPart>
                    <Line />
                </TopPart>
                <MidPart>
                    <Links>
                        <ItemInfo>
                            <LinkItemInfo>PRIVACY POLICY</LinkItemInfo>
                        </ItemInfo>
                        <ItemInfo>
                            <LinkItemInfo>TERMS AND CONDITIONS</LinkItemInfo>
                        </ItemInfo>
                        <ItemInfo>
                            <LinkItemInfo>ABOUT</LinkItemInfo>
                        </ItemInfo>
                    </Links>
                </MidPart>
            </LeftSide>
            <Center>
                <TopPart2>
                    <Title>TRAVELSCAPE</Title>
                </TopPart2>
                <MidPart2>
                    <SocialMedia>
                        <SocialMediaInfo>
                            <SocialMediaLink>
                                <InstagramIcon></InstagramIcon>
                            </SocialMediaLink>
                        </SocialMediaInfo>
                        <SocialMediaInfo>
                            <SocialMediaLink>
                                <FacebookIcon></FacebookIcon>
                            </SocialMediaLink>
                        </SocialMediaInfo>
                        <SocialMediaInfo>
                            <SocialMediaLink>
                                <PinterestIcon></PinterestIcon>
                            </SocialMediaLink>
                        </SocialMediaInfo>
                    </SocialMedia>
                    <VerticalLine>
                        <Line2></Line2>
                    </VerticalLine>
                    <LowerPart>
                        <NewsLetter>WEEKLY NEWSLETTER</NewsLetter>
                    </LowerPart>
                </MidPart2>
                <LowPart>
                    <Inputs>
                        <Input placeholder="NAME@EXAMPLE.COM"></Input>
                        <Button>SUBSCRIBE</Button>
                    </Inputs>
                    <ParaDiv>
                        <Paragraph>&copy; 2020 | Travelscape LTD</Paragraph>
                    </ParaDiv>
                </LowPart>
            </Center>
            <RightSide>
                <TopPart>
                    <Line />
                </TopPart>
                <MidPart>
                    <Links>
                        <ItemInfo>
                            <LinkItemInfo>TRAVEL INFO</LinkItemInfo>
                        </ItemInfo>
                        <ItemInfo>
                            <LinkItemInfo>RETURNS / EXCHANGES</LinkItemInfo>
                        </ItemInfo>
                        <ItemInfo>
                            <LinkItemInfo>CONTACT US</LinkItemInfo>
                        </ItemInfo>
                    </Links>
                </MidPart>
            </RightSide>
        </Container>
    );
};
export default Footer;

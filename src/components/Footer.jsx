import { Facebook } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { MyLocationOutlined } from '@mui/icons-material';
import { MailOutlined } from '@mui/icons-material';
import { PhoneIphoneOutlined } from '@mui/icons-material';
import { Instagram } from '@mui/icons-material';
import { HiveOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import {mobile} from "../responsive";

const Container = styled.div`
display: flex;
${mobile({flex: "column"})};

`;
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
margin: 20px 0px;

`;

const SocialContainer = styled.h1`
display: flex;
`;

const SocialIcon = styled.h1`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin: 20px;

`;

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({display: "none"})};

`;

const Title = styled.h3`
margin-bottom: 30px;
`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;

`;


const Right = styled.div`
flex: 1;
padding: 20px
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;

`;

const Payment = styled.img`
width: 50%;

`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Naturally Bee <HiveOutlined /></Logo>
            <Desc>
                Naturally Bee sells 100% PURE ORGANIC candles made from beeswax and PURE essential oils. 
                All of our items are handmade from scratch in small-batch quantities. As someone who suffers 
                with severe allergies and headaches, I wanted to create beeswax candles as they do not 
                contain toxins but rather has clean burning. After perfecting my art, I decided to share my products 
                with the rest of the world!
            </Desc>
            <SocialContainer>
                <a href="https://www.facebook.com/"><SocialIcon color="3B5999"><Facebook/></SocialIcon></a>
                <a href="https://www.instagram.com/"><SocialIcon color="E4405F"><Instagram/></SocialIcon></a>
                <a href="https://twitter.com/"><SocialIcon color="55ACEE"><Twitter/></SocialIcon></a>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Candles</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Essential Oils</ListItem>
                <ListItem>Return Policy</ListItem>
                <ListItem>Room And Linen Spray</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Where we are located</Title>
            <ContactItem><PhoneIphoneOutlined style={{marginRight: "10px"}}/>+1 546 327 9583</ContactItem>
            <ContactItem><MyLocationOutlined style={{marginRight: "10px"}}/>1316 Laurel Road, Hollywood Florida 33020</ContactItem>
            <a href="https://www.yahoo.com/"><ContactItem><MailOutlined style={{marginRight: "10px"}}/>naturallybee@yahoo.com</ContactItem></a>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer;
import { Facebook, Instagram, Mail, Phone, Room } from "@material-ui/icons";
import styled from "styled-components";
import VK from "./VK";

const Container = styled.div`
   background-color: #222;
`;

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  color: gray;
	padding-top: 20px;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
  color: #eee;
  font-weight: 500;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
	cursor: pointer;
	margin-bottom: 10px;
`;

const Logo = styled.h1`
  color: white;
  font-family: "Italiana";
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
	color: black;
	filter: invert();
	opacity: 0.6;
  height: 40px;
	cursor: pointer;
`;

const Contact = styled.div`
margin-bottom: 10px;
display: flex;
align-items: center;
gap: 8px;
`

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>ALEX</Logo>
          <Desc>
          Experience the pure expression of elegance and sophistication with Alex, your ultimate destination for premium clothing and accessories. Discover our exquisite range of finest-quality garments and elevate your style to the next level.
          </Desc>
          <SocialContainer>
            <SocialIcon>
              <Facebook />
            </SocialIcon>
            <SocialIcon>
              <VK />
            </SocialIcon>
            <SocialIcon>
              <Instagram />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Men fashion</ListItem>
            <ListItem>Women fashion</ListItem>
            <ListItem>Accessories</ListItem>
                  <ListItem>Wishlist</ListItem>
                  <ListItem>Track order</ListItem>
                  <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
                <Title>Contacts</Title>
                <Contact><Room /> Nevsky Prospect 40, Saint-Petersburg 191023</Contact>
                <Contact><Phone /> +7 (812) 456 78 90</Contact>
                <Contact><Mail /> contact@alexfashion.com</Contact>
              </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;

import { FavoriteBorderOutlined } from "@mui/icons-material";
import { SearchOutlined } from "@mui/icons-material";
import { ShoppingBagOutlined } from "@mui/icons-material";
import styled from "styled-components";
//z-index defines the order of overlappting html elements, only works  
//on positioned elements absolute,relative,or fixed.
const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
position: relative;

`;


const Image = styled.img`
height: 75%;
`;

const Info= styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`;

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display:flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;
 &:hover{
    background-color: white;
    transform: scale(1.1);
}
`;

const Product = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
      <Info>
          <Icon>
              <ShoppingBagOutlined/>
          </Icon>
          <Icon>
              <SearchOutlined/>
          </Icon>
          <Icon>
              <FavoriteBorderOutlined/>
          </Icon>
      </Info>
    </Container>
  )
}

export default Product;


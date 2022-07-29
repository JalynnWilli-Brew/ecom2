import { Add } from "@mui/icons-material";
import { Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {mobile} from "../responsive";

const Container = styled.div`

`;

const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({padding: "10px", flexDirection: "column"})};
`;

const ImgContainer = styled.div`
flex: 1;

`;

const Image = styled.img`
width: 100%;



`;

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({padding: "10px"})};
`;

const Title = styled.h1`
font-weight: 200;
`;

const Desc = styled.p`
margin: 20px 0px;
`;

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`;

const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
${mobile({width: "100%"})};
`;

const Filter = styled.div`
display: flex;
align-items: center;
`;

const FilterTitle = styled.div`
font-size: 20px;
font-weight: 200;
`;

const FilterSize = styled.div`
margin-left: 10px;
padding: 5px;

`;

const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width: "100%"})};

`;

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;

const Amount = styled.span`
weight: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid green;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;

const Button = styled.button`
padding: 15px;
border: 2px solid green;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: #f8f4f4;
}
`;



const Product = () => {
  return (
    <Container>
       <Navbar />
       <Announcement />
       <Wrapper>
           <ImgContainer>
           <Image src="https://i.etsystatic.com/24951730/r/il/57bc67/4053149867/il_1588xN.4053149867_a5fq.jpg"/>
           </ImgContainer>
           <InfoContainer>
               <Title>Purely Beeswax Candle</Title>
               <Desc>100% high-quality pure beeswax from local U.S. beekeepers. One ingredient: all natural local, high-quality beeswax. 
                   When lit, purely beeswax permeates the room with a naturally pleasant honey aroma. 
                   They come in a beautiful glass amber jar that emits a special vibrant, warm tone when lit.
                </Desc>
               <Price>$25</Price>
               <FilterContainer>
                    <Filter>
                        <FilterTitle>Candle</FilterTitle>
                    </Filter>
                <FilterSize>
                    <FilterSizeOption>8 oz.</FilterSizeOption>
                    <FilterSizeOption>16 oz.</FilterSizeOption>
                </FilterSize>
               </FilterContainer>
               <AddContainer>
                   <AmountContainer>
                       <Remove />
                       <Amount>1</Amount>
                       <Add />
                   </AmountContainer>
                   <Button>ADD TO CART</Button>
               </AddContainer>
           </InfoContainer>
       </Wrapper>
       <Contact />
       <Footer/>
    </Container>
  )
}

export default Product;
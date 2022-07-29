import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import {mobile} from "../responsive";

const Container = styled.div`

`;

const Title = styled.h1`
margin: 20px;
`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;

const Filter = styled.div`
margin: 20px;
${mobile({margin: "0px 20px", display: "flex", flexDirection: "column"})};

`;

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({marginRight: "0px"})};

`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({margin: "10px 0px"})};
`;

const Option = styled.option`

`;


const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Beeswax Melt and Candles</Title>
      <FilterContainer>
        <Filter>
            <FilterText>Filter Products</FilterText> 
            <Select>
                <Option disabled selected>
                    Categories
                </Option>
                <Option>Candles</Option>
                <Option>Beeswax Melt</Option>
                <Option>Room And Linen Spray</Option>
                <Option>Essential Oils</Option>
            </Select> 
            <Select>
                <Option disabled selected>
                    Size
                </Option>
                    <Option>4 oz.</Option>
                    <Option>8 oz.</Option>
                    <Option>16 oz.</Option>
                    <Option>15 mL.</Option>
            </Select>  
        </Filter>
        <Filter>
            <FilterText>Sort Products</FilterText>
            <Select>
                <Option selected>Newest</Option>
                <Option>Price (Low-High)</Option>
                <Option>Price (High-Low)</Option>
            </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <Contact />
      <Footer />
    </Container>
  )
}

export default ProductList;

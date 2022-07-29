import styled from "styled-components";

const Container = styled.div`
height: 30px;
background-color: rgb(57,98,1);
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
      Buy 1 Get 1 50% Off Starting: 7/29-8/15!
    </Container>
  )
}

export default Announcement;


import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyOrder = () => {
  const navigate = useNavigate();

  const MyCart = () => {
    navigate("/myCart");
  };
  return (
    <Container>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quasi, quae nesciunt eveniet distinctio corrupti?
      </p>
      <StyledButton onClick={MyCart}>Go Back</StyledButton>
    </Container>
  );
};

export default MyOrder;

const Container = styled.div`
  align-self: center;
  width: 700px;
  border: 2px solid black;
  padding: 20px;
  margin-top: 50px;
  
  p {
    color: black;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 50px;
   
  }
`;

const StyledButton = styled.button`
  border-radius: 20px;
  color: #eee7e7;
  background-color: #2c88d9;
  padding: 15px 25px;
  font-size: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`;

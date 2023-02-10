import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Products = ({ products }) => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <>
      <Container>
        {products.map((item, index) => {
          return (
            <>
              <ul>
                <li>{item.title}</li>
                <Link to={`/products/${item.id}/details`} key={index}>
                  <StyledButton>Detail</StyledButton>
                </Link>
              </ul>
            </>
          );
        })}

        <StyledButton onClick={goToHome}>Go Back</StyledButton>
      </Container>
    </>
  );
};

export default Products;

const Container = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  width: 700px;
  ul {
    justify-self: center;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
    border: 2px solid black;
    padding: 20px;
    margin-bottom: 50px;
  }
  li {
    color: black;
    font-size: 20px;
    font-weight: 500;
    
  }
`;
const StyledButton = styled.button`
  border-radius: 20px;
  width: 200px;
  color: #eee7e7;
  background-color: rgb(44, 136, 217);
  padding: 15px 25px;
  font-size: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 25rem;
`;

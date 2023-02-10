import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

export const Deatils = ({ products }) => {
  const [newproDucts, setNewProducts] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const newProductsItem = products.find((item) => item.id >= id);
    setNewProducts(newProductsItem);
  }, [products, id]);

  const navigation = useNavigate();

  const goToProducts = () => {
    navigation("/products");
  };
  return (
    <Container>
      <ul>
        <li>
          <p>{newproDucts.title}</p>
          <StyledButton onClick={goToProducts}>Go Back</StyledButton>
        </li>
      </ul>
    </Container>
  );
};

export default Deatils;

const StyledButton = styled.button`
  border-radius: 20px;
  width: 200px;
  color: #eee7e7;
  background-color: #2c88d9;
  padding: 15px 25px;
  font-size: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Container = styled.div`
  align-self: center;
  margin-top: 50px;
  width: 800px;
  ul {
    list-style: none;
    border: 2px solid black;
    padding: 20px;
    justify-content: space-between;
    margin-top: 30px;
  }
  img {
    width: 200px;
    height: 200px;
  }
  li {
    color: rgb(0, 0, 0);
    font-size: 30px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

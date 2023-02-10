import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
    
  return (
    <Container>
    <NavListStlye>
    <h2>LOGO</h2>
    <ul>
    <li><NavLink to='/products'
    style={({ isActive }) => ({
        color: isActive ? '' : 'white',
        background: isActive ? 'white' : 'black',
      })}
    >Products</NavLink></li>
    <li><NavLink to='/myCart'
     style={({ isActive }) => ({
        color: isActive ? '' : 'white',
        background: isActive ? 'white' : 'black',
      })} >My Cart</NavLink></li>
    <li><NavLink to="/myOrders"
     style={({ isActive }) => ({
        color: isActive ? '' : 'white',
        background: isActive ? 'white' : 'black',
      })}
    >My Orders</NavLink></li>
    </ul>
    </NavListStlye>
    </Container>
  )
}

export default Header

const Container = styled.header`
  background-color: rgb(44, 136, 217);
  width: 100%;
  padding: 25px;
  nav {
    width: 100%;
  }
`;
const NavListStlye = styled.nav`
  display: flex;
  list-style: none;
  color: white;
  font-size: 20px;
  justify-content: space-around;

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    width: 400px;
    justify-content: space-between;
    text-decoration: none;
  }
  li {
    cursor: pointer;
    font-size: 25px;
  }
`;




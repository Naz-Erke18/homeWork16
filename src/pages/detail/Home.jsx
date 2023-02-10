import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <Div>
      <h1> Welcome to my site</h1>
    </Div>
  );
}

export default Home


const Div = styled.div`
  display: flex;
  justify-content: center;
  border: none;
  align-items: center;
  height: 200px;
  width: 500px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 20px;
  background-color: rgb(44, 136, 217);
`;
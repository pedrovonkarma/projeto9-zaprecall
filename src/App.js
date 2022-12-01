import React from "react";
import styled from "styled-components";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
export default function App(){
  return (
    
    <Screen>
      <Header/>
      <Body/>
      <Footer/>
    </Screen>
    
  )
}
const Screen = styled.div`
  background-color: #FB6B6B;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`
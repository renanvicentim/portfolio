import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  /*   background-color: #191919; */
  width: 100vw;
  height: 100vh;
`
export const Image = styled.img`
  margin-left: 50px;
  height: 500px;
  border-radius: 100%;
  margin-right: 50px;
`
export const ContainerItems = styled.div`
  padding-left: 50px;
  h2 {
    color: #b809c3;
    font-size: 75px;
    opacity: 0.9;
  }

  p {
    font-weight: 500;
    color: #ffffff;
    font-size: 24px;
    font-family: 'Josefin Sans', sans-serif;
    margin: 15px 0 60px 0;
    width: 70%;
    opacity: 0.8;
  }
`

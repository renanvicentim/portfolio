import styled from 'styled-components'

export const Container = styled.div`
  /*   background: #191919; */
  padding: 60px 0 50px 0;
  width: 100vw;
`
export const ContainerItems = styled.div`
  h2 {
    color: white;
    font-size: 75px;
    text-align: center;
  }
`
export const Cards = styled.div`
  padding: 50px;
  display: flex;
  justify-content: space-around;
  margin-top: 150px;
  gap: 50px;
`

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  height: 180px;
  width: 350px;
  border-radius: 20px;
  padding: 0 0 20px 0;
  border: 2px solid #fff;
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-size: 18px;
    color: #fff;
    padding-left: 20px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: scale(1.1);
    transition: all 0.5s;

    img {
      opacity: 0.2;
      transform: scale(1.25);
      transition: 0.3s;
    }

    div {
      font-weight: bold;
      position: absolute;
      bottom: 80px;
    }
  }
`

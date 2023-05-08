import styled from 'styled-components'

/* import Background from '../../assets/background.jpg' */

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  /*   background: #191919; */
  background-size: cover;
  padding: 0 10px;
`

export const Profile = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 50px;
`

export const Name = styled.div`
  color: white;
  text-transform: uppercase;
  h1 {
    color: white;
    font-size: 70px;

    span {
      /*       background-image: linear-gradient(
        92.23deg,
        #ff56f6 21.43%,
        #b936ee 50.63%,
        #3bace2 100%,
        #406aff 117.04%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; */
      color: #b809c3;
    }
  }

  h3 {
    color: white;
    border: #000000;
    font-size: 25px;
    font-weight: 900;
    margin-top: 10px;

    span {
      /* background: linear-gradient(
        92.23deg,
        #406aff 21.43%,
        #3bace2 50.63%,
        #b936ee 100%,
        #ff56f6 117.04%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; */
      color: #b809c3;
    }
  }
`

export const Image = styled.img`
  margin-left: 50px;
  height: 500px;
  border-radius: 100%;
  margin-right: 50px;
`

export const Social = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;

  img {
    height: 30px;
    border-radius: 50%;
  }

  a {
    background: linear-gradient(
      92.23deg,
      #ff56f6 21.43%,
      #b936ee 50.63%,
      #3bace2 100%,
      #406aff 117.04%
    );
    box-shadow: 0px 4.42184px 107.23px rgba(255, 86, 246, 0.51);
    border-radius: 50%;
    display: flex;

    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      transform: scale(1.2);
      &:hover {
        background: linear-gradient(
          92.23deg,
          #406aff 21.43%,
          #3bace2 50.63%,
          #b936ee 100%,
          #ff56f6 117.04%
        );
      }
    }
  }
`

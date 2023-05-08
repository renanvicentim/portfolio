import styled from 'styled-components'

export const Container = styled.button`
  color: white;
  background: linear-gradient(
    92.23deg,
    #ff56f6 21.43%,
    #b936ee 50.63%,
    #3bace2 100%,
    #406aff 117.04%
  );
  box-shadow: 0px 4.42184px 107.23px rgba(255, 86, 246, 0.51);
  height: 50px;
  width: 180px;
  font-size: 18px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-family: 'Josefin Sans', sans-serif;

  &:hover {
    background: linear-gradient(
      92.23deg,
      #406aff 21.43%,
      #3bace2 50.63%,
      #b936ee 100%,
      #ff56f6 117.04%
    );
    transition: all 0.4s ease 0s;
  }
`

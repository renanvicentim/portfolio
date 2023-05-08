import styled from 'styled-components'

export const Container = styled.div`
  /*   background: #000000; */
  padding: 150px 0 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  text-align: center;
`

export const ContainerItems = styled.div`
  h5 {
    color: white;
    font-size: 30px;
    margin: 0;
  }
  p {
    color: white;
    font-size: 18px;
    margin: 14px 0 30px 0;
  }
`

export const Inputs = styled.div`
  margin-top: 50px;
  border: 1px solid #fff;
  padding: 50px;
  border-radius: 20px;

  .field-name {
    width: 300px;
    height: 45px;
    outline: none;
    border: none;
    padding: 0;
    padding-left: 10px;
    background: transparent;
    border-bottom: 2px solid #fff;
    color: #fff;

    &::placeholder {
      color: #fff;
    }

    &:focus {
      border-bottom: 2px solid #ff56f6;
    }
  }

  .field-email {
    margin: 10px 0;
    width: 300px;
    height: 45px;
    outline: none;
    border: none;
    padding: 0;
    padding-left: 10px;
    background: transparent;
    border-bottom: 2px solid #fff;
    color: #fff;

    &::placeholder {
      color: #fff;
    }

    &:focus {
      border-bottom: 2px solid #ff56f6;
    }
  }

  .field-textarea {
    width: 300px;
    height: 90px;
    padding: 0;
    padding: 8px 0 8px 10px;
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 2px solid #fff;
    color: #fff;

    &::placeholder {
      color: #fff;
    }

    &:focus {
      border-bottom: 2px solid #ff56f6;
    }
  }

  button {
    width: 310px;
    height: 45px;
    border-radius: 7px;
    margin-top: 20px;
    color: white;
    cursor: pointer;
    padding: 0;
    background: linear-gradient(
      92.23deg,
      #ff56f6 21.43%,
      #b936ee 50.63%,
      #3bace2 100%,
      #406aff 117.04%
    );
    box-shadow: 0px 4.42184px 107.23px rgba(255, 86, 246, 0.51);

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
  }
`

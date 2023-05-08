import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 0px 0 30px;

  p {
    color: white;
    font-size: 36px;
    font-weight: 500;
  }

  span {
    background-image: linear-gradient(
      92.23deg,
      #ff56f6 21.43%,
      #b936ee 50.63%,
      #3bace2 100%,
      #406aff 117.04%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  ul {
    margin-left: 40%;
  }

  li {
    color: white;
    list-style: none;
    display: inline-block;
    font-size: 20px;
    margin-right: 30px;
    cursor: pointer;
  }

  .link-menu {
    text-decoration: none;
    color: white;
    position: relative;

    &::after {
      content: '';
      width: 0px;
      height: 2px;
      position: absolute;
      bottom: 0px;
      left: 0px;
      background-color: #ffffff;
      transition: 0.3s;
    }

    &:hover::after {
      width: 100%;
      transition: 0.3s;
    }
  }

  .contact {
    text-decoration: none;
    color: white;
    background: linear-gradient(
      92.23deg,
      #ff56f6 21.43%,
      #b936ee 50.63%,
      #3bace2 100%,
      #406aff 117.04%
    );
    box-shadow: 0px 4.42184px 107.23px rgba(255, 86, 246, 0.51);
    /* border: 3px solid #e4105d; */
    transition: 0.3s;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px 20px;
    transition: 0.5s;

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

  .menu {
    color: #ffffff;
    position: absolute;
    left: 90%;
    display: none;
  }

  @media (max-width: 768px) {
    p {
      font-size: 26px;
    }

    ul {
      display: none;
    }

    .menu {
      display: fixed;
    }
  }
`

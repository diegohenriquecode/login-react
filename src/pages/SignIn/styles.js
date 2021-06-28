import styled, { keyframes } from "styled-components";

import signInBackground from "../../assets/sign-in-background.png";

export const Container = styled.div`
  height: 97vh;
  display: flex;
  align-items: stretch;

  @media screen and (max-width: 600px) {
    height: 100vh;
    width: 100vw;
    background: #f5f0fd;
  }

  button {
    width: 80px;
    height: 18px;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      color: #9b51e0;
      margin-left: 6px;
    }

    .return-btn {
      color: #9b51e0;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  } to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;
  background: #f5f0fd;
  border-radius: 30px;
  width: 555px;
  height: 665px;

  @media screen and (max-width: 600px) {
    background: transparent;
    width: 100%;
    height: 100%;

    margin-left: -90px;
  }

  @media screen and (max-width: 1000px) {
    margin-left: -90px;
  }

  span {
    display: flex;
    align-items: center;
    width: 420px;

    @media screen and (max-width: 600px) {
      width: 380px;
    }
    div {
      h3 {
        color: #5914df;
        font-size: 25px;
        margin-bottom: 5px;
      }

      p {
        color: #757171;
        font-size: 12px;
        margin-top: 0;
      }
    }
    img {
      margin-left: auto;
    }
  }

  form {
    margin-top: 2rem;
    width: 100%;
    height: 450px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .wrong {
      border: 1px solid red;
    }

    .email-wrong {
      border: 1px solid red;
    }

    .cpf-wrong {
      border: 1px solid red;
    }

    div {
      width: 420px;
      height: 56px;
      background: #ffffff;
      border-bottom: 1px solid rgba(0, 0, 0, 0.36);
      display: flex;

      @media screen and (max-width: 600px) {
        width: 380px;
      }

      & + div {
        margin-top: 20px;
      }

      input {
        width: 259px;
        height: 19px;

        margin: 24px 140px 13px 21px;
        border: none;
        outline: 0;
      }

      .icon-password {
        margin: 18px 18px 18px auto;
        border: none;
        color: #dadada;
        cursor: pointer;
      }

      .check {
        margin: 18px 18px 18px auto;
        border: none;
        color: #27ae60;
      }

      .waring {
        margin: 18px 18px 18px auto;
        border: none;
        color: red;
      }
    }

    button {
      width: 420px;
      height: 36px;
      color: #fff;
      margin-top: 57px;
      background: #1071e6;
      border-radius: 4px;
      padding: 8px 22px;
      border: inherit;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      @media screen and (max-width: 600px) {
        width: 380px;
      }

      & + button {
        background: transparent;
        color: #5850ec;
        border: 1px solid #1071e6;
        margin-top: 25px;
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: 85%;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

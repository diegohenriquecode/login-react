import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  color: "#ddcc12";
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

export const Modal = styled.div`
  z-index: 100;
  background: #ffffff;
  position: relative;
  margin: 5% auto;
  border-radius: 3px;
  max-width: 94vw;
  padding: 8px;
  border-radius: 20px;
  width: 600px;

  @media screen and (max-width: 600px) {
    width: 300px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3rem;

    button {
      width: 420px;
      height: 36px;
      border-radius: 4px;
      background: #1071e6;
      color: #ffffff;
      border: none;
      margin-top: 15px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      @media screen and (max-width: 600px) {
        width: 260px;
      }
    }

    img {
      margin-bottom: 22px;
    }

    span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      h1 {
        font-weight: 500;
        font-family: Roboto;
        margin-bottom: 18px;
      }

      p {
        margin-top: 0px;
        font-size: 14px;
        font-family: Roboto;
        text-align: center;
      }
    }
  }
`;

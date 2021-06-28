import React, { useState, useEffect } from "react";
import { FiEyeOff, FiEye, FiCheck } from "react-icons/fi";
import { FaExclamation, FaArrowLeft } from "react-icons/fa";
import { Container, Content, Background, AnimationContainer } from "./styles";

import { ModalUp } from "../../components/modal";
import griaIcon from "../../assets/gria-icon.png";
import modalInfoImg from "../../assets/modal-info.png";

export function SignIn() {
  const [show, setShow] = useState(true);
  const [typeInput, setTypeInput] = useState(false);
  const [showPassword, setShowPassword] = useState("password");
  const [cpfOk, setCpfOk] = useState(false);
  const [emailOk, setEmailOk] = useState(false);
  const [warEmail, setWarEmail] = useState(false);
  const [warCpf, setWarCpf] = useState(false);
  const [currentEmail, setCurrentEmail] = useState("");
  const [password, setPassword] = useState();
  const [inputPasswordClassName, setInputPasswordClassName] = useState("");
  const [emailClassName, setEmailClassName] = useState("");
  const [cpfClassName, setCpfClassName] = useState("");
  const [passwordOk, setPasswordOk] = useState(false);

  let newSubEmail;

  const openModal = () => {
    setShow(!show);
  };

  function handleTypeInput() {
    if (typeInput === false) {
      setTypeInput(true);
      setShowPassword("text");
    } else {
      setTypeInput(false);
      setShowPassword("password");
    }

    if (typeInput === true) {
      setTypeInput(false);
      setShowPassword("password");
    } else {
      setTypeInput(true);
      setShowPassword("text");
    }
  }

  function onSubmitForm() {
    if (cpfOk && emailOk && passwordOk) {
      openModal();
    } else {
      alert("Por favor, preencha os campos corretamente");
    }
  }

  function handleCpf(e) {
    const cpf = e.target.value;
    if (!isNaN(parseFloat(cpf)) && isFinite(cpf) && cpf.length === 11) {
      setCpfOk(true);
      setCpfClassName("");
      setWarCpf(false);
    } else {
      setWarCpf(true);
      setCpfClassName("cpf-wrong");
      setCpfOk(false);
    }

    return cpf;
  }

  function handleEmail(e) {
    const email = e.target.value;
    if (email !== "") {
      if (email.includes("@") && email.includes(".com")) {
        setEmailOk(true);
        setEmailClassName("");
        setWarEmail(false);
      } else {
        setWarEmail(true);
        setEmailClassName("email-wrong");
        setEmailOk(false);
      }
    }
    if (email.includes("@gmail")) {
      const subEmail = email.slice(email.length - 14);
      newSubEmail = "******".concat(subEmail);
    }

    if (email.includes("@outlook")) {
      const subEmail = email.slice(email.length - 16);
      newSubEmail = "******".concat(subEmail);
    }

    setCurrentEmail(newSubEmail);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleConfirmPassword(e) {
    const confirmPassword = e.target.value;

    if (password !== confirmPassword) {
      setInputPasswordClassName("wrong");
    }

    if (password === confirmPassword) {
      setInputPasswordClassName("");
      setPasswordOk(true);
    }
  }

  return (
    <Container>
      <button>
        <FaArrowLeft className="return-btn" /> <span>Retornar</span>
      </button>
      <Background />
      <ModalUp show={show} setShow={openModal}>
        <div>
          <img src={modalInfoImg} alt="Modal Info" />

          <span>
            <h1>Cadastro Realizado com Sucesso!</h1>
            <p>
              O link de confirmação foi enviado para o <br /> e-mail{" "}
              {currentEmail}
            </p>
          </span>

          <button onClick={() => openModal()}>FECHAR</button>
        </div>
      </ModalUp>
      <Content>
        <AnimationContainer>
          <span>
            <div>
              <h3>Cadastrar Candidato</h3>
              <p>Cadastre-se e encontre a oportunidade que deseja</p>
            </div>
            <img src={griaIcon} alt="" />
          </span>

          <form
            if="register-form"
            name="registerForm"
            onSubmit={(values) => onSubmitForm(values)}
          >
            <div className={cpfClassName}>
              <input
                name="cpf"
                type="text"
                required
                placeholder="CPF"
                maxLength="11"
                onBlur={(e) => handleCpf(e)}
              />
              {cpfOk && <FiCheck className="check" />}
              {warCpf && <FaExclamation className="waring" />}
            </div>
            <div className={emailClassName}>
              <input
                type="email"
                required
                placeholder="E-mail"
                onBlur={(e) => handleEmail(e)}
              />
              {emailOk && <FiCheck className="check" />}
              {warEmail && <FaExclamation className="waring" />}
            </div>
            <div>
              <input
                name="password"
                required
                type={showPassword}
                placeholder="Senha"
                onBlur={(e) => handlePassword(e)}
              />
              {!typeInput && (
                <FiEyeOff
                  className="icon-password"
                  onClick={() => handleTypeInput()}
                />
              )}
              {typeInput && (
                <FiEye
                  className="icon-password"
                  onClick={() => handleTypeInput()}
                />
              )}
            </div>
            <div className={inputPasswordClassName}>
              <input
                name="confirmPassword"
                required
                type={showPassword}
                placeholder="Confirmar senha"
                onChange={(e) => handleConfirmPassword(e)}
              />
              {!typeInput && (
                <FiEyeOff
                  className="icon-password"
                  onClick={() => handleTypeInput()}
                />
              )}
              {typeInput && (
                <FiEye
                  className="icon-password"
                  onClick={() => handleTypeInput()}
                />
              )}
            </div>

            <button type="button" onClick={() => onSubmitForm()}>
              CADASTRAR
            </button>
            <button type="button">JÁ POSSUI CADASTRO? FAÇA O LOGIN AQUI</button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}

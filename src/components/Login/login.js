import React, { useEffect, useState } from "react";
import loginHead from "src/assets/images/loginHead.png";
import LoginButton from "src/assets/images/loginButton.png";
import JoinButton from "src/assets/images/joinButton.png";
import "src/style/Login/Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

// 백 연결
const User = {
  email: "likelion@naver.com",
  pw: "likelion123",
};

function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePassword = (p) => {
    setPw(p.target.value);
    const regex = /^[A-Za-z0-9]{6,20}$/;
    if (regex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const onClickConfirmButton = () => {
    if (email === User.email && pw === User.pw) {
      alert("로그인 성공!");
    } else {
      alert("등록되지 않은 회원입니다.");
    }
  };

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  return (
    <div className="background">
      <img src={loginHead} className="loginHead" alt="고양이둘"></img>

      <p className="loginID">ID</p>
      <input
        type="text"
        className="loginbox"
        placeholder="   메일 주소를 입력해주세요!"
        value={email}
        onChange={handleEmail}
      />
      <div className="loginErrorID">
        {!emailValid && email.length > 0 && (
          <div>올바른 이메일을 입력해주세요!</div>
        )}
      </div>
      {/* 비밀번호 안보이게 변경하기 
숫자와 문자 포함 형태의 6~12자리 이내의 암호 정규식*/}

      <p className="loginPW">PW</p>
      <input
        type="password"
        className="loginPwBox"
        placeholder="   비밀번호를 입력해주세요!"
        value={pw}
        onChange={handlePassword}
      />
      <div className="loginErrorPW">
        {!pwValid && pw.length > 0 && (
          <div>숫자와 문자를 포함한 6~12자리를 입력해주세요!</div>
        )}
      </div>
      <Link to="/AvatarStart">
        <img
          onClick={onClickConfirmButton}
          disabled={notAllow}
          src={LoginButton}
          className="LoginButton"
          alt="LoginButton"
        />
      </Link>
      <p className="askMemberYet">아직 회원이 아니신가요?</p>

      <Link to="/Join">
        <img src={JoinButton} className="JoinButton" alt="회원 가입하러가기" />
      </Link>
    </div>
  );
}

export default Login;

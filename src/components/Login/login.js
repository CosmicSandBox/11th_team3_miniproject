/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React, { useEffect, useState } from "react";
import loginHead from "src/assets/images/loginHead.png";
import ID from "src/assets/images/ID.png";
import PW from "src/assets/images/PW.png";
import LoginButton from "src/assets/images/loginButton.png";
import JoinButton from "src/assets/images/joinButton.png";
import "src/style/Login/Login.css";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

// 더미노드
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
    <div className="Background">
      <img src={loginHead} className="loginHead" alt="고양이둘"></img>
      <div className="AskMember">회원이신가요?</div>

      <img src={ID} className="ID" alt="ID"></img>
      <input
        type="text"
        className="Loginbox"
        placeholder="              메일 주소를 입력해주세요!"
        value={email}
        onChange={handleEmail}
      />
      <div className="errorID">
        {!emailValid && email.length > 0 && (
          <div>올바른 이메일을 입력해주세요!</div>
        )}
      </div>
      {/* 비밀번호 안보이게 변경하기 
숫자와 문자 포함 형태의 6~12자리 이내의 암호 정규식*/}

      <img src={PW} className="PW" alt="PW"></img>
      <input
        type="password"
        className="PwBox"
        placeholder="              비밀번호를 입력해주세요!"
        value={pw}
        onChange={handlePassword}
      />
      <div className="errorPW">
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
      <p className="askMemberYet">아직 회원이 아니세요?</p>

      <Link to="/Join">
        <img src={JoinButton} className="JoinButton" alt="회원 가입하러가기" />
      </Link>
    </div>
  );
}

export default Login;

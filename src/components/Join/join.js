import React, { useEffect, useState } from "react";
import "src/style/Join/join.css";
import CreateJoin from "src/assets/images/join/createJoin.png";
import GotoLogin from "src/assets/images/join/GotoLogin.png";
import { Link } from "react-router-dom";

// 백 연결
const User = {
  email: "likelion@naver.com",
  pw: "likelion123",
};

export default function Join() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [checkPw, setCheckPw] = useState("");
  const [birth, setBirth] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [checkPwValid, setCheckPwValid] = useState(false);
  const [birthValid, setBirthValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handleEmail = (em) => {
    setEmail(em.target.value);
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

  const handleCheckPw = (cp) => {
    setCheckPw(cp.target.value);
    const regex = /^[A-Za-z0-9]{6,20}$/;
    if (regex.test(cp)) {
      setCheckPwValid(true);
    } else {
      setCheckPwValid(false);
    }
  };

  const handleBirth = (i) => {
    setBirth(i.target.value);
    if (birth.length === 3) {
      setBirthValid(true);
    } else {
      setBirthValid(false);
    }
  };

  const onClickConfirmButton = () => {
    if (email === User.email && pw === User.pw && checkPw === pw) {
      alert("회원가입 완료!");
    } else {
      alert("다시 작성해주세요!");
    }
  };

  useEffect(() => {
    if (emailValid && pwValid && checkPwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid, checkPwValid]);

  return (
    <div className="background">
      <p className="Jointitle">회원 가입</p>
      <h2 className="ID">ID</h2>
      <input
        className="Loginbox"
        placeholder="   메일 주소를 입력해주세요!"
        value={email}
        onChange={handleEmail}
      />
      <div className="errorID">
        {!emailValid && email.length > 0 && (
          <div>올바른 이메일을 입력해주세요!</div>
        )}
      </div>

      <h2 className="PW">PW</h2>
      <input
        type="password"
        className="PwBox"
        placeholder="   비밀번호를 입력해주세요!"
        value={pw}
        onChange={handlePassword}
      />
      <div className="errorPW">
        {!pwValid && pw.length > 0 && (
          <div>숫자와 문자를포함한 6~12자리를 입력해주세요!</div>
        )}
      </div>
      <input
        type="password"
        className="PwCheck"
        placeholder="   비밀번호를 확인해주세요!"
        value={checkPw}
        onChange={handleCheckPw}
      />
      <div className="errorCheckPW">
        {!(checkPw === pw) && checkPw.length > 0 && (
          <div>동일한 비밀번호를 입력해주세요!</div>
        )}
      </div>
      <h2 className="Birth">Birth</h2>
      <input
        className="BirthBox"
        placeholder="   생일을 입력해주세요!"
        value={birth}
        onChange={handleBirth}
      />
      <div className="errorCheckBirth">
        {!birthValid && birth.length > 0 && (
          <div>숫자 4자리를 입력해주세요! </div>
        )}
      </div>

      <p className="FinishedJoin">
        {checkPw === pw && checkPw.length > 0 && <div>회원가입 완료!</div>}
      </p>

      <img
        onClick={onClickConfirmButton}
        disabled={notAllow}
        src={CreateJoin}
        className="CreateJoin"
        alt="계정만들기"
      />

      <Link to="/Login">
        <img src={GotoLogin} className="GotoLogin" alt="로그인하기" />
      </Link>
    </div>
  );
}

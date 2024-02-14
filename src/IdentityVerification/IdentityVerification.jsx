import "./IdentityVerification.css";
import close from "../images/close.svg";

export default function IdentityVerification({closeIVHandler}) {
  return (
    <div className="bgContainer">
      <button onClick={closeIVHandler}>
        <img src={close} alt="closeImg" className="closeImg" />
      </button>
      <p className="ivText">본인 확인</p>
      <div className="inputContainer">
        <input type="text" placeholder="이름"/>
        <input type="password" placeholder="비밀번호"/>
      </div>
      <button className="confirmButton">
        확인
      </button>
    </div>
  )
}
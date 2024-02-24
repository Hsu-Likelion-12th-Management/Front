import './IdentityVerification.css';
import close from '../images/close.svg';
import { useState } from 'react';
import axios from 'axios';

export default function IdentityVerification({
  closeIVHandler,
  postId,
  onVerifySuccess,
}) {
  const [postedUserName, setPostedUserName] = useState('');
  const [password, setPassword] = useState('');

  const Identity = async (e) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8080/api/post/${postId}`,
        {
          postedUserName,
          password,
        }
      );

      if (response.status == 200) {
        console.log('본인확인 완료');
        console.log(response.data);
        onVerifySuccess();
        closeIVHandler();
      } else {
        console.log('본인확인 실패');
        console.log(response.data);
      }
    } catch (error) {
      console.error('가입 중 오류 발생: ', error);
    }
  };

  return (
    <div className="bgContainer">
      <button onClick={closeIVHandler}>
        <img src={close} alt="closeImg" className="closeImg" />
      </button>
      <p className="ivText">본인 확인</p>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="닉네임"
          value={postedUserName}
          onChange={(e) => setPostedUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="confirmButton" onClick={Identity}>
        확인
      </button>
    </div>
  );
}

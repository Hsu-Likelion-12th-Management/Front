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
  const [verificationFailed, setVerificationFailed] = useState(false);

  const Identity = async (e) => {
    try {
      const response = await axios.post(
        `https://www.hsu-like-lion.com/api/post/${postId}`,
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
        setVerificationFailed(true);
      }
    } catch (error) {
      console.error('가입 중 오류 발생: ', error);
      setVerificationFailed(true);
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
          style={{ marginBottom: '1.5rem' }}
          type="text"
          placeholder="닉네임"
          value={postedUserName}
          onChange={(e) => setPostedUserName(e.target.value)}
        />
        <input
          style={{ marginBottom: '8px' }}
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {verificationFailed && ( // 본인 확인 실패 메시지 조건부 렌더링
          <p className={`errorMessage ${verificationFailed ? 'show' : ''}`}>
            작성자 정보와 일치하지 않습니다 :)
          </p>
        )}
      </div>
      <button className="confirmButton" onClick={Identity}>
        확인
      </button>
    </div>
  );
}

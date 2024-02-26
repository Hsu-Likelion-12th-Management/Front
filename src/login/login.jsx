import styled from 'styled-components';
import Hsulogo from '../images/hsulogo.png';
import Footer from '../footer/footer';
import Lionlogo from '../images/Layer_1.png';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AskContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
  margin-bottom: 166px;
`;

const InputField = styled.input`
  padding-left: 17px;
  width: 100%;
  height: 40px;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--Gray6, #191b24);
  color: white;
`;

const RequireP = styled.p`
  color: var(--Gray1, #bfc4d8);

  /* botton/botton_bold_16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const BothContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const SubmitButton = styled.button`
  width: 180px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--Sub-color, #ff7710);
  color: var(--White, #fff);
  text-align: center;

  /* body/subtitle/subtitle_bold_16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ButtonContainer = styled.div`
  margin-top: 101px;
  display: flex;
  justify-content: flex-end;
`;

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  let executiveName;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://3.38.108.41/api/admin/login',
        {
          id,
          password,
        }
      );

      if (response.status == 200) {
        console.log('가입 성공');
        console.log(response.data);
        console.log(id);
        console.log(response.data.data.name);
        executiveName = response.data.data.name;
      } else {
        console.log('가입 실패');
        console.log(response.data);
      }
    } catch (error) {
      console.error('가입 중 오류 발생: ', error);
    }
    navigate("/Qnalist", {state: {executiveName, id}});
  };

  return (
    <>
      <AskContainer>
        <img
          src={Lionlogo}
          alt="한성대멋사로고"
          style={{ width: '184px', height: '89px', marginTop: '80px' }}
        />

        <BothContainer style={{ marginTop: '79px' }}>
          <RequireP>아이디</RequireP>
          <InputField
            placeholder="아이디를 입력해주세요."
            value={id}
            onChange={(e) => setId(e.target.value)}
            style={{ marginTop: '8px', width: '100%' }}
          ></InputField>
        </BothContainer>

        <BothContainer>
          <RequireP style={{ marginTop: '24px' }}>비밀번호</RequireP>
          <InputField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호을 입력해주세요."
            style={{ marginTop: '8px', width: '100%' }}
          ></InputField>
        </BothContainer>

        <ButtonContainer>
          <SubmitButton onClick={handleSubmit}>로그인하기</SubmitButton>
        </ButtonContainer>
      </AskContainer>

      <Footer />
    </>
  );
}

export default Login;

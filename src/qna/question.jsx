import styled from 'styled-components';
import Hsulogo from '../images/hsulogo.png';
import Footer from '../footer/footer';

const QuestionContainer = styled.div`
  width: 100%;
`;

const IntroContainer = styled.div`
  width: 100%;
  height: 80px;
  padding-top: 26px;
  padding-bottom: 25px;
  padding-left: 20px;
  background: linear-gradient(to right, #ff7710, #191b24 60px);
  margin-bottom: 32px;
`;

const InContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
`;

const IntroP = styled.p`
  font-family: Pretendard;
  font-size: 24px;
  font-weight: bold;
  margin-left: 16px;
  color: ${(props) => props.color || 'white'};
`;

const AskContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const AskP = styled.p`
  color: var(--Sub-color, #ff7710);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 170%; /* 34px */
`;

const InputField = styled.input`
  width: calc(50% - 8px);
  height: 40px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--Gray5, #2a2a3a);
  background: var(--Black, #0f1015);
  padding-left: 17px;
  color: #fff; // 폰트 색상 추가
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const RequireP = styled.p`
  color: var(--Gray2, #7f85a3);
  margin-top: 8px;
  /* detail/detail_medium_12 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const BothContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextAreaField = styled.textarea`
  width: 100%;
  height: 200px; // 높이 조정
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--Gray5, #2a2a3a);
  background: var(--Black, #0f1015);
  padding: 12px 17px;
  resize: none;

  font-family: Pretendard;
  font-size: 14px;
  color: #fff;

  &:focus {
    outline: none; /* 포커스 테두리 제거 */
  }

  &::placeholder {
    color: var(--Gray2, #7f85a3);
  }
`;

const SubmitButton = styled.button`
  width: 100px;
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
  display: flex;
  justify-content: flex-end;
`;

function Question() {
  return (
    <>
      <IntroContainer>
        <InContainer>
          <img src={Hsulogo} alt="한성로고" style={{ width: '8%' }} />
          <IntroP>Q&A</IntroP>
        </InContainer>
      </IntroContainer>
      <AskContainer>
        <AskP>한성대학교 멋쟁이사자처럼에게</AskP>
        <AskP style={{ color: '#FFF', marginBottom: '32px' }}>
          무엇이든 물어보세요!
        </AskP>

        <BothContainer>
          <FieldContainer>
            <InputField placeholder="이름을 입력해주세요."></InputField>
            <InputField placeholder="비밀번호를 입력해주세요."></InputField>
          </FieldContainer>
          <RequireP>*질문 게시 후 수정 또는 삭제에 사용됩니다.</RequireP>
        </BothContainer>

        <BothContainer>
          <InputField
            placeholder="제목을 입력해주세요."
            style={{ marginTop: '24px', width: '100%' }}
          ></InputField>
          <RequireP>*최대 15자까지 입력 가능합니다.</RequireP>
        </BothContainer>

        <BothContainer style={{ marginBottom: '24px' }}>
          <TextAreaField
            placeholder="내용을 입력해주세요."
            style={{ marginTop: '24px' }}
          ></TextAreaField>
          <RequireP>*최대 100자까지 입력 가능합니다.</RequireP>
        </BothContainer>
        <ButtonContainer>
          <SubmitButton>등록하기</SubmitButton>
        </ButtonContainer>
      </AskContainer>

      <Footer />
    </>
  );
}

export default Question;

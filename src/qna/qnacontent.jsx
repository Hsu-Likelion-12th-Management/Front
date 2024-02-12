import styled from 'styled-components';
import Hsulogo from '../images/hsulogo.png';
import Footer from '../footer/footer';
import GrayCircle from '../images/graycircle.png';
import Edit from '../images/editpencil.png';
import { useState } from 'react';
import IdentityVerification from '../IdentityVerification/IdentityVerification';
import Overlay from '../overlay/Overlay';
import { useParams } from 'react-router-dom';

const IntroContainer = styled.div`
  width: 100%;
  height: 80px;
  padding-top: 26px;
  padding-bottom: 25px;
  padding-left: 20px;
  background: linear-gradient(to right, #ff7710, #191b24 60px);
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

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 7px;
`;

const Graycircle = styled.img`
  width: 20px;
  height: 20px;
`;

const ItemContent = styled.span`
  color: var(--White, #fff);
  /* body/body_medium_14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Contentcontainer = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const Rowcontainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 26px;
`;

const TitleP = styled.p`
  color: var(--White, #fff);

  /* body/subtitle/subtitle_bold_16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Reply = styled.div`
  width: 64px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: 2px solid
    ${(props) =>
      props.status === '답변 중'
        ? 'var(--Sub-color, #FF7710)'
        : 'var(--Gray2, #7f85a3)'};
  color: ${(props) =>
    props.status === '답변 중'
      ? 'var(--Sub-color, #FF7710)'
      : 'var(--Gray2, #7f85a3)'};
`;

const ContentField = styled.div`
  width: 100%;
  height: 200px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--Black, #0f1015);
  padding-left: 14px;
  padding-top: 13px;
`;

const StyledParagraph = styled.p`
  color: var(--White, #fff);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;

  @media (max-width: 428px) {
    font-size: 12px;
  }
`;

const AnswerContainer = styled.div`
  width: 100%;
  background: var(--Black, #0f1015);
  padding-top: 26px;
  height: 298px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnswerField = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  padding-top: 17px;
  padding-left: 16px;
  padding-right: 14px;
  width: 90%;
  height: 99px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--Gray5, #2a2a3a);
  background: var(--Gray6, #191b24);
`;

const Minutes = styled.p`
  color: var(--Gray3, #626682);
  text-align: center;
  /* detail/detail_medium_12 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-bottom: 8px;
`;

const AnswerContent = styled.div`
  margin-top: 8px;
`;

const AnswerText = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
`;

const ContentFlexContainer = styled.div`
  display: flex; // Stack children vertically
  justify-content: space-between;
  padding-right: 14px;
  padding-bottom: 12px;
  height: 100%;
`;

const EditIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-top: auto;
  align-self: flex-end;
  cursor: pointer;
`;

function Qnacontent({ questions }) {
  const { id } = useParams(); // URL에서 id 가져오기
  const question = questions.find((q) => q.id === parseInt(id));

  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <StyledParagraph key={index} style={{ margin: 0 }}>
        {line}
      </StyledParagraph>
    ));
  };

  const renderAnswerWithLineBreaks = (text) => {
    return text
      .split('\n')
      .map((line, index) => <AnswerText key={index}>{line}</AnswerText>);
  };

  const [showIV, setShowIV] = useState(false);

  const showIVHandler = () => {
    setShowIV(true);
  };

  const closeIVHandler = () => {
    setShowIV(false);
  };

  return (
    <>
      <IntroContainer>
        <InContainer>
          <img src={Hsulogo} alt="한성로고" style={{ width: '8%' }} />
          <IntroP>Q&A</IntroP>
        </InContainer>
      </IntroContainer>

      {showIV && <IdentityVerification closeIVHandler={closeIVHandler} />}
      {showIV && <Overlay showIV={showIV} />}

      <Contentcontainer>
        <AuthorContainer>
          <Graycircle src={GrayCircle} alt="Gray Circle" />
          <ItemContent>{question.author}</ItemContent>
        </AuthorContainer>
        <Rowcontainer>
          <TitleP>{question.title}</TitleP>
          <Reply>{question.status}</Reply>
        </Rowcontainer>
        <ContentField>
          <ContentFlexContainer>
            <div>{question.content}</div>
            <EditIcon src={Edit} alt="수정" onClick={showIVHandler} />
          </ContentFlexContainer>
        </ContentField>
      </Contentcontainer>

      {/* <AnswerContainer> 응답부분 지우지마세요 ~
        {contents.map((content, index) => (
          <AnswerField key={index}>
            <InfoContainer>
              <AuthorContainer>
                <Graycircle src={GrayCircle} alt="Gray Circle" />
                <ItemContent>운영진</ItemContent>
              </AuthorContainer>
              <Minutes>{content.createdAt}</Minutes>
            </InfoContainer>
            {renderAnswerWithLineBreaks(content.answer)}
          </AnswerField>
        ))}
      </AnswerContainer> */}
      <Footer />
    </>
  );
}

export default Qnacontent;

import styled from 'styled-components';
import Hsulogo from '../images/hsulogo.png';
import Footer from '../footer/footer';
import GrayCircle from '../images/graycircle.png';

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
  width: 388px;
  height: 200px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--Black, #0f1015);
  padding-left: 16px;
  padding-top: 13px;
`;

const StyledParagraph = styled.p`
  color: var(--White, #fff);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
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
  flex-direction: column;
  padding-top: 17px;
  padding-left: 16px;
  width: 388px;
  height: 99px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--Gray5, #2a2a3a);
  background: var(--Gray6, #191b24);
`;

function Qnacontent() {
  const contents = [
    {
      question:
        '안녕하세요! 아기사자가 되고 싶은 김지은입니다. 8월에 진행되는\n중앙해커톤은 다른 학교와 함께 팀을 이뤄서 참여하는건가요?\n감사합니다!',
      answer:
        '안녕하세요 :) 아니요! 중앙해커톤은 학교 내 멋사들과\n팀을 이뤄서 참가합니다!',
    },
  ];

  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <StyledParagraph key={index} style={{ margin: 0 }}>
        {line}
      </StyledParagraph>
    ));
  };

  return (
    <>
      <IntroContainer>
        <InContainer>
          <img src={Hsulogo} alt="한성로고" style={{ width: '8%' }} />
          <IntroP>Q&A</IntroP>
        </InContainer>
      </IntroContainer>

      <Contentcontainer>
        <AuthorContainer>
          <Graycircle src={GrayCircle} alt="Gray Circle" />
          <ItemContent>익명</ItemContent>
        </AuthorContainer>
        <Rowcontainer>
          <TitleP>중앙해커톤 관련 질문</TitleP>
          <Reply>답변 완료</Reply>
        </Rowcontainer>
        <ContentField>
          {contents.map((content, index) => (
            <div key={index}>
              <div>{renderTextWithLineBreaks(content.question)}</div>
            </div>
          ))}
        </ContentField>
      </Contentcontainer>
      <AnswerContainer>
        <AnswerField>
          <AuthorContainer>
            <Graycircle src={GrayCircle} alt="Gray Circle" />
            <ItemContent>운영진</ItemContent>
          </AuthorContainer>
        </AnswerField>
      </AnswerContainer>
      <Footer />
    </>
  );
}

export default Qnacontent;

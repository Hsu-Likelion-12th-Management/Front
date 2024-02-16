import styled from 'styled-components';
import Hsulogo from '../images/hsulogo.png';
import Footer from '../footer/footer';
import GrayCircle from '../images/graycircle.png';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: center;
`;

const AskP = styled.p`
  color: var(--Sub-color, #ff7710);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 170%; /* 34px */

  @media (max-width: 428px) {
    font-size: 18px;
  }

  & span {
    color: #fff;
  }
`;

const Pcontainer = styled.p`
  display: flex;
  flex-direction: row;
  padding-right: 20px;
`;

const QuestionListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #484a64;

  &:last-child {
    border-bottom: 1px solid #484a64;
  }
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  width: 30%;
`;

const Graycircle = styled.img`
  width: 20px;
  height: 20px;
`;

const ItemContent = styled.span`
  display: flex; // flex 컨테이너로 설정
  justify-content: center; // 수평 가운데 정렬
  align-items: center; // 수직 가운데 정렬
  color: var(--White, #fff);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  white-space: nowrap;
  width: 35%;
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
  margin-left: auto; // 답변 상태를 오른쪽으로 정렬
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 66px;
`;

const PageNumber = styled.span`
  color: var(--Gray3, #626682);
  /* body/body_medium_14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0 8px;
  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.span`
  width: 1px;
  height: 16px;
  background: var(--Gray3, #2a2a3a);
  display: inline-block;
`;

function handlePageClick(number) {
  console.log(`Page ${number} clicked`);
}

const StyledLink = styled(Link)`
  width: 22%;
  height: 35px;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--Sub-color, #ff7710);
  color: var(--White, #fff);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 428px) {
    font-size: 14px;
  }
`;

const QnaLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
`;

function Qnalist({ questions }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [1, 2, 3];

  return (
    <>
      <QnaLayout>
        <ContentContainer>
          <IntroContainer>
            <InContainer>
              <img src={Hsulogo} alt="한성로고" style={{ width: '8%' }} />
              <IntroP>Q&A</IntroP>
            </InContainer>
          </IntroContainer>
          <AskContainer>
            <Pcontainer>
              <AskP>
                한성대학교 멋쟁이사자처럼에게
                <br />
                <span>무엇이든 물어보세요!</span>
              </AskP>
            </Pcontainer>
            <StyledLink to="/question">질문하기</StyledLink>
          </AskContainer>
          <QuestionListContainer>
            {questions.map((question) => (
              <div key={question.id}>
                <Link to={`/Qnacontent/${question.id}`}>
                  <QuestionItem>
                    <AuthorContainer>
                      <Graycircle
                        src={GrayCircle}
                        alt="Gray Circle"
                        style={{ marginRight: '7px' }}
                      />
                      <ItemContent>{question.author}</ItemContent>
                    </AuthorContainer>
                    <ItemContent>{question.title}</ItemContent>
                    <ItemContent>{question.date}</ItemContent>
                    <Reply status={question.status}>{question.status}</Reply>
                  </QuestionItem>
                </Link>
              </div>
            ))}
          </QuestionListContainer>
        </ContentContainer>

        <PaginationContainer>
          {pageNumbers.map((number, index) => (
            <React.Fragment key={number}>
              <PageNumber
                onClick={() => handlePageClick(number)}
                style={
                  currentPage === number
                    ? { color: 'var(--White, #FFF)', fontWeight: 700 }
                    : {}
                }
              >
                {number}
              </PageNumber>
              {index < pageNumbers.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </PaginationContainer>

        <Footer />
      </QnaLayout>
    </>
  );
}

export default Qnalist;

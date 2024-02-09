import styled from 'styled-components';
import Hsulogo from '../images/hsulogo.png';
import Footer from '../footer/footer';
import GrayCircle from '../images/graycircle.png';
import React from 'react';
import { useState } from 'react';

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

const QuesButton = styled.button`
  width: 22%;
  height: 35px;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--Sub-color, #ff7710);
  color: var(--White, #fff);
  text-align: center;

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 428px) {
    font-size: 14px;
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

function Qnalist() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [1, 2, 3];

  const questions = [
    {
      id: 1,
      author: '익명',
      content: '모집 관련 질문입니다.',
      date: '2024.01.29',
      status: '답변완료',
    },
    {
      id: 2,
      author: '익명',
      content: '모집 관련 질문입니다.',
      date: '2024.01.29',
      status: '답변 중',
    },
    {
      id: 3,
      author: '익명',
      content: '모집 관련 질문입니다.',
      date: '2024.01.29',
      status: '답변완료',
    },
    {
      id: 4,
      author: '익명',
      content: '모집 관련 질문입니다.',
      date: '2024.01.29',
      status: '답변 중',
    },
    {
      id: 5,
      author: '익명',
      content: '모집 관련 질문입니다.',
      date: '2024.01.29',
      status: '답변완료',
    },
    {
      id: 6,
      author: '익명',
      content: '모집 관련 질문입니다.',
      date: '2024.01.29',
      status: '답변 중',
    },
    {
      id: 7,
      author: '익명',
      content: '모집 관련 질문입니다.',
      date: '2024.01.29',
      status: '답변 중',
    },
    {
      id: 8,
      author: '익명',
      content: '모집 관련 질문입니다.',
      date: '2024.01.29',
      status: '답변완료',
    },
  ];

  return (
    <>
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
        <QuesButton>질문하기</QuesButton>
      </AskContainer>
      <QuestionListContainer>
        {questions.map((question) => (
          <QuestionItem key={question.id}>
            <AuthorContainer>
              <Graycircle src={GrayCircle} alt="Gray Circle" />
              <ItemContent>{question.author}</ItemContent>
            </AuthorContainer>
            <ItemContent>{question.content}</ItemContent>
            <ItemContent>{question.date}</ItemContent>
            <Reply status={question.status}>{question.status}</Reply>
          </QuestionItem>
        ))}
      </QuestionListContainer>

      <PaginationContainer>
        {pageNumbers.map((number, index) => (
          <React.Fragment key={number}>
            <PageNumber
              onClick={() => handlePageClick(number)} // 클릭 이벤트 핸들러를 설정합니다.
              style={
                currentPage === number
                  ? { color: 'var(--White, #FFF)', fontWeight: 700 }
                  : {}
              }
            >
              {number}
            </PageNumber>
            {index < pageNumbers.length - 1 && <Divider />}{' '}
            {/* Divider 조건부 렌더링 */}
          </React.Fragment>
        ))}
      </PaginationContainer>

      <Footer />
    </>
  );
}

export default Qnalist;

import styled from 'styled-components';
import Hsulogo from '../images/hsulogo.png';
import Footer from '../footer/footer';
import GrayCircle from '../images/graycircle.png';
import Edit from '../images/editpencil.png';
import { useState } from 'react';
import IdentityVerification from '../IdentityVerification/IdentityVerification';
import Overlay from '../overlay/Overlay';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Comment from './comment';

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

const AnswerText = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
`;

const EditIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-top: auto;
  align-self: flex-end;
  cursor: pointer;
`;

const ContentFlexContainer = styled.div`
  display: flex; // Stack children vertically
  justify-content: space-between;
  padding-right: 14px;
  padding-bottom: 12px;
  height: 100%;
`;

function Qnacontent({ questions }) {
  const { postId } = useParams();
  const [post, setPosts] = useState(null);

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

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8080/api/post?postId=${postId}`
        );
        setPosts(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.error('게시글 목록을 가져오는 데 실패했습니다:', error);
      }
    };

    fetchPostDetails();
  }, [postId]);

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
        {post && (
          <>
            <AuthorContainer>
              <Graycircle src={GrayCircle} alt="Gray Circle" />
              <ItemContent>{post.postedUserName}</ItemContent>
            </AuthorContainer>
            <Rowcontainer>
              <TitleP>{post.title}</TitleP>
              <Reply>응답중</Reply>
            </Rowcontainer>
            <ContentField>
              <ContentFlexContainer>
                <div>{post.content}</div>
                <EditIcon src={Edit} alt="수정" onClick={showIVHandler} />
              </ContentFlexContainer>
            </ContentField>
          </>
        )}
      </Contentcontainer>

      {/* 댓글부분 */}
      <Comment postId={postId} />

      <Footer />
    </>
  );
}

export default Qnacontent;

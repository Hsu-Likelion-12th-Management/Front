import styled from 'styled-components';
import Hsulogo from '../images/hsulogo.png';
import Footer from '../footer/footer';
import GrayCircle from '../images/graycircle.png';
import Edit from '../images/editpencil.png';
import { useState } from 'react';
import IdentityVerification from '../IdentityVerification/IdentityVerification';
import Overlay from '../overlay/Overlay';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Comment from './comment';
import CreateReply from '../createReply/CreateReply';

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex-grow: 1;
`;

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

const SubmitButton = styled.button`
  width: 40px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #7f85a3;
  color: #2a2a3a;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 10px;
  align-self: flex-end;
  cursor: pointer;

  &:hover {
    width: 40px;
    height: 24px;
    flex-shrink: 0;
    border-radius: 4px;
    background: #ff7710;
    color: #fff;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const ContentFlexContainer = styled.div`
  display: flex; // Stack children vertically
  justify-content: space-between;
  padding-right: 14px;
  padding-bottom: 12px;
  height: 100%;
`;

const EditInputField = styled.input`
  width: calc(50% - 8px);
  height: 40px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--Gray5, #2a2a3a);
  background: var(--Black, #0f1015);
  padding-left: 17px;
  color: #fff;
`;

const EditTextAreaField = styled.textarea`
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
    outline: none;
  }

  &::placeholder {
    color: var(--Gray2, #7f85a3);
  }
`;

function Qnacontent() {
  const { postId } = useParams();
  const [post, setPosts] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState('');

  const [commentsCount, setCommentsCount] = useState(0);

  const updateCommentsCount = (count) => {
    setCommentsCount(count);
  };

  const location = useLocation();

  const executiveName = localStorage.getItem('executiveName');
  const id = localStorage.getItem('id');

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

  const fetchPostDetails = async () => {
    try {
      const response = await axios.get(
        `https://www.hsu-like-lion.com/api/post?postId=${postId}`
      );
      setPosts(response.data.data);
      console.log(response.data);
      setStatus(response.data.data.status == 'DONE' ? '답변 완료' : '답변 중');
    } catch (error) {
      console.error('게시글 상세 정보를 가져오는 데 실패했습니다:', error);
    }
  };

  useEffect(() => {
    fetchPostDetails();
    console.log(executiveName);
    console.log(id);
  }, [postId]);

  const EditPost = async () => {
    try {
      const response = await axios.put(
        `https://www.hsu-like-lion.com/api/post/${postId}`,
        {
          postedUserName: post.postedUserName,
          title: post.title,
          content: post.content,
        }
      );

      if (response.status === 200) {
        console.log('게시글 업데이트 성공', response.data);
        fetchPostDetails();
        setEditMode(false);
      } else {
        console.log('게시글 업데이트 실패', response.data);
      }
    } catch (error) {
      console.error('게시글 업데이트 중 오류 발생:', error);
    }
  };

  const onVerifySuccess = () => {
    //본인 인증 성공 후
    setIsVerified(true);
    setEditMode(true);
    setShowIV(false);
  };

  const EditIconClickHandler = () => {
    if (isVerified) {
      setEditMode(true); // 이미 인증되었다면 바로 수정 모드로
    } else {
      showIVHandler(); // 인증되지 않았다면 본인 인증 모달 표시
    }
  };

  const handleStatusUpdate = (newStatus) => {
    setStatus(newStatus); // 상태 업데이트
  };

  return (
    <>
      <IntroContainer>
        <InContainer>
          <img src={Hsulogo} alt="한성로고" style={{ width: '8%' }} />
          <IntroP>Q&A</IntroP>
        </InContainer>
      </IntroContainer>

      {showIV && (
        <IdentityVerification
          closeIVHandler={closeIVHandler}
          postId={postId}
          onVerifySuccess={onVerifySuccess}
        />
      )}
      {showIV && <Overlay showIV={showIV} />}

      <Contentcontainer>
        {post && (
          <>
            <AuthorContainer>
              <Graycircle src={GrayCircle} alt="Gray Circle" />
              <ItemContent>{post.postedUserName}</ItemContent>
            </AuthorContainer>

            {isVerified && editMode ? ( //인증되고 수정모드
              <>
                <Rowcontainer>
                  <EditInputField
                    type="text"
                    value={post ? post.title : ''}
                    onChange={(e) => {
                      setPosts({ ...post, title: e.target.value });
                    }}
                    maxLength={10}
                  />
                  <Reply status={status}>{status}</Reply>
                </Rowcontainer>
                <EditTextAreaField
                  value={post ? post.content : ''}
                  onChange={(e) => {
                    setPosts({ ...post, content: e.target.value });
                  }}
                  maxLength={100}
                />
                <SubmitButton onClick={EditPost}>등록</SubmitButton>
              </>
            ) : (
              //인증이지만 수정모드 x
              <>
                <Rowcontainer>
                  <TitleP>{post.title}</TitleP>
                  <Reply status={status}>{status}</Reply>
                </Rowcontainer>
                <ContentField>
                  <ContentFlexContainer>
                    <StyledParagraph>{post.content}</StyledParagraph>
                    <EditIcon
                      src={Edit}
                      alt="수정"
                      onClick={EditIconClickHandler}
                    />
                  </ContentFlexContainer>
                </ContentField>
              </>
            )}
          </>
        )}
      </Contentcontainer>

      {/* 댓글부분 */}
      {/* <CreateReply postId={postId} executiveName={executiveName} id={id} /> */}
      {/* <CreateReply
        postId={postId}
        executiveName={executiveName}
        id={id}
      /> */}
      <Comment
        postId={postId}
        executiveName={executiveName}
        id={id}
        updateCommentsCount={updateCommentsCount}
        onStatusUpdate={handleStatusUpdate}
      />
      <div style={{marginTop: "10rem"}}>
        <Footer />
      </div>
    </>
  );
}

export default Qnacontent;

import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import GrayCircle from "../images/graycircle.png";
import CreateReply from "../createReply/CreateReply";
import moment from "moment";
const url = `https://www.hsu-like-lion.com/`;

const AnswerContainer = styled.div`
  width: 100%;
  background: var(--Black, #0f1015);
  padding-top: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  color: ${(props) => props.color || "white"};
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
      props.status === "답변 중"
        ? "var(--Sub-color, #FF7710)"
        : "var(--Gray2, #7f85a3)"};
  color: ${(props) =>
    props.status === "답변 중"
      ? "var(--Sub-color, #FF7710)"
      : "var(--Gray2, #7f85a3)"};
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

const AnswerField = styled.div`
  margin-bottom: 10px;
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
  margin-left: 0.5rem;
`;

const InfoContainer = styled.div`
  display: flex;
  // justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-bottom: 8px;
  position: relative;
`;

const AnswerContent = styled.div`
  margin-top: 8px;
`;

const ContentFlexContainer = styled.div`
  display: flex; // Stack children vertically
  justify-content: space-between;
  padding-right: 14px;
  padding-bottom: 12px;
  height: 100%;
`;

const ButtonStyle = `
color: var(--Gray3, #626682);
font-family: Pretendard;
font-size: 0.625rem;
font-style: normal;
font-weight: 600;
line-height: normal;
background: inherit;
border: none;
`;

const ModifyButton = styled.button`
  ${ButtonStyle};
  margin-right: 0.5rem;
`;

const DeleteButton = styled.button`
  ${ButtonStyle};
`;

function Comment({ postId, executiveName, id, onStatusUpdate }) {
  const [contents, setContents] = useState([]);
  const [executive, setExecutive] = useState("");
  const [reply, setReply] = useState("");
  const [executiveId, setExecutiveId] = useState("id");
  const [isActive, setIsActive] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [writedTime, setWritedTime] = useState("");

  const handleActive = () => {
    setIsActive(true);
  };

  useEffect(() => {
    fetchPostId();
  }, [postId]);

  const fetchPostId = async () => {
    try {
      const response = await axios.get(
        `https://www.hsu-like-lion.com/api/post/${postId}/comments`
      );
      const comments = response.data.data.comments;
      console.log("댓글 조회 성공");
      setContents(comments);
    } catch (error) {
      console.error("게시글 목록을 가져오는 데 실패했습니다:", error);
    }
  };

  const renderTextWithLineBreaks = (text) => {
    return text.split("\n").map((line, index) => (
      <StyledParagraph key={index} style={{ margin: 0 }}>
        {line}
      </StyledParagraph>
    ));
  };

  const handleReply = (e) => {
    setReply(e.target.value);
  };

  const updatePostStatus = async (postId, status) => {
    console.log(postId);
    try {
      const response = await axios.post(
        `https://www.hsu-like-lion.com/api/post/${postId}/status`,
        status
      );

      if (response.status === 200) {
        console.log("게시글 상태 업데이트 성공");
        const updatedStatus = response.data.data.status; // 업데이트된 상태
        onStatusUpdate(updatedStatus);
      } else {
        console.log("게시글 상태 업데이트 실패", response.data);
      }
    } catch (error) {
      console.error("게시글 상태 업데이트 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    setExecutive(executiveName);
    setExecutiveId(id);
    console.log(executiveName);
    console.log(executiveId);
  }, [executive]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(postId);

    try {
      const response = await axios.post(
        `https://www.hsu-like-lion.com/api/post/${postId}/comments`,
        {
          id: executiveId,
          name: executiveName,
          content: reply,
        }
      );

      if (response.status === 200) {
        console.log("댓글 작성 성공");
        console.log(response.data);
        const commentId = response.data.data.commentsId;
        const updatedTime = response.data.data.updatedAt;
        console.log(commentId);
        console.log(updatedTime);
        setReply("");
        fetchPostId();
        setIsActive(false);
        setWritedTime(updatedTime);
      } else {
        console.log("작성 실패");
        console.log(response.data);
      }
    } catch (error) {
      console.error("오류", error);
      alert("접근 권한이 없습니다.");
    }

    if (contents.length === 0) {
      // 댓글이 처음 추가된 경우
      updatePostStatus(postId, "DONE"); // 상태를 '답변 완료'로 변경
    }
  };

  const handleVerify = async (selectedContent) => {
    try {
      const response = await axios.post(
        `https://www.hsu-like-lion.com/api/comments/${selectedContent.commentsId}`,
        {
          id: executiveId,
        }
      );

      if (response.status === 200) {
        console.log("인증 완료");
        setEditMode(true);
        setReply(selectedContent.content);
        setSelectedContent(selectedContent);
      } else {
        setEditMode(false);
      }
    } catch (error) {
      console.error("오류", error);
      alert("접근 권한이 없습니다.");
    }
  };

  const handleModify = async (selectedContent) => {
    // e.preventDefault();
    console.log(selectedContent);
    try {
      const response = await axios.put(
        `https://www.hsu-like-lion.com/api/comments/${selectedContent.commentsId}`,
        {
          id: executiveId,
          content: reply,
        }
      );
      if (response.status === 200) {
        console.log("수정 완료");
        fetchPostId();
        setEditMode(false);
        setReply("");
      } else {
        console.log("수정 실패");
      }
    } catch (error) {
      console.log("오류", error);
    }
  };

  const handleDelete = async (selectedContent) => {
    console.log(selectedContent);
    console.log(executiveId);

    try {
      const response = await axios.delete(
        `https://www.hsu-like-lion.com/api/comments/${selectedContent.commentsId}`,
        {
          data: {
            id: executiveId,
          },
        }
      );
      if (response.status === 200) {
        console.log("삭제 완료");
        fetchPostId();
      } else {
        console.log("실패");
      }
    } catch (error) {
      console.error("오류", error);
      alert("접근 권한이 없습니다.");
    }

    if (contents.length - 1 === 0) {
      // 마지막 댓글이 삭제된 경우
      updatePostStatus(postId, "PROGRESS"); // 상태를 '답변 중'으로 변경
    }
  };

  function formattingTime(updatedAt) {
    const today = moment.utc().local();
    const postingDate = moment.utc(updatedAt).local();
    const dayDiff = postingDate.diff(today, "days");
    const hourDiff = postingDate.diff(today, "hours");
    const minuteDiff = postingDate.diff(today, "minutes");

    if (dayDiff === 0 && hourDiff === 0 && minuteDiff === 0) {
      return "방금 전";
    }

    if (dayDiff === 0 && hourDiff === 0) { 
      const minutes = Math.ceil(-minuteDiff);
      return minutes + '분 전';		
    }
  
    if (dayDiff === 0 && hourDiff <= 24) { 
      const hour = Math.ceil(-hourDiff);
      return hour + '시간 전';		
    }
  
    return -dayDiff + '일 전';
  };


  return (
    <>
      <AnswerContainer>
        {editMode ? (
          <CreateReply
            handleSubmit={handleSubmit}
            handleReply={handleReply}
            executive={executive}
            reply={reply}
            isActive={isActive}
            setIsActive={setIsActive}
            handleActive={handleActive}
            handleModify={handleModify}
            editMode={editMode}
            selectedContent={selectedContent}
          />
        ) : (
          <CreateReply
            handleSubmit={handleSubmit}
            handleReply={handleReply}
            executive={executive}
            reply={reply}
            isActive={isActive}
            setIsActive={setIsActive}
            handleActive={handleActive}
          />
        )}
        {contents.map((content) => (
          <AnswerField key={content.commentsId}>
            <InfoContainer>
              <AuthorContainer>
                <Graycircle src={GrayCircle} alt="Gray Circle" />
                <ItemContent>{content.name}</ItemContent>
              </AuthorContainer>
              <Minutes>{formattingTime(content.updatedAt)}</Minutes>
              <div style={{ position: "absolute", right: "0.75rem" }}>
                <ModifyButton onClick={() => handleVerify(content)}>
                  수정
                </ModifyButton>
                <DeleteButton onClick={() => handleDelete(content)}>
                  삭제
                </DeleteButton>
              </div>
            </InfoContainer>
            {content.content}
          </AnswerField>
        ))}
      </AnswerContainer>
    </>
  );
}

export default Comment;

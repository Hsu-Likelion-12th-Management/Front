import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import GrayCircle from "../images/graycircle.png";

const url = `http://3.38.108.41/`;

const RegisterContainer = styled.div`
  width: 90%;
  height: 6.25rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  border: 1px solid ${({activeBorder}) => activeBorder ? "#7F85A3" : "var(--Gray5, #2a2a3a)"};
  background: #2a2a3a;
  margin: 0 auto;
`;

const ExecutiveField = styled.p`
  color: var(--White, #FFF);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  margin-left: 0.5rem;
`

const SubmitButton = styled.button`
  width: 2.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  background: #7F85A3;
  color: #2A2A3A;
  font-family: Pretendard;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: absolute;
  right: 0.75rem;
`

const ReplyField = styled.input`
  margin-top: 0.5rem;
  margin-left: 1rem;
  color: white;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 170%; /* 1.275rem */
`

export default function CreateReply({ postId, executiveName, executiveId }) {
  const [reply, setReply] = useState("");
  const [executive, setExecutive] = useState("user");
  const [border, setBorder] = useState(false);

  const handleActive = () =>  {
    setBorder(true);
  }

  const handleReply = (e) => {
    setReply(e.target.value);
  };

  useEffect(() => {
    setExecutive(executiveName);
    console.log(executiveName);
    console.log(executiveId);
  },[executive])

  // const getName = async () => {
  //   try {
  //     const response = await axios.get('http://3.38.108.41/api/admin/login');
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("오류", error)
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://3.38.108.41/api/post/${postId}/comments`,
        {
          id: "test",
          name: "테스트",
          content: reply,
        }
      );

      if (response.status === 200) {
        console.log("댓글 작성 성공");
        console.log(response.data);
      } else {
        console.log("작성 실패");
        console.log(response.data);
      }
    } catch (error) {
      console.error("오류", error);
    }
  };

  return (
    <RegisterContainer activeBorder={border}>
      <form>
        <div style={{display: "flex", alignItems: "center", marginTop: "1.06rem", position: "relative"}}>
          <img src={GrayCircle} alt="graycircleImg" style={{marginLeft: "1rem"}} />
          <ExecutiveField>{executive}</ExecutiveField>
          <SubmitButton onClick={handleSubmit}>등록</SubmitButton>
        </div>
        <ReplyField type="text" placeholder="댓글을 남겨보세요" onChange={handleReply} onFocus={handleActive} />
      </form>
    </RegisterContainer>
  );
}

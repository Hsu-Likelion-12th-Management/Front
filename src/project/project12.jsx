import styled from "styled-components";
import Intro from "../Intro/Intro";
import Footer from "../footer/footer";

const IntroduceText = styled.p`
  color: var(--White, #FFF);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 170%;
  margin-top: 8rem;
  margin-bottom: 20rem;
`

const containerStyle={
  maxWidth : '428px'
}

function Project12() {
  return <div style={containerStyle}>
    <Intro>12기 프로젝트</Intro>
    <IntroduceText>당신의 아이디어를 실현할 수 있는 기회,<br></br> 바로 <span style={{color: "var(--Sub-color, #FF7710)"}}>지금</span>입니다!</IntroduceText>
    <Footer></Footer>
  </div>;
}

export default Project12;

import "./project.css";
import styled from "styled-components";
import Intro from "../Intro/Intro";
import plan from "../images/plan.svg";
import design from "../images/design.svg";
import developer from "../images/developer.svg";
import HexagonBox from "../projectComponents/HexagonBox";
import IntroduceText from "../projectComponents/IntroduceText";
import ImgBanner from "../projectComponents/ImgBanner";
import life from "../images/life.png";
import happiness from "../images/happiness.png";
import moah from "../images/moah.png";

const TitleText = styled.p`
  margin-top: 3.75rem;
  margin-left: 1.25rem;
  color: var(--White, #fff);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const MoreButton = styled.button`
  width: 3.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  border-radius: 0.375rem;
  background: var(--Gray4, #484a64);
  color: var(--Gray1, #bfc4d8);
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 170%; /* 1.275rem */
  position: absolute;
  right: 1rem;
`;

function Project() {
  const projectImg = [life, happiness, moah];

  return (
    <>
      <Intro>활동 소개</Intro>

      <HexagonBox class="topImgBox" img={plan} text="기획" />
      <div className="bottomImgBox">
        <HexagonBox class="leftImgBox" img={design} text="디자인" />
        <HexagonBox class="rightImgBox" img={developer} text="개발자" />
      </div>

      <div className="introduceTextBox">
        <IntroduceText class="introduceText">
          한성대 멋쟁이 사자처럼
        </IntroduceText>
        <IntroduceText class="introduce pointText">
          기획 + 디자인 + 개발자
        </IntroduceText>
        <IntroduceText class="introduceText">
          해커톤 및 협업의 결과물을 확인해 보세요!
        </IntroduceText>
      </div>

      <TitleText>해커톤 우수작</TitleText>

      <ImgBanner></ImgBanner>

      <TitleText>11기</TitleText>

      <div className="projectBg">
        {projectImg.map((image, index) => {
          return <img src={image} key={index} alt={`이미지[${index}]`} />;
        })}
      </div>

      <div style={{ marginTop: "1rem", position: "relative" }}>
        <MoreButton>더보기</MoreButton>
      </div>

      
    </>
  );
}

export default Project;

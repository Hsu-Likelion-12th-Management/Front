import "./project.css";
import Intro from "../Intro/Intro";
import hexagon from "../images/hexagon.svg";
import plan from "../images/plan.svg";
import design from "../images/design.svg";
import developer from "../images/developer.svg";

function Project() {
  return (
    <>
      <Intro>활동 소개</Intro>
      <div className="topImgBox">
        <img src={hexagon} alt="hexagonImg" style={{ width: "10.3125rem" }} />
        <div className="planImgBox">
          <img src={plan} alt="planImg" />
          <p className="planText">기획</p>
        </div>
      </div>
      <div className="bottomImgBox">
        <div className="leftImgBox">
          <img src={hexagon} alt="hexagonImg" style={{ width: "10.3125rem" }} />
          <div className="designImgBox">
            <img src={design} alt="designImg" />
            <p className="designText">디자인</p>
          </div>
        </div>
        <div className="rightImgBox">
          <img src={hexagon} alt="hexagonImg" style={{ width: "10.3125rem" }} />
          <div className="developerImgBox">
            <img src={developer} alt="developerImg" />
            <p className="developerText">개발자</p>
          </div>
        </div>
      </div>
      <div className="introduceTextBox">
        <p className="introduceText">한성대 멋쟁이 사자처럼</p>
        <p className="introduceText pointText">기획 + 디자인 + 개발자</p>
        <p className="introduceText">해커톤 및 협업의 결과물을 확인해 보세요!</p>
      </div>
    </>
  );
}

export default Project;

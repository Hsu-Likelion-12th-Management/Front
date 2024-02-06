import Intro from "../Intro/Intro";
import hexagon from "../images/hexagon.svg";

function Project() {
  return (
    <>
      <Intro>활동 소개</Intro>
      <div>
        <div className="topImgContainer">
          <img src={hexagon}/>
        </div>
      </div>
    </>
  );
}

export default Project;

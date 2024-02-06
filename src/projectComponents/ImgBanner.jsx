import { useState } from "react";
import leftButton from "../images/leftButton.svg";
import rightButton from "../images/rightButton.svg";
import life from "../images/life.png";
import happiness from "../images/happiness.png";
import moah from "../images/moah.png";

export default function ImgBanner() {
  const projectImg = [life, happiness, moah];
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveRight = () => {
    setCurrentIndex((prevIndex) => {
      return ((prevIndex+1) % projectImg.length); 
    })
  }

  const moveLeft = () => {
    setCurrentIndex((prevIndex) => {
      return ((prevIndex-1 + projectImg.length) % projectImg.length);
    })
  }
  return (
    <div className="bannerBox">
      <div className="buttonBox">
        <button className="leftButton" onClick={moveLeft}>
          <img src={leftButton} alt="leftButton" />
        </button>
      </div>
      <div className="bannerImg">
        <img src={projectImg[currentIndex]} alt="life" />
      </div>
      <div className="buttonBox">
        <button className="rigthButton" onClick={moveRight}>
          <img src={rightButton} alt="rightButton" />
        </button>
      </div>
    </div>
  );
}

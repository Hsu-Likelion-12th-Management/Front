import "./menubar.css";
import Menubar from "../images/menubar.png";
import smallLogo from "../images/smallLogo.svg";
import whiteLogo from "../images/whiteLogo.svg";
import whiteNote from "../images/whiteNote.svg";
import grayNote from "../images/grayNote.svg";
import Moniter from "../images/Monitor.svg";
import whiteMoniter from "../images/whiteMonitor.svg";
import chats from "../images/Chats.svg";
import whiteChats from "../images/whiteChats.svg";
import apply from "../images/PencilSimpleLine.svg";
import whitePencil from "../images/whitePencil.svg";
import hsuLogo from "../images/grayHsuLogo.svg";
import styled from "styled-components";
import { useState } from "react";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
function List({ image, children, tailText, activeImg, activeText, setActiveText, ...props }) {

  const handleClick = () => {
    setActiveText(props.text);
  }

  const ListBox = styled.button`
    display: flex;
    gap: 0.5rem;
    margin-left: 1.25rem;
    align-items: center;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${activeText ? "var(--White, #fff)" : "var(--Gray2, #7f85a3)"};
  `;

  return (
    <ListBox onClick={handleClick} >
      <img src={activeText ? activeImg : image} alt="img" />
      <p>{props.text}</p>
    </ListBox>
  );
}

export default function SideMenuBar({showMenu, setShowMenu}) {
  const [activeButton, setActiveButton] = useState(null);

  const closeMenuHandler = () => {
    setShowMenu(false);
  }

  const activeButtonHandler = (text) => {
    setActiveButton(text);
  }

  return (
    <div className={showMenu ? "menuBarContainer" : "hideMenuBarContainer"}>
      <div className="menuBox" onClick={closeMenuHandler}>
        <img src={Menubar} />
        <p className="menuText">메뉴</p>
      </div>
      <ListContainer>
        <List image={smallLogo} activeImg={whiteLogo} text="멋사란?" activeText={activeButton === "멋사란?"} setActiveText={activeButtonHandler} />
        <List image={grayNote} activeImg={whiteNote} text="활동 소개" activeText={activeButton === "활동 소개"} setActiveText={activeButtonHandler} />
        <div>
          <List image={Moniter} activeImg={whiteMoniter} text="프로젝트" activeText={activeButton === "프로젝트"} setActiveText={activeButtonHandler} tailText={true} />
          <div className="tailTextBox">
            <button>11기</button>
            <button>12기</button>
          </div>
        </div>
        <List image={chats} activeImg={whiteChats} text="Q&A" activeText={activeButton === "Q&A"} setActiveText={activeButtonHandler} />
        <List image={apply} activeImg={whitePencil} text="지원하기" activeText={activeButton === "지원하기"} setActiveText={activeButtonHandler} />
      </ListContainer>
      <img src={hsuLogo} alt="hsuLogo" style={{marginTop: "26rem", marginLeft: "1.25rem" }} />
    </div>
  );
}
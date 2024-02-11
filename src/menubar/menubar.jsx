import { Link } from 'react-router-dom';
import "./menubar.css";
import Menubar from "../images/menubar.png";
import smallLogo from "../images/smallLogo.svg";
import whiteLogo from "../images/whiteLogo.svg";
import whiteNote from "../images/whiteNote.svg";
import grayNote from "../images/grayNote.svg";
import Monitor from "../images/Monitor.svg";
import whiteMonitor from "../images/whiteMonitor.svg";
import chats from "../images/Chats.svg";
import whiteChats from "../images/whiteChats.svg";
import apply from "../images/PencilSimpleLine.svg";
import whitePencil from "../images/whitePencil.svg";
import hsuLogo from "../images/grayHsuLogo.svg";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

function List({ image, activeImg, activeText, setActiveText, text, path}) {

  let navigate = useNavigate();

  const handleClick = () => {
    setActiveText(text);
    navigate(path);
  }

  return (
    <button className={activeText ? "activeListBox" : "listBox"} onClick={handleClick} >
      <img src={activeText ? activeImg : image} alt="img" />
      <p>{text}</p>
    </button>
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
        <img src={Menubar} alt="menuBar" />
        <p className="menuText">메뉴</p>
      </div>
      <ListContainer>
        <List image={smallLogo} activeImg={whiteLogo} text="멋사란?" activeText={activeButton === "멋사란?"} setActiveText={activeButtonHandler} path="/" />
        <List image={grayNote} activeImg={whiteNote} text="활동 소개" activeText={activeButton === "활동 소개"} setActiveText={activeButtonHandler} path="/activity" />
        <div>
          <List image={Monitor} activeImg={whiteMonitor} text="프로젝트" activeText={activeButton === "프로젝트"} setActiveText={activeButtonHandler} path="/Project" />
          <div className="tailTextBox">
            <Link to="/eleven"><button>11기</button></Link>
            <Link to="/Project12"><button>12기</button></Link>
          </div>
        </div>
        <List image={chats} activeImg={whiteChats} text="Q&A" activeText={activeButton === "Q&A"} setActiveText={activeButtonHandler} path="/Qnalist" />
        <List image={apply} activeImg={whitePencil} text="지원하기" activeText={activeButton === "지원하기"} setActiveText={activeButtonHandler} path="/Apply "/>
      </ListContainer>
      <img src={hsuLogo} alt="hsuLogo" style={{marginTop: "26rem", marginLeft: "1.25rem" }} />
    </div>
  );
}
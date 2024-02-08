import "./menubar.css";
import Menubar from "../images/menubar.png";
import smallLogo from "../images/smallLogo.svg";
import whiteNote from "../images/whiteNote.svg";
import Moniter from "../images/Monitor.svg";
import chats from "../images/Chats.svg";
import apply from "../images/PencilSimpleLine.svg";
import hsuLogo from "../images/grayHsuLogo.svg";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
function List({ image, children, tailText, ...props }) {
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
    color: var(--Gray2, #7f85a3);
    &:focus {
      color: var(--White, #fff);
    }
  `;

  return (
    <ListBox>
      <img src={image} alt="img" />
      <p>{props.text}</p>
    </ListBox>
  );
}

export default function SideMenuBar() {
  return (
    <div className="menuBarContainer">
      <div className="menuBox">
        <img src={Menubar} />
        <p className="menuText">메뉴</p>
      </div>
      <ListContainer>
        <List image={smallLogo} text="멋사란?" />
        <List image={whiteNote} text="활동 소개" />
        <div>
          <List image={Moniter} text="프로젝트" tailText={true} />
          <div className="tailTextBox">
            <button>11기</button>
            <button>12기</button>
          </div>
        </div>
        <List image={chats} text="Q&A" />
        <List image={apply} text="지원하기" />
      </ListContainer>
      <img src={hsuLogo} alt="hsuLogo" style={{marginTop: "26rem", marginLeft: "1.25rem" }} />
    </div>
  );
}

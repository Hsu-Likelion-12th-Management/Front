import "./menubar.css";
import Menubar from "../images/menubar.png";
import styled from "styled-components";

const ListContainer = styled.div`
  
`

export default function SideMenuBar() {
  return <div className="menuBarContainer">
    <div className="menuBox">
      <img src={Menubar} />
      <p>메뉴</p>
    </div>
  </div>
}

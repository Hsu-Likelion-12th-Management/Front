import styled from "styled-components";

const OverlayDiv = styled.div`
  display: ${(props) => (props.showMenu || props.showIV ? "block" : "none")};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

export default function Overlay({showMenu, showIV, closeShowMenu}) {
  return <OverlayDiv showMenu={showMenu} showIV={showIV} onClick={closeShowMenu}/>
}
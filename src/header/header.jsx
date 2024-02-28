import styled from 'styled-components';
import Menubar from '../images/menubar.png';
import SideMenuBar from '../menubar/menubar';

const HeaderContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 31px;
  padding-left: 24px;
  width: 100%;
  height: 90px;
  min-width: 428px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
`;

const HeaderP = styled.p`
  font-family: Pretendard;
  font-size: 24px;
  font-weight: bold;
  margin-left: 16px;
  color: ${(props) => props.color || 'white'};
`;

function Header({ showMenu, setShowMenu }) {
  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <HeaderContainer showMenu={showMenu}>
        <button onClick={showMenuHandler}>
          <img
            src={Menubar}
            alt="메뉴바"
            style={{ width: '24px', height: '18px' }}
          />
        </button>
        <HeaderP color="#FFFFFF">한성대학교</HeaderP>
        <HeaderP color="#FF7710">멋쟁이사자처럼</HeaderP>
      </HeaderContainer>
      <SideMenuBar showMenu={showMenu} setShowMenu={setShowMenu} />
      {/* {showMenu && <SideMenuBar />} */}
    </>
  );
}

export default Header;

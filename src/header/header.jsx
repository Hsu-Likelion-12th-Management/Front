import styled from 'styled-components';
import Menubar from '../images/menubar.png';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

function Header() {
  return (
    <>
      <img
        src={Menubar}
        alt="메뉴바"
        style={{ width: '12px', height: '12px' }}
      />
    </>
  );
}

export default Header;

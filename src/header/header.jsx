import styled from 'styled-components';
import Menubar from '../images/menubar.png';

const HeaderContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 31px;
  padding-left: 24px;
  width: 100%;
  height: 90px;
  max-width: 428px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-left: 25px;
  }
`;

const HeaderP = styled.p`
  font-family: Pretendard;
  font-size: 24px;
  font-weight: bold;
  margin-left: 16px;
  color: ${(props) => props.color || 'white'};
`;

function Header() {
  return (
    <>
      <HeaderContainer>
        <img
          src={Menubar}
          alt="메뉴바"
          style={{ width: '24px', height: '18px' }}
        />
        <HeaderP color="#FFFFFF">한성대학교</HeaderP>
        <HeaderP color="#FF7710">멋쟁이사자처럼</HeaderP>
      </HeaderContainer>
    </>
  );
}

export default Header;

import styled from "styled-components";
import Hsulogo from '../images/hsulogo.png';

const IntroContainer = styled.div`
  width: 100%;
  height: 80px;
  padding-top: 26px;
  padding-bottom: 25px;
  padding-left: 20px;
  background: linear-gradient(to right, #ff7710, #191b24 60px);
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
`;

const IntroP = styled.p`
  font-family: Pretendard;
  font-size: 24px;
  font-weight: bold;
  margin-left: 16px;
  color: ${(props) => props.color || 'white'};
`;

function Project11() {
  return (
    <>
      <IntroContainer>
        <img src={Hsulogo} alt="한성로고" style={{ width: "8%" }} />
        <IntroP>활동 소개</IntroP>
      </IntroContainer>
    </>
  );
}

export default Project11;

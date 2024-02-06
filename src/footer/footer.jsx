import styled from 'styled-components';
import Hsu from '../images/hsulion.png';
import Insta from '../images/lioninsta.png';

const FooterContainer = styled.div`
  width: 100%;
  height: 160px;
  background: var(--Gray6, #191b24);
  display: flex;
  flex-direction: row;
`;

const ContentContainer = styled.div`
  margin-top: 33px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  gap: 24px;
  @media (max-width: 768px) {
    width: 85%;
  }
`;

const ContentPContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4px;
  margin-right: 44px;
  gap: 4px;
`;

const ContentP = styled.p`
  color: var(--Gray1, #bfc4d8);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const GrayP = styled.p`
  color: var(--Gray2, #7f85a3);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

function Footer() {
  return (
    <>
      <FooterContainer>
        <ContentContainer>
          <img
            src={Hsu}
            alt="한성대로고"
            style={{ width: '75px', height: '42px' }}
          />
          <ContentPContainer>
            <ContentP>멋쟁이사자처럼 한성대학교</ContentP>
            <GrayP>문의처: hansung@likelion.org</GrayP>
            <GrayP>all copyright by @hansung.likelion</GrayP>
            <ContentP>이용약관</ContentP>
            <ContentP>개인정보처리방침</ContentP>
          </ContentPContainer>
          <img
            src={Insta}
            alt="인스타"
            style={{ width: '32px', height: '32px' }}
          />
        </ContentContainer>
      </FooterContainer>
    </>
  );
}

export default Footer;

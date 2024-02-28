import styled from 'styled-components';
import Hsu from '../images/hsulion.png';
import Insta from '../images/lioninsta.png';

const FooterContainer = styled.div`
  height: 160px;
  background: var(--Gray6, #191b24);
  display: flex;
  flex-direction: row;
`;

const HsuLogo = styled.img`
  width: 75px; // 기본 너비
  height: 42px; // 기본 높이

  @media (max-width: 428px) {
    width: 55px;
    height: 28px; // 화면 너비가 768px 이하일 때 높이 조정
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  margin-top: 33px;
  margin-left: 20px;
  margin-right: 20px; // 오른쪽 마진 추가
  display: flex;
  flex-direction: row;
  gap: 24px;
  @media (max-width: 428px) {
    gap : 10px;
  }
`;

const ContentPContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4px;
  margin-right: 44px;

  @media (max-width: 428px) {
    margin-right: 25px;
  }
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
  white-space: nowrap;
`;

function Footer() {
  return (
    <>
      <FooterContainer>
        <ContentContainer>
          <HsuLogo src={Hsu} alt="한성대로고" />
          <ContentPContainer>
            <ContentP>멋쟁이사자처럼 한성대학교</ContentP>
            <GrayP>문의처: hansung@likelion.org</GrayP>
            <GrayP>all copyright by @hansung.likelion</GrayP>
            <ContentP>이용약관</ContentP>
            <ContentP>개인정보처리방침</ContentP>
          </ContentPContainer>
          <a href="https://www.instagram.com/likelion_hansung?igsh=MTdsbXRweTFhemsyZA==">
            <img
              src={Insta}
              alt="인스타"
              style={{ width: '32px', height: '32px', marginRight: '20px' }}
            />
          </a>
        </ContentContainer>
      </FooterContainer>
    </>
  );
}

export default Footer;

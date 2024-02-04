import Hsulogo from '../images/hsulogo.png';
import styled from 'styled-components';
import study1 from '../images/study1.png';
import study2 from '../images/study2.png';
import study3 from '../images/study3.png';
import study4 from '../images/study4.png';

const StyledImage = styled.img`
  width: 100%;
  max-width: 186px;
  height: auto;
`;

const IntroContainer = styled.div`
  width: 100%;
  height: 4vh;
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

const StudyContainer = styled.div`
  padding-top: 32px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 20px;
`;

const TitleP = styled.p`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: bold;
`;

const ContentP = styled.p`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: Medium;
  margin-top: 8px;
  margin-bottom: 20px;
  color: #7f85a3;
`;

const PicContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
`;
function Activity() {
  const studyImages = [study1, study2, study3, study4];
  const groupedImages = [];
  for (let i = 0; i < studyImages.length; i += 2) {
    groupedImages.push(studyImages.slice(i, i + 2));
  }

  return (
    <>
      <IntroContainer>
        <img src={Hsulogo} style={{ width: '36.35px', height: '29px' }} />
        <IntroP>활동 소개</IntroP>
      </IntroContainer>
      <StudyContainer>
        <TitleP>팀 별 스터디</TitleP>
        <ContentP>
          기획,디자인,프론트엔드,백엔드 4개의 팀으로 주 1회 세션을 진행합니다.
        </ContentP>
        {groupedImages.map((group, index) => (
          <PicContainer key={index}>
            {group.map((image, idx) => (
              <StyledImage
                key={idx}
                src={image}
                alt={`Study Image ${idx + 1}`}
              />
            ))}
          </PicContainer>
        ))}
      </StudyContainer>
    </>
  );
}

export default Activity;

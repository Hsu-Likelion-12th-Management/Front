import Hsulogo from '../images/hsulogo.png';
import styled from 'styled-components';
import study1 from '../images/study1.jpeg';
import study2 from '../images/study2.jpeg';
import study3 from '../images/study3.png';
import study4 from '../images/study4.png';
import idea1 from '../images/idea1.jpeg';
import idea2 from '../images/idea2.jpeg';
import mid1 from '../images/detail3.jpg';
import mid2 from '../images/midton2.jpeg';
import Footer from '../footer/footer';
import yun1 from '../images/detail4.png';
import yun2 from '../images/yun1.jpeg';

const StyledImage = styled.img`
  width: 186px;
  height: 113px;
  border-radius: 8px;
  object-fit: cover;
`;

const IntroContainer = styled.div`
  width: 100%;
  height: 80px;
  padding-top: 26px;
  padding-bottom: 25px;
  padding-left: 20px;
  background: linear-gradient(to right, #ff7710, #191b24 60px);
`;

const InContainer = styled.div`
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
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
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

const HackP = styled.p`
  color: var(--Gray2, #7f85a3);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
  margin-bottom: 20px;
  margin-top: 8px;
`;

const PicContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  justify-content: center;
`;

const WholeContainer = styled.div`
  width: 88%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const ActivityContainer = styled.div`
  width: 100%;
`;

function Activity() {
  const groupedImages = [];
  // for (let i = 0; i < studyImages.length; i += 2) {
  //   groupedImages.push(studyImages.slice(i, i + 2));
  // }

  const ideaImages = [idea1, idea2];
  const midImages = [mid1, mid2];
  const studyImages = [study1, study2];
  const yunImages = [yun1, yun2];
  return (
    <>
      <ActivityContainer>
        <IntroContainer>
          <InContainer>
            <img src={Hsulogo} alt="한성로고" style={{ width: '8%' }} />
            <IntroP>활동 소개</IntroP>
          </InContainer>
        </IntroContainer>
        <WholeContainer>
          <StudyContainer>
            <TitleP>팀 별 스터디</TitleP>
            <ContentP>
              기획,디자인,프론트엔드,백엔드 4개의 팀으로 주 1회 세션을
              진행합니다.
            </ContentP>
            <PicContainer>
              {studyImages.map((image, idx) => (
                <StyledImage
                  key={idx}
                  src={image}
                  alt={`Idea Image ${idx + 1}`}
                />
              ))}
            </PicContainer>
          </StudyContainer>
          <StudyContainer>
            <TitleP>아이디어톤</TitleP>
            <ContentP>타 학교 멋사와 연합하여 해커톤을 진행했습니다.</ContentP>
            <PicContainer>
              {ideaImages.map((image, idx) => (
                <StyledImage
                  key={idx}
                  src={image}
                  alt={`Idea Image ${idx + 1}`}
                />
              ))}
            </PicContainer>
          </StudyContainer>
          <StudyContainer>
            <TitleP>중앙해커톤</TitleP>
            <HackP>
              여름방학, 약 한 달간의 프로젝트 과정을 거쳐 무박으로 <br />
              개발을 마무리하는 해커톤입니다.
            </HackP>
            <PicContainer>
              {midImages.map((image, idx) => (
                <StyledImage
                  key={idx}
                  src={image}
                  alt={`Mid Image ${idx + 1}`}
                />
              ))}
            </PicContainer>
          </StudyContainer>
          <StudyContainer style={{ paddingBottom: '60px' }}>
            <TitleP>연합해커톤</TitleP>
            <ContentP>
              타 대학과 자체적으로 연합하여 개최하는 해커톤입니다.{' '}
            </ContentP>
            <PicContainer>
              {yunImages.map((image, idx) => (
                <StyledImage
                  key={idx}
                  src={image}
                  alt={`Mid Image ${idx + 1}`}
                />
              ))}
            </PicContainer>
          </StudyContainer>
        </WholeContainer>
        <Footer />
      </ActivityContainer>
    </>
  );
}

export default Activity;

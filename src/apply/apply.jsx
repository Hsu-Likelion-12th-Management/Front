import Intro from "../Intro/Intro";
import styled from "styled-components";
import Footer from "../footer/footer";
import check from "../images/check.svg";
import num1 from "../images/num1.png";
import num2 from "../images/num2.png";
import num3 from "../images/num3.png";
import num4 from "../images/num4.png";
import chart from "../images/chart.png";

const ApplyButton = styled.button`
  width: 8.75rem;
  height: 3.125rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: var(--Sub-color, #ff7710);
  color: var(--White, #fff);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 3.75rem;
`;

const Title = styled.div`
  color: var(--Sub-color, #ff7710);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 170%;

  @media (max-width: 428px) {
    font-size: 1.1rem;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SubTitle = styled.div`
  color: var(--White, #fff);
  text-align: center;

  /* body/body_smbold_15 */
  font-family: Pretendard;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (max-width: 428px) {
    font-size: 0.8rem;
  }
`;

const DivTitle = styled.div`
  color: var(--Sub-color, #ff7710);

  /* head/head_bold_20 */
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 0.56rem;
`;

const ApplyContainer = styled.div`
  height: 10.25rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: var(--Gray6, #191b24);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.06rem;
`;
const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.75rem;
`;

const Container3 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
`;

const Line = styled.div`
  display: flex;
  gap: 0.5rem;
  color: var(--White, #fff);
  padding-left: 1rem;
  padding-right: 1rem;

  /* detail/detail_medium_14 */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 391px) {
    font-size: 0.84rem;
  }
`;

const Img = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  @media (max-width: 428px) {
    width: 1rem;
    height: 1rem;
  }
`;

const Explain = styled.div`
  color: var(--Gray3, #626682);
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 0.5rem;
`;

const NumLine = styled.div`
  display: flex;
`;

const Num = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
`;

const NumTitle = styled.div`
  color: var(--White, #fff);

  /* body/subtitle/subtitle_smbold_16 */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const NumContainer = styled.div`
  display: flex;
  gap: 1.06rem;
  flex-direction: column;
`;

const DivLine = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

const DivLine1 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Part = styled.div`
  border-radius: 0.5rem;
  background: var(--Gray6, #191b24);
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;

  /* body/body_smbold_15 */
  font-family: Pretendard;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Chart = styled.img`
  margin-top: 0.5rem;
  margin-bottom: 1.06rem;
`;

function Apply() {
  return (
    <>
      <Intro>지원하기</Intro>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "3.75rem",
          marginBottom: "3.75rem",
          flexDirection: "column",
          paddingLeft: "1.25rem",
          paddingRight: "1.25rem",
        }}
      >
        <Container>
          <Title>🦁 멋쟁이사자처럼 한성대학교 12기 🦁</Title>
          <SubTitle>
            한성대학교 멋쟁이 사자처럼에서 아기사자를 모집합니다!
          </SubTitle>
        </Container>

        <Container2>
          <DivTitle>지원 대상</DivTitle>
          <ApplyContainer>
            <Line>
              <Img src={check} alt="체크" />
              IT 창업에 대한 열정이 있는 한성대학교 재학생 및 휴학생
            </Line>
            <Line>
              <Img src={check} />
              서비스 기획, UXUI 디자인, 개발에 도전해보고 싶은 한성대학교 재학생
              및 휴학생
            </Line>
            <Line>
              <Img src={check} />
              배움에 대한 열정, 의지를 가진 한성대학교 재학생 및 휴학생
            </Line>
          </ApplyContainer>
          <Explain>* 졸업생 및 졸업예정자는 지원이 불가능합니다.</Explain>
        </Container2>

        <Container3>
          <DivTitle>모집 일정</DivTitle>
          <NumContainer>
            <NumLine>
              <Num src={num1} />
              <NumTitle>
                1차 서류
                기간&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;2.29(목)
                10:00 ~ 3.10(일) 23:59
              </NumTitle>
            </NumLine>
            <NumLine>
              <Num src={num2} />
              <NumTitle>
                1차 합격
                발표&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;3.11(월)
              </NumTitle>
            </NumLine>
            <NumLine>
              <Num src={num3} />
              <NumTitle>
                2차 면접
                기간&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;3.12(월) ~
                3.15(목)
              </NumTitle>
            </NumLine>
            <NumLine>
              <Num src={num4} />
              <NumTitle>
                최종 합격자
                발표&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;3.18(월)
              </NumTitle>
            </NumLine>
          </NumContainer>
        </Container3>

        <Container3>
          <DivTitle>모집 분야</DivTitle>
          <DivLine1>
            <Part>기획 트랙</Part>
            <Part>디자인 트랙</Part>
          </DivLine1>
          <DivLine>
            <Part>프론트엔드 트랙</Part>
            <Part>백엔드 트랙</Part>
          </DivLine>
        </Container3>

        <Container3>
          <DivTitle>활동 내용</DivTitle>
          <NumLine>
            <Num src={num1} />
            <NumTitle>정규 세션</NumTitle>
          </NumLine>
          <Chart src={chart} />
          <NumContainer>
            <NumLine>
              <Num src={num2} />
              <NumTitle>
                교내 해커톤&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;5.31
                (금)
              </NumTitle>
            </NumLine>
            <NumLine>
              <Num src={num3} />
              <NumTitle>
                중앙 해커톤&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;8.13
                (화) ~ 8.14 (수)
              </NumTitle>
            </NumLine>
            <NumLine>
              <Num src={num4} />
              <NumTitle>
                연합 해커톤&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;11월
                중
              </NumTitle>
            </NumLine>
          </NumContainer>
        </Container3>

        <Container3>
          <DivTitle>활동 기간</DivTitle>
          <NumTitle>2024.03 ~ 2024.12</NumTitle>
        </Container3>

        <Container3>
          <DivTitle>지원 문의</DivTitle>
          <NumTitle>한성대학교 멋쟁이 사자처럼 홈페이지 Q&A</NumTitle>
        </Container3>

        <Container3>
          <DivTitle>지원 방법</DivTitle>
          <NumTitle>링크트리 &#62; 12기 아기사자 지원 구글폼</NumTitle>
        </Container3>
        <Container>
          <ApplyButton
            onClick={() => window.open("https://forms.gle/5FGCuurc6E1km3sMA")}
          >
            지원하기
          </ApplyButton>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Apply;

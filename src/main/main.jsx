import styled from 'styled-components';
import lionImg from '../images/lion.png';
import arrow from '../images/ArrowsClockwise.svg';
import building from '../images/Buildings.svg';
import user from '../images/Users.svg';
import Roadmap from './roadmap';
import Footer from '../footer/footer';
import HansungLion from './hansunglion';
import ActivityMain from './activitymain';
import { motion } from 'framer-motion';

function Main() {

  const logoStyle = {
    width: '93px',
    height: '80px',
    flexShrink: '0'
  }

  const logoContainer={
    marginTop : '22px',
    marginLeft: '20px'
  }

  const Title = styled.div`
  color: #FF7710;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 24px;
  margin-left: 20px;

  @media (max-width: 428px) {
    font-size: 17px;
  }
`;

const Explain = styled.div`
color: #7F85A3;
font-family: Pretendard;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: 170%;
margin-top: 16px;
margin-left: 20px;

@media (max-width: 428px) {
  font-size: 13px;
}
`;

const Arrow = styled.img`
width: 24px;
height: 24px;
flex-shrink: 0;
margin-right: 9px;

@media (max-width: 428px) {
  width: 20px;
  height: 20px;
}
`;


  const StateExplain = styled.div`
  color: #FFF;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 428px) {
    font-size: 12px;
  }
`;

const NowExplain = styled.p`
color: #BFC4D8;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top: 13px;

@media (max-width: 428px) {
  font-size: 12px;
}
`;


  const ExplainContainer = styled.div`
  width: 124px;
  height: 84px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #191B24;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 428px) {
    width: 100px;
    height: 75px;
    background: #191B24;
  }
`;

  const firstLineContainerStyle={
    display:'flex',
    alignItems:'center'
  }

  const StateContainer=styled.div`
    display:flex;
    margin-top : 24px;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-between;
    `;

  const Extra=styled.div`
    color: #484A64;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 8px;
    margin-left: 20px;
    margin-bottom:40px;

    `;

  return <>
    <motion.div
      initial={{ opacity: 0, y: -20 }} // 초기 상태: 투명도 0, y축으로 -20px
      animate={{ opacity: 1, y: 0 }}   // 애니메이션 종료 상태: 투명도 1, y축으로 0px
      transition={{ duration: 0.5 }}   // 애니메이션 지속 시간 0.5초
    >
      <div style={{ marginTop: '22px', marginLeft: '20px' }}>
        <img src={lionImg} alt="Logo" style={{ width: '93px', height: '80px', flexShrink: '0' }} />
      </div>

      <Title>“내 아이디어를 내 손으로 실현하자!”</Title>

      <Explain>
        멋쟁이사자처럼 대학 [LIKELION UNIV]은<br />
        2013년 서울대학교 1기로 시작해 <br />
        현재 총 61개 대학, 약 2,000여명이 활동하고 있는<br />
        전국 최대 규모 IT 연합 창업 동아리입니다.
      </Explain>
    

    <StateContainer>
      <ExplainContainer>
        <div style={firstLineContainerStyle}><Arrow src={arrow}/><StateExplain>운영 상태</StateExplain></div>
        <NowExplain>12기 모집 중</NowExplain>
      </ExplainContainer>
      <ExplainContainer>
        <div style={firstLineContainerStyle}><Arrow src={building}/><StateExplain>대학 수</StateExplain></div>
        <NowExplain>총 61개 대학</NowExplain>
      </ExplainContainer>
      <ExplainContainer>
        <div style={firstLineContainerStyle}><Arrow src={user}/><StateExplain>구성원 수</StateExplain></div>
        <NowExplain>약 2,000여명</NowExplain>
      </ExplainContainer>
    </StateContainer>
    <Extra>&#40;2024년 12기 기준&#41;</Extra>
    </motion.div>

    <div><Roadmap/></div>
    <div><HansungLion/></div>
    <div><ActivityMain/></div>
    <div><Footer/></div>
  </>;
}
export default Main;

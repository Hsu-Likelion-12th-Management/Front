import lionImg from '../images/lion.png';
import arrow from '../images/ArrowsClockwise.svg';
import building from '../images/Buildings.svg';
import user from '../images/Users.svg';
import Roadmap from './roadmap';

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

  const titleStyle={
    color:'#FF7710',
    fontFamily: 'Pretendard',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    marginTop : '24px',
    marginLeft: '20px'
  }

  const explainStyle={
    color: '#7F85A3',
    fontFamily: 'Pretendard',
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '170%',
    marginTop : '16px',
    marginLeft:'20px'
  }

  const arrowStyle={
    width: '24px',
    height: '24px',
    flexShrink : '0',
    marginRight: '9px',
    
  }

  const stateExplainStyle={
    color: '#FFF',
    fontFamily: 'Pretendard',
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  }

  const nowExplainStyle={
    color: '#BFC4D8',
    fontFamily: 'Pretendard',
    fontSize : '14px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
    marginTop : '13px'

  }

  const explainContainerStyle={
    width: '124px',
    height: '84px',
    flexShrink: '0',
    borderRadius: '6px',
    background: '#191B24',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
    
  }

  const firstLineContainerStyle={
    display:'flex',
    alignItems:'center'
  }

  const stateContainerStyle={
    display:'flex',
    marginTop : '24px',
    gap: '8px',
    marginLeft: '20px'
    
  }

  const extraStyle={
    color: '#484A64',
    fontFamily: 'Pretendard',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
    marginTop: '8px',
    marginLeft: '20px'
  }

  return <>
    <div style = {logoContainer}>
      <img src={lionImg} style={logoStyle}/>
    </div>

    <div style={titleStyle}>“내 아이디어를 내 손으로 실현하자!”</div>

    <div style={explainStyle}>
    멋쟁이사자처럼 대학 [LIKELION UNIV]은<br/> 
    2013년 서울대학교 1기로 시작해 <br/>
    현재 총 61개 대학, 약 2,000여명이 활동하고 있는<br/> 
    전국 최대 규모 IT 연합 창업 동아리입니다.<br/>
    </div>

    <div style={stateContainerStyle}>
      <div style={explainContainerStyle}>
        <div style={firstLineContainerStyle}><img src={arrow} style={arrowStyle}/><span style={stateExplainStyle}>운영 상태</span></div>
        <p style={nowExplainStyle}>11기 운영 종료</p>
      </div>
      <div style={explainContainerStyle}>
        <div style={firstLineContainerStyle}><img src={building} style={arrowStyle}/><span style={stateExplainStyle}>대학 수</span></div>
        <p style={nowExplainStyle}>총 61개 대학</p>
      </div>
      <div style={explainContainerStyle}>
        <div style={firstLineContainerStyle}><img src={user} style={arrowStyle}/><span style={stateExplainStyle}>구성원 수</span></div>
        <p style={nowExplainStyle}>약 2,000여명</p>
      </div>
    </div>

    <div style={extraStyle}>&#40;2023년 11기 기준&#41;</div>

    <div><Roadmap/></div>
  </>;
}
export default Main;

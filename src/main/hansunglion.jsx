import logo from '../images/hslikelionlogo.svg';
import group from '../images/groupimg.jpg';

function HansungLion(){

    const containerStyle={
        height: '788px',
        flexShrink: '0',
        background:'#FF7710'
    }

    const imgStyle={
        width: '204px',
        height: '35px',
        flexShrink: '0',
        marginTop:'92px',
        marginLeft:'111px'
    }

    const titleStyle={
        color:'#FFF',
        marginLeft:'20px',
        fontFamily: 'Pretendard',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        marginTop:'92px',
        
    }

    const groupImgStyle={
        width: '388px',
        height: '219px',
        flexShrink: '0',
        borderRadius: '8px',
        background: 'lightgray 50% / cover no-repeat'

    }

    const imgDivStyle={
        marginLeft: '20px',
        marginTop:'16px'
    }

    const subTitleStyle={
        color: '#FFF',
        fontFamily: 'Pretendard',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        marginTop: '40px',
        marginLeft: '20px'
    }

    const introContainer={
        borderRadius: '6px',
        backgroundColor: 'rgba(15, 16, 21, 0.2)',
        width: '124px',
        height: '84px',
        flexShrink: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
        gap:'13px'
    }

    const introStyle={
        display:'flex',
        marginLeft:'20px',
        gap: '15px',
        marginTop: '16px'
    }

    const lineStyle={
        color: '#FFF',
        fontFamily: 'Pretendard',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',

    }

    const lineStyle2={
        color: '#FFF',
        fontFamily: 'Pretendard',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal'
    }

    const explainStyle={
        marginLeft: '20px',
        marginTop: '24px',
        color: '#FFF',
        fontFamily: 'Pretendard',
        fontSize: '15px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '170%' 
    }

    return(
    <>
    <div style={containerStyle}>
        <img src={logo} style={imgStyle}/>
        <div style={titleStyle}>한성대학교 멋쟁이사자처럼을 소개합니다!</div>
        <div style={imgDivStyle}><img src={group} style={groupImgStyle}/></div>
        <div style={subTitleStyle}>한성대 멋쟁이사자처럼의 흔적</div>
        <div style={introStyle}>
            <div style={introContainer}><div style={{...lineStyle}}>2022년</div><div style={{...lineStyle2}}>10기 총 42명</div></div>
            <div style={introContainer}><div style={{...lineStyle}}>2023년</div><div style={{...lineStyle2}}>11기 총 36명</div></div>
            <div style={introContainer}><div style={{...lineStyle, color:'#002975'}}>2024년</div><div style={{...lineStyle, color:'#002975'}}>12기 모집 예정</div></div>
        </div>

        <div style={explainStyle}>
        한성대학교 멋쟁이사자처럼은 10기를 시작으로<br/>
        전공에 상관없이 본인의 아이디어를 실현하고 싶은 학생들을<br/>
        모집하여 활동하였습니다.
        </div>
    </div>
    </>
    );
}

export default HansungLion;
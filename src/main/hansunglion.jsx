import logo from '../images/hslikelionlogo.svg';
import group from '../images/groupimg.jpg';
import styled from 'styled-components';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function HansungLion(){

    const Container=styled.div`
    height: 788px;
    flex-shrink: 0;
    background:#FF7710;
    display: flex;
    flex-direction:column;

    `;

    const ImgStyle=styled.img`

        height: 35px;
        flex-shrink: 0;
        margin: 0 auto;
        margin-top:92px;
        `;

    const Title=styled.div`
        color:#FFF;
        margin-left:20px;
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-top:92px;
        @media (max-width: 428px) {
            font-size: 16px;
        }
        `;

    const GroupImg=styled.img`
        height: 219px;
        width: 100%;
        flex-shrink: 0;
        border-radius: 8px;
        @media (max-width: 428px) {
            height: 200px;
        }
        `

    const imgDivStyle={
        paddingLeft: '20px',
        paddingRight: '20px',
        marginTop:'16px',

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

    const Intro=styled.div`
        border-radius: 6px;
        background-color: rgba(15, 16, 21, 0.2);
        width: 124px;
        height: 84px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction:column;
        gap:13px;
        @media (max-width: 428px) {
            width: 100px;
            height: 75px;
        }
        `;

    const IntroStyle=styled.div`
        display:flex;
        padding-left:20px;
        padding-right: 20px;
        justify-content: space-between;
        margin-top: 16px;
        `;
    const lineStyle={
        color: '#FFF',
        fontFamily: 'Pretendard',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',

    }

    const Line2=styled.div`
    color: #FFF;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    @media (max-width: 428px) {
        font-size: 12px;
    }
    `;

    const Line22=styled.div`
    color: #002975;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    @media (max-width: 428px) {
        font-size: 12px;
    }
    `;

    const Explain=styled.div`
        margin-left: 20px;
        margin-top: 24px;
        color: #FFF;
        font-family: Pretendard;
        font-size: 15px;
        font-style:normal;
        font-weight: 500;
        line-height: 170%; 
        @media (max-width: 428px) {
            font-size: 12px;
        }
        `;

        const controls = useAnimation();
        const [ref, inView] = useInView();
    
        React.useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            controls.start({ opacity: 0, y: 50 });
        }
        }, [controls, inView]);

    return(
    <>
    <Container>
        <ImgStyle src={logo}/>
        <Title>한성대학교 멋쟁이사자처럼을 소개합니다!</Title>
        <div style={imgDivStyle}><GroupImg src={group}/></div>
        <div style={subTitleStyle}>한성대 멋쟁이사자처럼의 흔적</div>
        <IntroStyle>
            <Intro><div style={{...lineStyle}}>2022년</div><Line2>10기 총 42명</Line2></Intro>
            <Intro><div style={{...lineStyle}}>2023년</div><Line2>11기 총 36명</Line2></Intro>
            <Intro><div style={{...lineStyle, color:'#002975'}}>2024년</div><Line22>12기 모집 예정</Line22></Intro>
        </IntroStyle>

        <Explain>
        한성대학교 멋쟁이사자처럼은 10기를 시작으로<br/>
        전공에 상관없이 본인의 아이디어를 실현하고 싶은 학생들을<br/>
        모집하여 활동하였습니다.
        </Explain>

    </Container>
    </>
    );
}

export default HansungLion;
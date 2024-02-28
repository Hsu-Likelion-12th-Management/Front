import styled from 'styled-components';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo4.png';
import logo5 from '../images/logo5.png';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Roadmap(){

    const Container=styled.div`
        background: #191B24;
        height: 300px;
        flex-shrink: 0;
        padding-top: 40px;
        @media (max-width: 428px) {
            height:250px;
            padding-top: 30px;
        }
        `;

    const titleStyle={
        marginLeft: '20px',
        color: '#FFF',
        fontFamily: 'Pretendard',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal'
    }

    const logoStyle={
        width: '52px',
        height: '52px'
    }

    const logoContainerStyle={
        display:'flex',
        gap: '17px',
        justifyContent:'center',
        marginTop:'14.1px'
    }

    const LikeLion=styled.div`
        color: #7F85A3;
        font-family: Pretendard;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 170%;
        margin-top:24px;
        margin-left: 20px;
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
        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        >
            <Container>
                <div style={titleStyle}>멋쟁이 사자처럼의 흔적</div>
                <div style={logoContainerStyle}>
                <img src={logo1} style={logoStyle}/>
                <img src={logo2} style={logoStyle}/>
                <img src={logo3} style={logoStyle}/>
                <img src={logo4} style={logoStyle}/>
                <img src={logo5} style={logoStyle}/>
                </div>
                <LikeLion>
                    비프로일레븐, 자소설닷컴, 탈잉, 코로나 알리미, 메르스맵 등 <br/>
                    다양한 분야 서비스 창업의 발판이 되었던 국내 유일무이 <br/>
                    대학생 연합이기도 합니다!
                </LikeLion>
            </Container>
            </motion.div>
        </>
    );
}

export default Roadmap;
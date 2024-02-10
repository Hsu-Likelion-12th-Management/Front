import Footer from "../footer/footer";
import logo from '../images/Group 972.svg'
import project from '../images/prj1.png'
import left from '../images/leftArrow.svg'
import right from '../images/rightArrow.svg'


function EleventhProject(){

    const logoContainerStyle={
        height: '80px',
        flexShrink: '0',
        background: 'linear-gradient(270deg, #191B24 86%, #FF7710 100%)',
        display:'flex',
        paddingLeft: '20px'
    }

    const titleStyle={
        color: 'var(--White, #FFF)',
        fontFamily: 'Pretendard',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        marginTop:'26px',
        marginLeft:'11px'
    }

    const imgStyle={
        width: '332px',
        height: '188px',
        flexShrink: '0',
        borderRadius:'8px',
        marginTop:'63px',
        marginLeft:'43px'
    }

    const pageStyle={
        display: 'flex',
        gap: '13px',
        alignItems:'center',
        marginTop:'18px',
        marginLeft:'330px'
    }

    const pageFontStyle={
        color: '#7F85A3',
        fontFamily: 'Pretendard',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 'normal'
    }

    const arrowStyle={
        width: '6px',
        height: '12px',
        flexShrink: '0'
    }

    const projectTitleStyle={
        color: '#FFF',
        fontFamily: 'Pretendard',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        marginTop:'24px',
        marginLeft:'48px',
    }

    const subtitleStyle={
        color: '#BFC4D8',
        fontFamily: 'Pretendard',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        marginLeft:'48px',
        marginTop:'8px'
    }

    const explainStyle={
        color: '#7F85A3',
        fontFamily: 'Pretendard',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '170%',
        marginLeft:'48px',
        marginTop:'8px'
    }

    const exStyle={
        color: '#7F85A3',
        fontFamily: 'Pretendard',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '170%',
        marginLeft:'48px',
        marginTop:'12px'
    }

    const interviewStyle={
        width: '332px',
        height: '132px',
        flexShrink: '0',
        borderRadius: '8px',
        background: '#2A2A3A'
    }

    const interviewContainerStyle={
        display:'flex',
        flexDirection:'column',
        marginTop:'56px',
        marginLeft:'48px',
        gap:'8px',
        marginBottom:'100px'
    }

    return(
        <>
        
        <div style={logoContainerStyle}>
            <img src={logo}/>
            <div style={titleStyle}>11기 프로젝트</div>
        </div>

        <div><img src={project} style={imgStyle}/></div>
        
        <div style={pageStyle}>
            <img src={left} style={arrowStyle}/>
            <div style={pageFontStyle}>1</div>
            <img src={right} style={arrowStyle}/>
        </div>

        <div style={projectTitleStyle}>인생선배</div>
        <div style={subtitleStyle}>매일 하나씩 얻어가는 조언</div>
        <div style={explainStyle}>
            누구나 인생선배가 될 수 있다.<br/>
            동시에 인생후배일 때 당당히 선배들한테 인생조언을 구하자<br/>
            조언을 구하고 성장하며 스스로가<br/>
            인생선배가 되기까지 여정을 기록으로 남길 수 있다.
        </div>
        <div style={exStyle}>참가자 : 송효재, 장민정, 이서연, 이수아, 이현승, 최용석</div>
        <div style={exStyle}>사용 툴 : Django, Figma, html, css, JS</div>
        <div style={exStyle}>웹 링크 : 미운영</div>

        <div style={interviewContainerStyle}>
        <div style={interviewStyle}></div>
        <div style={interviewStyle}></div>
        <div style={interviewStyle}></div>
        <div style={interviewStyle}></div>
        <div style={interviewStyle}></div>
        <div style={interviewStyle}></div>
        </div>

        <Footer/>
        </>
    );
}

export default EleventhProject;
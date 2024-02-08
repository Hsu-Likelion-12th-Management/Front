import Footer from "../footer/footer";
import logo from '../images/Group 972.svg'


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

    return(
        <>
        
        <div style={logoContainerStyle}>
            <img src={logo}/>
            <div style={titleStyle}>11기 프로젝트</div>
        </div>

        <Footer/>
        </>
    );
}

export default EleventhProject;
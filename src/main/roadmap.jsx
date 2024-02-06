import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo4.png';
import logo5 from '../images/logo5.png';

function Roadmap(){

    const containerStyle={
        background: '#191B24',
        width: '428px',
        height: '300px',
        flexShrink: '0',
        paddingTop:'40px'
    }

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

    const likelionStyle={
        color: '#7F85A3',
        fontFamily: 'Pretendard',
        fontSize: '15px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '170%',
        marginTop:'24px',
        marginLeft: '20px'
    }

    return(
        <>
            <div style={containerStyle}>
                <div style={titleStyle}>멋쟁이 사자처럼의 흔적</div>
                <div style={logoContainerStyle}>
                <img src={logo1} style={logoStyle}/>
                <img src={logo2} style={logoStyle}/>
                <img src={logo3} style={logoStyle}/>
                <img src={logo4} style={logoStyle}/>
                <img src={logo5} style={logoStyle}/>
                </div>
                <div style={likelionStyle}>비프로일레븐, 자소설닷컴, 탈잉, 코로나 알리미, 메르스맵 등 <br/>
                    다양한 분야 서비스 창업의 발판이 되었던 국내 유일무이 <br/>
                    대학생 연합이기도 합니다!</div>
            </div>
        </>
    );
}

export default Roadmap;
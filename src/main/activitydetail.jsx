import styled from "styled-components"

function ActivityDetail(props){


    const Container=styled.div`
    width: 388px;
    height: 120px;
    flex-shrink: 0;
    border-radius: 12px;
    background: #FFF;
    margin-left:20px;
    margin-bottom: 12px;
    @media (max-width: 428px) {
        width: 320px;
        height: 100px;
    }
    `;

    const Img = styled.img`
    width: 108px;
    height: 100px;
    flex-shrink: 0;
    border-radius: 10px;
    margin-top: 8px;
    position: absolute;
    right: 6px;

    @media (max-width: 428px){
        right: 5px;
        margin-top: 5px;
        width: 90px;
        height: 90px;
    }
`;


    const titleStyle={
        color:'#0F1015',
        fontFamily: 'Pretendard',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        marginTop: '18px',
        marginBottom:'8px',
        
    }

    const Explain=styled.div`
    color: #484A64;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 170%;

    @media (max-width: 428px){
        font-size: 10px;
    }
    `;

    const contentContainerStyle={
        display:'flex',
        flexDirection:'row',
        position:'relative'

    }

    const descStyle={
        marginLeft:'15px'
    }


    return(
        <>
            <Container>
                <div style={contentContainerStyle}>
                    <div style={descStyle}>
                        <div style={titleStyle}>{props.title}</div>
                        <Explain>{props.description}</Explain>
                        <Explain>{props.description2}</Explain>
                    </div>
                    <Img src={props.image} alt="activity"/>
                </div>
            </Container>
        </>
    );
}

export default ActivityDetail;
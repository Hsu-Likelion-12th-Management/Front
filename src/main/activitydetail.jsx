function ActivityDetail(props){


    const containerStyle={
        width: '388px',
        height: '120px',
        flexShrink: '0',
        borderRadius: '12px',
        background: '#FFF',
        marginLeft:'20px',
        marginBottom: '12px',
        
    }

    const imgStyle={
        width:'108px',
        height: '100px',
        flexShrink:'0',
        borderRadius:'10px',
        marginTop: '8px',
        position: 'absolute',
        right:'6px'
    
    }

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

    const explainStyle={
        color: '#484A64',
        fontFamily: 'Pretendard',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '170%'
    }

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
            <div style={containerStyle}>
                <div style={contentContainerStyle}>
                    <div style={descStyle}>
                        <div style={titleStyle}>{props.title}</div>
                        <div style={explainStyle}>{props.description}</div>
                        <div style={explainStyle}>{props.description2}</div>
                    </div>
                    <img src={props.image} alt="activity" style={imgStyle}/>
                </div>
            </div>
        </>
    );
}

export default ActivityDetail;
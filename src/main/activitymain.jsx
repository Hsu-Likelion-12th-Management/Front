import ActivityDetail from "./activitydetail";

function ActivityMain(){

    const titleStyle={
        color: '#FFF',
        fontFamily: 'Pretendard',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        marginTop: '40px',
        marginLeft: '20px',
        marginBottom: '16px'
    }

    const comContainerStyle={
        marginBottom: '80px'
    }

    return(
        <>
        <div>
            <div style={titleStyle}>어떤 활동을 하나요?</div>
            <div style={comContainerStyle}>
            <ActivityDetail/>
            <ActivityDetail/>
            <ActivityDetail/>
            <ActivityDetail/>
            </div>
        </div>
        </>
    );
}

export default ActivityMain;
import ActivityDetail from "./activitydetail";
import detail1 from '../images/detail1.jpg';
import detail2 from '../images/detail2.jpg';
import detail3 from '../images/detail3.jpg';
import detail4 from '../images/detail4.png';

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
        marginBottom: '80px',
        paddingLeft: '20px',
        paddingRight:'20px'
    }

    const activities = [
        {
            image: detail1,
            title: "팀 별 스터디",
            description: "기획, 디자인, 프론트엔드, 백엔드 4개의",
            description2: " 팀으로 주 1회 세션을 진행합니다."
        },
        {
            image: detail2,
            title: "아이디어톤",
            description: "아이디어를 발제하고, 디자인하는",
            description2: "과정을 거쳐 타 대학과 경쟁합니다."
        },
        {
            image: detail3,
            title: "무박해커톤",
            description: "여름방학, 약 한 달간의 프로젝트 과정을 거쳐 ",
            description2: "무박으로 개발을 마무리하는 해커톤입니다."
        },
        {
            image: detail4,
            title: "연합 해커톤",
            description: "타 대학 멋사들과 팀빌딩이 되어",
            description2: "프로젝트할 수 있는 해커톤입니다."
        }
        ];

    return(
        <>
        <div>
            <div style={titleStyle}>어떤 활동을 하나요?</div>
            <div style={comContainerStyle}>
            {activities.map((activity, index) => (
            <ActivityDetail key={index} image={activity.image} title={activity.title} description={activity.description} description2={activity.description2} />
            ))}
            </div>
        </div>
        </>
    );
}

export default ActivityMain;
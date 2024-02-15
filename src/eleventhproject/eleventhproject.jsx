import styled from "styled-components";
import Footer from "../footer/footer";
import logo from '../images/Group 972.svg'
import prj1 from '../images/prj1.png'
import prj2 from '../images/prg2.png'
import left from '../images/leftArrow.svg'
import right from '../images/rightArrow.svg'
import prj3 from '../images/prj3.png'
import prj4 from '../images/prj4.PNG'
import prj5 from '../images/prj5.PNG'
import prj6 from '../images/prj6.PNG'
import React, {useState} from 'react';

function EleventhProject(){

    const [currentIndex, setCurrentIndex] = useState(0);
    var page=currentIndex+1;

    const projectData = [
        {
            image: prj1,
            title: "인생선배",
            subtitle: "매일 하나씩 얻어가는 조언",
            explanation: (
                <>
                    누구나 인생선배가 될 수 있다.<br/>
                    동시에 인생후배일 때 당당히 선배들한테 인생조언을 구하자.<br/>
                    조언을 구하고 성장하며 스스로가<br/>
                    인생선배가 되기까지 여정을 기록으로 남길 수 있다.
                </>
            ),
            participants: "송효재, 장민정, 이서연, 이수아, 이현승, 최용석",
            tools: "Django, Figma, html, css, JS",
            webLink: "미운영",
            interviewName1:"송효재 기획자",
            interview1:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName2:"장민정 디자인",
            interview2:(
                <>
                협업으로 진행하는 첫 프로젝트로서 어려웠던 부분도 있었으나 <br/>
                팀원들과 함께 해결해 나가며 잘 마무리 지을 수 있었습니다. <br/>
                이번 활동을 통해 웹서비스에 대해 더욱 흥미를 갖게되었습니다.<br/>
                </>
            ),
            interviewName3:"이현승 백엔드",
            interview3:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName4:"최용석 백엔드",
            interview4:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName5:"이서연 프론트",
            interview5:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
        },


        {
            image: prj2,
            title: "소확행",
            subtitle: "매일 하나씩 얻어가는 조언",
            explanation: (
                <>
                    누구나 인생선배가 될 수 있다.<br/>
                    동시에 인생후배일 때 당당히 선배들한테 인생조언을 구하자.<br/>
                    조언을 구하고 성장하며 스스로가<br/>
                    인생선배가 되기까지 여정을 기록으로 남길 수 있다.
                </>
            ),
            participants: "송효재, 장민정, 이서연, 이수아, 이현승, 최용석",
            tools: "Django, Figma, html, css, JS",
            webLink: "미운영",
            interviewName1:"송효재 기획자",
            interview1:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName2:"장민정 디자인",
            interview2:(
                <>
                협업으로 진행하는 첫 프로젝트로서 어려웠던 부분도 있었으나 <br/>
                팀원들과 함께 해결해 나가며 잘 마무리 지을 수 있었습니다. <br/>
                이번 활동을 통해 웹서비스에 대해 더욱 흥미를 갖게되었습니다.<br/>
                </>
            ),
            interviewName3:"이현승 백엔드",
            interview3:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName4:"최용석 백엔드",
            interview4:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName5:"이서연 프론트",
            interview5:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName6:"이세은 프론트",
            interview6:(
                <>
                우와 <br/>
                멋사ㅣ <br/>
                최고다.<br/>
                </>
            ),
        },

        {
            image: prj3,
            title: "모아",
            subtitle: "매일 하나씩 얻어가는 조언",
            explanation: (
                <>
                    누구나 인생선배가 될 수 있다.<br/>
                    동시에 인생후배일 때 당당히 선배들한테 인생조언을 구하자.<br/>
                    조언을 구하고 성장하며 스스로가<br/>
                    인생선배가 되기까지 여정을 기록으로 남길 수 있다.
                </>
            ),
            participants: "송효재, 장민정, 이서연, 이수아, 이현승, 최용석",
            tools: "Django, Figma, html, css, JS",
            webLink: "미운영",
            interviewName1:"송효재 기획자",
            interview1:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName2:"장민정 디자인",
            interview2:(
                <>
                협업으로 진행하는 첫 프로젝트로서 어려웠던 부분도 있었으나 <br/>
                팀원들과 함께 해결해 나가며 잘 마무리 지을 수 있었습니다. <br/>
                이번 활동을 통해 웹서비스에 대해 더욱 흥미를 갖게되었습니다.<br/>
                </>
            ),
            interviewName3:"이현승 백엔드",
            interview3:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName4:"최용석 백엔드",
            interview4:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName5:"이서연 프론트",
            interview5:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName6:"이세은 프론트",
            interview6:(
                <>
                우와 <br/>
                멋사ㅣ <br/>
                최고다.<br/>
                </>
            ),
        },


        {
            image: prj4,
            title: "LISA MATE",
            subtitle: "매일 하나씩 얻어가는 조언",
            explanation: (
                <>
                    누구나 인생선배가 될 수 있다.<br/>
                    동시에 인생후배일 때 당당히 선배들한테 인생조언을 구하자.<br/>
                    조언을 구하고 성장하며 스스로가<br/>
                    인생선배가 되기까지 여정을 기록으로 남길 수 있다.
                </>
            ),
            participants: "송효재, 장민정, 이서연, 이수아, 이현승, 최용석",
            tools: "Django, Figma, html, css, JS",
            webLink: "미운영",
            interviewName1:"송효재 기획자",
            interview1:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName2:"장민정 디자인",
            interview2:(
                <>
                협업으로 진행하는 첫 프로젝트로서 어려웠던 부분도 있었으나 <br/>
                팀원들과 함께 해결해 나가며 잘 마무리 지을 수 있었습니다. <br/>
                이번 활동을 통해 웹서비스에 대해 더욱 흥미를 갖게되었습니다.<br/>
                </>
            ),
            interviewName3:"이현승 백엔드",
            interview3:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName4:"최용석 백엔드",
            interview4:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName5:"이서연 프론트",
            interview5:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName6:"이세은 프론트",
            interview6:(
                <>
                우와 <br/>
                멋사ㅣ <br/>
                최고다.<br/>
                </>
            ),
        },

        {
            image: prj5,
            title: "채기랑",
            subtitle: "매일 하나씩 얻어가는 조언",
            explanation: (
                <>
                    누구나 인생선배가 될 수 있다.<br/>
                    동시에 인생후배일 때 당당히 선배들한테 인생조언을 구하자.<br/>
                    조언을 구하고 성장하며 스스로가<br/>
                    인생선배가 되기까지 여정을 기록으로 남길 수 있다.
                </>
            ),
            participants: "송효재, 장민정, 이서연, 이수아, 이현승, 최용석",
            tools: "Django, Figma, html, css, JS",
            webLink: "미운영",
            interviewName1:"송효재 기획자",
            interview1:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName2:"장민정 디자인",
            interview2:(
                <>
                협업으로 진행하는 첫 프로젝트로서 어려웠던 부분도 있었으나 <br/>
                팀원들과 함께 해결해 나가며 잘 마무리 지을 수 있었습니다. <br/>
                이번 활동을 통해 웹서비스에 대해 더욱 흥미를 갖게되었습니다.<br/>
                </>
            ),
            interviewName3:"이현승 백엔드",
            interview3:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName4:"최용석 백엔드",
            interview4:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName5:"이서연 프론트",
            interview5:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName6:"이세은 프론트",
            interview6:(
                <>
                우와 <br/>
                멋사ㅣ <br/>
                최고다.<br/>
                </>
            ),
        },

        {
            image: prj6,
            title: "곰곰이",
            subtitle: "매일 하나씩 얻어가는 조언",
            explanation: (
                <>
                    누구나 인생선배가 될 수 있다.<br/>
                    동시에 인생후배일 때 당당히 선배들한테 인생조언을 구하자.<br/>
                    조언을 구하고 성장하며 스스로가<br/>
                    인생선배가 되기까지 여정을 기록으로 남길 수 있다.
                </>
            ),
            participants: "송효재, 장민정, 이서연, 이수아, 이현승, 최용석",
            tools: "Django, Figma, html, css, JS",
            webLink: "미운영",
            interviewName1:"송효재 기획자",
            interview1:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName2:"장민정 디자인",
            interview2:(
                <>
                협업으로 진행하는 첫 프로젝트로서 어려웠던 부분도 있었으나 <br/>
                팀원들과 함께 해결해 나가며 잘 마무리 지을 수 있었습니다. <br/>
                이번 활동을 통해 웹서비스에 대해 더욱 흥미를 갖게되었습니다.<br/>
                </>
            ),
            interviewName3:"이현승 백엔드",
            interview3:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName4:"최용석 백엔드",
            interview4:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName5:"이서연 프론트",
            interview5:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 <br/>
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 <br/>
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.<br/>
                </>
            ),
            interviewName6:"이세은 프론트",
            interview6:(
                <>
                우와 <br/>
                멋사ㅣ <br/>
                최고다.<br/>
                </>
            ),
        },
    ];

    

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

    const Img=styled.img`
    width: 332px;
    height: 188px;
    flex-shrink: 0;
    border-radius:8px;
    margin-top:63px;
    margin-left:43px;
    @media (max-width: 428px) {
        margin-left:30px;
        width: 300px;
        height: 180px;
    }
    `;

    const Page=styled.div`
    display: flex;
    gap: 13px;
    align-items:center;
    margin-top:18px;
    margin-left:330px;
    @media (max-width: 428px) {
        margin-left: 280px;
        gap: 10px;
    }
    `;

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
        flexShrink: '0',
        cursor: 'pointer'
    }

    const ProjectTitle=styled.div`
        color: #FFF;
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-top:24px;
        margin-left:48px;
        @media (max-width: 428px) {
            margin-left: 30px;
        }
    `;
    const Subtitle=styled.div`
    color: #BFC4D8;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left:48px;
    margin-top:8px;
    @media (max-width: 428px) {
        margin-left: 30px;
    }
    `;

    const Explain=styled.div`
    color: #7F85A3;
        font-family: Pretendard;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 170%;
        margin-left:48px;
        margin-top:8px;
        @media (max-width: 428px) {
            margin-left: 30px;
            font-size: 11px;
        }
    `;

    const Extra=styled.div`
    color: #7F85A3;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 170%;
    margin-left:48px;
    margin-top:12px;
    @media (max-width: 428px) {
        margin-left: 30px;
        font-size: 11px;
    }
    `;

    const InterviewContainer=styled.div`
    width: 332px;
    height: 132px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #2A2A3A;
    @media (max-width: 428px) {
        width:300px;
        height:95px;
    }
    `;

    const Interview=styled.div`
    display:flex;
    flex-direction:column;
    margin-top:56px;
    margin-left:48px;
    gap:8px;
    margin-bottom:100px;
    @media (max-width: 428px) {
        margin-left: 30px;
    }
    `;

    const InterviewName=styled.div`
    color: #BFC4D8;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    marginB-bottom:8px;
    margin-top:16px;
    margin-left:15px;
    @media (max-width: 428px) {
        margin-left: 10px;
        margin-top: 10px;
        font-size: 10px;
        margin-bottom: 5px;
    }
    `;

    const InterviewContent=styled.div`
    color: #7F85A3;
    font-family: Pretendard;
    font-size: 10.5px;
    font-style: normal;
    font-weight: 400;
    line-height: 170%;
    margin-left:15px;
    @media (max-width: 428px) {
        margin-left: 10px;
        font-size: 9px;
    }
    `;

    const handleNext = () => {
        if (currentIndex < 5) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const interviewsToShow = currentIndex === 0 ? 5 : 6;

    const interviews = [];
    for (let i = 1; i <= interviewsToShow; i++) {
    interviews.push(
        <InterviewContainer key={i}>
            <InterviewName>{projectData[currentIndex][`interviewName${i}`]}</InterviewName>
            <InterviewContent>{projectData[currentIndex][`interview${i}`]}</InterviewContent>
        </InterviewContainer>
        );
    }

    return(
        <>
        
        <div style={logoContainerStyle}>
            <img src={logo}/>
            <div style={titleStyle}>11기 프로젝트</div>
        </div>

        <div><Img src={projectData[currentIndex].image} /></div>
        
        <Page>
            <img src={left} style={arrowStyle} onClick={handlePrev}/>
            <div style={pageFontStyle}>{page}</div>
            <img src={right} style={arrowStyle} onClick={handleNext}/>
        </Page>

        <ProjectTitle>{projectData[currentIndex].title}</ProjectTitle>
        <Subtitle>{projectData[currentIndex].subtitle}</Subtitle>
        <Explain>
        {projectData[currentIndex].explanation}
        </Explain>
        <Extra>참가자 : {projectData[currentIndex].participants}</Extra>
        <Extra>사용 툴 : {projectData[currentIndex].tools}</Extra>
        <Extra>웹 링크 : {projectData[currentIndex].webLink}</Extra>

        <Interview>
        {interviews}
        </Interview>

        <Footer/>
        </>
    );
}

export default EleventhProject;
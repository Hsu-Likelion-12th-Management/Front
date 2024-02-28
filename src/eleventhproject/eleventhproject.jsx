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
import { motion } from 'framer-motion';


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
            participants: "송효재, 장민정, 이현승, 최용석, 이서연",
            tools: "Django, Figma, Html, Css, JS",
            webLink: "미운영",
            interviewName1:"송효재 기획자",
            interview1:(
                <>
                기획자 업무가 처음이라 다른 트랙과의 협업에서 어려움을 겪었습니다.
                하지만 그 과정에서 '소통'과 '협업 툴 사용'의 중요성을 배울 수 있었습니다!
                힘들었지만 그만큼 성장할 수 있었던 프로젝트였습니다
                </>
            ),
            interviewName2:"장민정 디자인",
            interview2:(
                <>
                협업으로 진행하는 첫 프로젝트로서 어려웠던 부분도 있었으나 
                팀원들과 함께 해결해 나가며 잘 마무리 지을 수 있었습니다. 
                이번 활동을 통해 웹서비스에 대해 더욱 흥미를 갖게되었습니다.
                </>
            ),
            interviewName3:"이현승 백엔드",
            interview3:(
                <>
                멋쟁이사자처럼 11기 첫 프로젝트이기에 서비스 구현에 힘 썼습니다.
                인생선배를 개발하며 처음 마주친 여러가지 어려움들을 극복하며 성장하였습니다.
                좋은 아이디어를 기반으로 프로젝트를 진행하여 좋은 추억을 쌓을 수 있었습니다.
                </>
            ),
            interviewName4:"최용석 백엔드",
            interview4:(
                <>
                멋쟁이 사자차럼 11기 아기사자로서 첫 프로젝트로 우여곡절이 
                많았지만 협업이란 무엇인지 알게되었고 흥미로운 주제와 기획을 
                통해 무엇인가 만들어낸다는게 너무 재밌었고 유익했습니다.
                </>
            ),
            interviewName5:"이서연 프론트",
            interview5:(
                <>
                처음부터 끝까지 팀원 모두 구현에 집중해 밤샘 작업 등 
                좋은 팀원들과 추억을 가질 수 있었습니다. 
                실력 또한 많이 늘어 좋은 경험이었습니다!
                </>
            ),
        },


        {
            image: prj2,
            title: "소확행",
            subtitle: (
                <>
                    소소하지만 확실한 여행의 행복
                </>
            ),
            explanation: (
                <>
                    과잉 관광, 즉 관광지의 수용 한계를 초과하여 지나치게 많은 <br/>
                    여행객들이 들어오며 발생하는 문제인 오버투어리즘을 막고, <br/>
                    소도시만의 소소한 행복을 알려주기 위해 탄생한 서비스, <br/>
                    소도시 여행 큐레이션 서비스 소확행
                </>
            ),
            participants: "김지은, 이자민, 김태하, 박태범, 이나경, 이세은",
            tools: "Django, Figma, Html, Css, JS",
            webLink: "미운영",
            interviewName1:"김지은 기획자",
            interview1:(
                <>
                아기사자로 임한 첫 프로젝트여서 아쉬운 점도 많고 부족한 점도 많았지만 
                초기 기획에 따라 디자인과 개발의 완성도도 결정된다는 점을 느껴 기획 실력을 
                더 많이 길러야겠다고 생각한 프로젝트였습니다!
                </>
            ),
            interviewName2:"이자민 디자인",
            interview2:(
                <>
                Ux/ui 디자인을 취미로만 해오다가 처음으로 프로젝트의 시작부터 
                끝까지 모든 플로우를 디자인 하게된 첫 프로젝트였습니다! 
                개발자 친구들과 지속적으로 소통하면서 효율적인 소통 방식을 배울 수 있었고 
                하나의 프로젝트를 다같이 만들어내는 소중한 경험이었습니다! 
                정말 대확행이었고 잊을 수 없는 제 첫 디자인 프로젝트 입니다!❤
                </>
            ),
            interviewName3:"김태하 백엔드",
            interview3:(
                <>
                멋쟁이 사자처럼 11기에서의 첫 프로젝트인 만큼 걱정이 많았지만 
                배웠던 내용들을 활용해 볼 수 있어서 좋았고 팀원들과의 협업을 통해 
                서로 배우고 도움을 주며 결과물을 만들어냈기에 더욱 뿌듯하고 성취감을 느낄 수 있었습니다.
                </>
            ),
            interviewName4:"박태범 백엔드",
            interview4:(
                <>
                항상 혼자서만 프로젝트를 진행하다가 처음으로 여러 사람들과 협업을 
                하게 됐는데 좋은 사람들과 함께한 덕분에 행복했습니다. 
                처음으로 완성도 있는 프로젝트를 진행해서 많은 도움이 되었고 
                기억에 남는 프로젝트 였습니다.
                </>
            ),
            interviewName5:"이나경 프론트",
            interview5:(
                <>
                처음으로 웹 프로젝트를 백엔드, 기획, 디자인 분들과 함께 할 수 있어서 뜻깊었습니다. 
                모르는 것도 많았지만 배운 것도 많았던 프로젝트 였습니다.
                </>
            ),
            interviewName6:"이세은 프론트",
            interview6:(
                <>
                처음으로 해보는 협업 프로젝트이기도 했고, 
                처음으로 연습해보는 해커톤 프로젝트였습니다! 
                정말 많은 걸 배우고, 얻어간 것 같습니다! 
                너무 열심히 하는 좋은 팀원들과 첫 협업을 통해 제 성장의 발판이 된 프로젝트입니다! 
                첫 프로젝트인지라 정말 애정있게 재밌게 했던 것 같습니다! 소확행팀 최고❤
                </>
            ),
        },

        {
            image: prj3,
            title: "모아",
            subtitle: "오늘의 할 일을 내일의 기록으로",
            explanation: (
                <>
                    ‘모아’는 캘린더 및 하루 일과 리스트 기능과 <br/>
                    프라이빗한 매력의 블로그 형식을 빌려온 사진 일기 등을 <br/>
                    모두 이용할 수 있는 어플입니다!
                </>
            ),
            participants: "박수연, 박혜연, 오유진, 이지연, 박제준, 임승빈",
            tools: "Django, Figma, Html, Css, JS",
            webLink: "미운영",
            interviewName1:"박수연 기획자",
            interview1:(
                <>
                모아는 멋쟁이 사자처럼에 들어와 아기사자로서 처음 진행해 본 
                프로젝트이기 때문에 굉장히 각별한데요 ☺ 일상생활에서 겪은 불편함을 
                해결하고 싶다는 생각으로부터 출발했는데, 기획한 프로젝트를 팀원 모두가 
                함께 같은 목표를 향해 같은 마음으로 열심히 구현해준 경험이 굉장히 인상깊었고 감사했습니다.
                </>
            ),
            interviewName2:"박혜연 디자인",
            interview2:(
                <>
                모아 디자인을 하면서 처음으로 캘린더 형식 디자인을 하게 되었습니다. 
                캘린더 디자인이 처음이다보니 디자인 하면서 많이 헤멨지만 결국 다 완성하고는 
                정말 뿌듯했던 기억이 있습니다 ㅎㅎ 그리고 모아 디자인은 제가 멋사에서 제대로 
                웹디자인을 해 본 첫 프로젝트인만큼 의미가 깊었던 것 같습니다!
                </>
            ),
            interviewName3:"오유진 백엔드",
            interview3:(
                <>
                백엔드 개발자로서 처음 해보는 프로젝트였기에 어려운 부분도 많았지만 
                제 실력을 급성장시킬 수 있는 뜻깊은 시간이었습니다. 
                Django MTV를 활용하여 개발했기 때문에 제가 구현한 부분이 프론트엔드에 
                적용되어 보일 때마다 큰 성취감을 느끼기도 했습니다. 
                멋쟁이사자처럼의 첫 해커톤인 만큼 더욱 기억에 오래 남는 것 같습니다.
                </>
            ),
            interviewName4:"이지연 백엔드",
            interview4:(
                <>
                백엔드 세션 때 배운 내용들을 직접 활용해볼 수 있어서 좋았고 
                첫 프로젝트라 미흡한 점이 많았지만 매일 개발에 몰두하며 프로젝트를 
                완성해나가는 것에 큰 보람과 재미를 느낄 수 있었습니다.
                </>
            ),
            interviewName5:"박제준 프론트",
            interview5:(
                <>
                처음 해본 개발 프로젝트여서 걱정이 많았지만 좋은 팀원들과의 협업으로 
                좋은 서비스를 개발할 수 있어서 뿌듯했습니다. 
                실력적으로도 향상할 수 있었고 좋은 경험이었습니다!
                </>
            ),
            interviewName6:"임승빈 프론트",
            interview6:(
                <>
                멋쟁이 사자처럼의 팀 프로젝트를 통해 사용자 경험을 개선하고 
                UI를 디자인하는 과정에서 새로운 아이디어를 발전시키는 것이 즐거웠습니다. 
                특히 다른곳에서는 쉽게 경험해보지 못하는 타 파트와의 협업을 통해 팀원들과 
                의사소통하고 문제를 해결하는 과정에서 많이 배울 수 있었습니다.
                </>
            ),
        },


        {
            image: prj4,
            title: "LISA MATE",
            subtitle: "나의 이사메이트, 리사메이트",
            explanation: (
                <>
                    이사를 준비할 때, 확인해야할 필수 항목들을 <br/>
                    체크리스트 형태로 사용자에게 기본 정보로 제공하고, <br/>
                    개인적인 항목들을 추가할 수 있도록하여 진행상황에 <br/>
                    따라 체크할 수 있는 웹사이트
                </>
            ),
            participants: "공수민, 김지은, 이가현, 임수진, 양인서, 이장혁",
            tools: "Django, Figma, Html, Css, JS",
            webLink: "미운영",
            interviewName1:"공수민 기획자",
            interview1:(
                <>
                공수민 기획 첫 기획 프로젝트라 많이 서툴었지만 디자인, 
                개발팀과 함께 협업하는 경험, 내 기획이 이루어지는 과정에서 개선해야할 점들을 
                정확히 알 수 있었고 이를 통해 나아질 앞으로의 기획이 기대되는 경험이었습니다. 
                함께 제작해준 팀원들에게 항상 감사합니다.🥰
                </>
            ),
            interviewName2:"김지은 디자인",
            interview2:(
                <>
                Lisa Mate는 멋사에서 처음으로 팀 작업을 하게 된 프로젝트입니다. 
                첫 활동인 만큼 부족한 부분도 많았지만 그만큼 많이 배울 수 있었던 
                의미 있는 프로젝트였습니다.
                </>
            ),
            interviewName3:"이가현 백엔드",
            interview3:(
                <>
                교내해커톤을 통해 Django를 서비스에 직접 적용하며 
                그동안 배운 것을 실전에서 활용하는 좋은 경험을 쌓을 수 있었습니다. 
                더불어, 처음으로 교내 사람들과 협업했던 추억이 아직도 생생하게 기억납니다 ㅎㅎ
                </>
            ),
            interviewName4:"임수진 백엔드",
            interview4:(
                <>
                리사메이트는 저의 첫 프로젝트로, 개발자로서 한 발자국 나아갈 수 있던 소중한 경험이었습니다. 
                프로젝트 하는 동안 팀원들과 자주 소통하면서 어떻게 하면 결과물을 만들어낼 수 있는지 
                계속해서 고민해보는 과정을 통해 성장할 수 있는 계기가 되었습니다. 💪🏻
                </>
            ),
            interviewName5:"양인서 프론트",
            interview5:(
                <>
                실제 웹 서비스를 개발하는 첫 프로젝트를 진행하면서, 
                css로 UI 배치와 Javascript로 프론트적인 기능 구현을 스스로 더 공부하며 배우게 된 
                좋은 경험이었습니다. 또한 벡엔드와 통신하기 위해 템플릿 언어 사용법을 익히게 되었으며, 
                백엔드 뿐만 아니라 디자인, 기획분들과도 정기적인 회의를 통해 피드백을 주고 받으며, 
                협업하는 능력도 키울 수 있었습니다!<br/>
                또한 벡엔드와 통신하기 위해 템플릿 언어 사용법을 익히게 되었으며, 
                백엔드 뿐만 아니라 디자인, 기획분들과도 정기적인 회의를 통해 피드백을 주고 받으며, 
                협업하는 능력도 키울 수 있었습니다!
                </>
            ),
            interviewName6:"이장혁 프론트",
            interview6:(
                <>
                프론트엔드를 담당해서 개발을 하면서도 백엔드와의 협업을 통해 다양한 분야의 기술을 
                좀 더 알 수 있었고 디자인과 기획이 짜여진 상태의 프로젝트를 경험할 수 있어서 좋았습니다.
                </>
            ),
        },

        {
            image: prj5,
            title: "채기랑",
            subtitle: "즐거운 독서모임을 위한 웹사이트",
            explanation: (
                <>
                    채기랑 서비스는 독서모임의 장벽을 <br/>
                    완화하고자 만든 서비스입니다.<br/>
                    내 주변에서 내 마음대로 정할 수 있는 <br/>
                    오프라인 독서모임 매칭 플랫폼입니다.
                </>
            ),
            participants: "이솔담, 임채현, 김예란, 조서영, 김소담, 김지원",
            tools: "Django, Figma, Html, Css, JS",
            webLink: "미운영",
            interviewName1:"이솔담 기획자",
            interview1:(
                <>
                실제 개발까지 프로덕트가 완성된 것을 보니 뿌듯했습니다. 
                내 아이디어가 실제 디자인 ui가 나오고 실제 웹사이트에서 구동이 되는 것을 
                보는 경험은 앞으로도 제인생에 큰 밑거름이 될 것 같습니다.


                </>
            ),
            interviewName2:"임채현 디자인",
            interview2:(
                <>
                처음 웹을 제작해봐서 서툰 점도 있었지만 기획자, 
                개발자분들과 함께 즐겁게 협업해서 하나의 웹 서비스를 만들 수 있어서 좋은 경험이었습니다.
                </>
            ),
            interviewName3:"김예란 백엔드",
            interview3:(
                <>
                짧은 시간동안 각 트랙이 다 함께 모여 프로젝트를 진행했던 만큼 어려운 것도 많았지만 
                처음부터 끝까지 우리가 모두 직접 구현해볼 수 있었던 뜻깊은 시간이었습니다 :)
                </>
            ),
            interviewName4:"조서영 백엔드",
            interview4:(
                <>
                올해 처음으로 진행하는 해커톤이었는데 배운 것을 토대로 기능을 하나하나 
                개발해 나가는 것이 뿌듯했던 기억이 있습니다. 서버 구축뿐만 아니라, 
                소통과 협력 능력도 성장할 수 있던 프로젝트였습니다.
                </>
            ),
            interviewName5:"김소담 프론트",
            interview5:(
                <>
                비전공자로서 막막했던 첫 프로젝트였지만 어려움도 많았던 만큼 
                배우는 것도 많았던 프로젝트였습니다. 팀원들과 하나의 프로젝트를 만들어가는 과정이 
                뿌듯했던 경험이였습니다.
                </>
            ),
            interviewName6:"김지원 프론트",
            interview6:(
                <>
                멋쟁이 사자처럼에서 원하는 아이디어를 본인 PR로 합류하게 된 첫 해커톤이었습니다! 
                더욱 열정적으로 참여하게 됐던 프로젝트라 뜻 깊었습니다.
                </>
            ),
        },

        {
            image: prj6,
            title: "곰곰이",
            subtitle: "고민의 시간을 줄여주는 마법의 소라곰",
            explanation: (
                <>
                    하루의 시작과 끝을 고민으로 보내는 우리에게 <br/>
                    꼭 필요한 곰곰이, 더 많은 사람들의 의견을 듣고<br/>
                    결정장애를 극복해보자. 운명에 맡기고 싶을땐 <br/>
                    곰곰이에게 물어볼 수 있다.
                </>
            ),
            participants: "이륜진, 구가영, 강다현, 강민서, 신승혜, 정예빈",
            tools: "Django, Figma, Html, Css, JS",
            webLink: "미운영",
            interviewName1:"이륜진 기획자",
            interview1:(
                <>
                고민이 많은 저에게 필요한 서비스였습니다. 
                나에게 필요한, 사람들에게 필요한 아이디어를 실현해볼 수 있는 소중한 시간이었습니다.
                </>
            ),
            interviewName2:"구가영 디자인",
            interview2:(
                <>
                바빴던 시기에 가장 단기간으로 작업했던 프로젝트였습니다. 
                해커톤 특성상 서비스가 100% 구현되지 않더라도 하나의 큰 임팩트가 있으면 
                시선을 끌 수 있기에 캐릭터를 효과적으로 이용하여 좋은 반응을 이끌어 냈던 기억이 납니다. 
                아이패드를 사용해서 손그림을 그렸는데, 덕분에 곰곰이만의 포근한 이미지도 더하고 시간도 
                줄이는 효율적인 작업을 할 수 있었습니다.
                </>
            ),
            interviewName3:"강다현 백엔드",
            interview3:(
                <>
                멋쟁이 사자처럼 11기에 들어와서 했던 첫 프로젝트여서 가장 기억에 남는 프로젝트인 것 같습니다. 
                단순히 프로젝트 완성보다는 팀원들과 함께 코딩하고, 회의하는 그 과정 자체가 굉장히 
                좋았던 것 같습니다.
                </>
            ),
            interviewName4:"강민서 백엔드",
            interview4:(
                <>
                개발자로서의 첫 협업 프로젝트를 멋쟁이사자처럼에서 하게 되었습니다. 
                팀원 대부분이 협업이 처음이라 미숙한 부분도 많았지만, 
                다들 끝까지 열심히 해서 좋은 결과를 낼 수 있었습니다. 
                곰곰이 팀원들 모두 고생했어 ❤✨
                </>
            ),
            interviewName5:"신승혜 프론트",
            interview5:(
                <>
                제대로된 첫 프로젝트였던 만큼 곰곰이는 저에게 의미가 깊은 프로젝트였습니다. 
                기획,디자인,개발팀 분들을 모두 잘 만나 성공적으로 마칠 수 있었습니다. 
                또, 단순 html css js로 짠 코드에 그치지않고 react로 리펙토링하는 과정에서 
                정말 많은 것을 얻어갔습니다. 멋사 여러분, 욕심을 가지고 기회가 되는 만큼 
                열심히 하다보면 언젠가 커다란 열매가 찾아옵니다! 다들 화이팅 🦁
                </>
            ),
            interviewName6:"정예빈 프론트",
            interview6:(
                <>
                곰곰이 프로젝트는 저의 첫 협업프로젝트였어서 코드를 짜는것부터 협업, 
                통신 등 다양한 어려움이 있었습니다.  그래도 덕분에 프론트엔드로서의 
                능력과 협업능력을 향상시킬 수 있었습니다. 
                무엇보다 내가 직접 만든 서비스가 생겨 성취감을 느낄 수 있었던 경험이었습니다❤
                </>
            ),
        },
    ];

    

    const logoContainerStyle={
        height: '80px',
        flexShrink: '0',
        background: 'linear-gradient(270deg, #191B24 86%, #FF7710 100%)',
        display:'flex',
        paddingLeft: '1.25rem'
    }

    const titleStyle={
        color: 'var(--White, #FFF)',
        fontFamily: 'Pretendard',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        marginTop:'26px',
        marginLeft:'0.73rem'
    }

    const ImgContainer=styled.div`
        padding-left: 30px;
        padding-right: 30px;
    `;

    const StyledMotionImg = styled(motion.img)`
    height: 188px;
    width: 100%;
    flex-shrink: 0;
    border-radius: 8px;
    margin-top: 63px;
    @media (max-width: 428px) {
        height: 180px;
    }
    `;
    

    const Page=styled.div`
    display: flex;
    gap: 13px;
    align-items:center;
    margin-top:18px;
    margin-left: 80%;
    @media (max-width: 428px) {
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

    const logoStyle={
        width: '2.27206rem',
        height: '1.8125rem',
        flexShrink: '0',
        marginTop: '1.62rem'
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
        margin-left:30px;
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
    margin-left:30px;
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
        margin-left:30px;
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
    margin-left:30px;
    margin-top:12px;
    @media (max-width: 428px) {
        margin-left: 30px;
        font-size: 11px;
    }
    `;

    const InterviewContainer=styled.div`
    padding: 10px 10px 10px 10px;
    width: 100%;
    flex-shrink: 0;
    border-radius: 8px;
    background: #2A2A3A;
    `;

    const Interview=styled.div`
    display:flex;
    flex-direction:column;
    margin-top:40px;
    padding-left:30px;
    padding-right:30px;
    gap:10px;
    margin-bottom:100px;
    `;

    const InterviewName=styled.div`
    color: #BFC4D8;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom:8px;
    @media (max-width: 428px) {
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
    @media (max-width: 428px) {
        font-size: 9px;
    }
    `;

    const maxStyle={
        maxWidth: "428px"
    }

    const handleNext = () => {
        if (currentIndex < 5) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
            setCurrentIndex(5);
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
        <div style={maxStyle}>
        <div style={logoContainerStyle}>
            <img src={logo} style={logoStyle}/>
            <div style={titleStyle}>11기 프로젝트</div>
        </div>

        <ImgContainer>
        <StyledMotionImg
        key={projectData[currentIndex].image}
        src={projectData[currentIndex].image}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        />
        </ImgContainer>

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
        {/* <Extra>웹 링크 : {projectData[currentIndex].webLink}</Extra> */}

        <Interview>
        {interviews}
        </Interview>

        <Footer/>
        </div>
    );
}

export default EleventhProject;
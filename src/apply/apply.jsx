import Intro from "../Intro/Intro";
import styled from "styled-components";
import Footer from "../footer/footer";
import IdentityVerification from "../IdentityVerification/IdentityVerification";

const ApplyButton = styled.button`
  width: 12.5rem;
  height: 4.375rem;
  flex-shrink: 0;border-radius: 0.5rem;
  background: var(--Sub-color, #FF7710);
  color: var(--White, #FFF);
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

function Apply() {
  return <>
    <Intro>지원하기</Intro>
    <IdentityVerification />
    <div style={{display: "flex", justifyContent: "center", marginTop: "5rem", marginBottom: "22.5rem"}}>
      <ApplyButton>지원하러가기</ApplyButton>
    </div>
    <Footer />
  </>;
}

export default Apply;
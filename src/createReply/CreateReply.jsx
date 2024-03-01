import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GrayCircle from '../images/graycircle.png';

const url = `https://www.hsu-like-lion.com`;

const RegisterContainer = styled.div`
  width: 90%;
  height: 6.25rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  border: 1px solid
    ${({ activeBorder }) =>
      activeBorder ? '#7F85A3' : 'var(--Gray5, #2a2a3a)'};
  background: #2a2a3a;
  margin: 0 auto;
  margin-bottom: 0.4rem;
  margin-top: 1.63rem;
`;

const ExecutiveField = styled.p`
  color: var(--White, #fff);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  margin-left: 0.5rem;
`;

const SubmitButton = styled.button`
  width: 2.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  background: ${({ activeButton }) => (activeButton ? '#FF7710' : '#7F85A3')};
  color: ${({ activeButton }) => (activeButton ? 'white' : '#2A2A3A')};
  font-family: Pretendard;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: absolute;
  right: 0.75rem;
`;

const ModifyButton = styled.button`
  width: 2.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  background: #ff7710;
  color: white;
  font-family: Pretendard;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: absolute;
  right: 0.75rem;
`;

const ReplyField = styled.textarea`
  margin-top: 0.5rem;
  margin-left: 1rem;
  color: white;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 170%; /* 1.275rem */
  width: 90%;
  background: #2a2a3a;
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }
`;

export default function CreateReply({
  executive,
  handleReply,
  handleSubmit,
  reply,
  isActive,
  handleActive,
  handleModify,
  editMode,
  selectedContent,
}) {
  return (
    <RegisterContainer activeBorder={isActive}>
      <form>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '1.06rem',
            position: 'relative',
          }}
        >
          <img
            src={GrayCircle}
            alt="graycircleImg"
            style={{ marginLeft: '1rem' }}
          />
          <ExecutiveField>{executive}</ExecutiveField>
          {editMode ? (
            <ModifyButton onClick={() => handleModify(selectedContent)}>
              수정
            </ModifyButton>
          ) : (
            <SubmitButton onClick={handleSubmit} activeButton={isActive}>
              등록
            </SubmitButton>
          )}
        </div>
        <ReplyField
          cols="30"
          value={reply}
          placeholder="댓글을 남겨보세요"
          onChange={handleReply}
          onFocus={handleActive}
        />
      </form>
    </RegisterContainer>
  );
}

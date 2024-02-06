import './App.css';
import styled from 'styled-components';
import { GlobalStyle } from './style/globalStyle';
import Main from './main/main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header/header';
import Activity from './activity/activity';
import Project from './project/project';
import Project11 from './project/project11';
import Project12 from './project/project12';
import Apply from './apply/apply';
import Question from './qna/question';
import Login from './login/login';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  min-width: 428px;
  background-color: black;
  position: relative;

  @media (max-width: 428px) {
    min-width: 60%;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Activity" element={<Activity />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Project11" element={<Project11 />} />
          <Route path="/Project12" element={<Project12 />} />
          <Route path="/Apply" element={<Apply />} />
          <Route path="/Question" element={<Question />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;

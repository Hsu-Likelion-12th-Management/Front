import './App.css';
import styled from 'styled-components';
import { GlobalStyle } from './style/globalStyle';
import Main from './main/main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header/header';
import Activity from './activity/activity';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  max-width: 428px;
  background-color: black;
  position: relative;
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
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;

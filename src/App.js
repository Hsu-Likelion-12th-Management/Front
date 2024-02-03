import './App.css';
import styled from 'styled-components';
import { GlobalStyle } from './style/globalStyle';
import Main from './main/main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 393px;
  width: 100vw;
  min-height: 852px;
  background-color: #000000;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;

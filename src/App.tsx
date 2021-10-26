
import DashBoard from './components/DashBoard/dashBoard.container';
import Header from './components/Header/header.container';
import styled from "styled-components"
import GlobalStyle from './GlobalStyle/globalStyle';
const AppLayout = styled.div``

function App() {
  return (
    <AppLayout >
      <GlobalStyle />
      <Header />
      <DashBoard />
    </AppLayout>
  );
}

export default App;

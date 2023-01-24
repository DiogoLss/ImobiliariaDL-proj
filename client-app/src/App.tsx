import { Container } from 'semantic-ui-react';
import './App.css';
import ImoveisDashBoard from './features/imoveis/dashboard/ImoveisDashboard';
import NavBar from './features/imoveis/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <Container style={{marginTop:'7em'}}>
      <ImoveisDashBoard/>
    </Container>
    </>
  );
}
export default App;

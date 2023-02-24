// import { Outlet } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './App.css';
import ImoveisDashboard from './features/imoveis/dashboard/ImoveisDashboard';
// import ImoveisDashBoard from './features/imoveis/dashboard/ImoveisDashboard';
import NavBar from './features/imoveis/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <Container style={{marginTop:'7em'}}>
      <Outlet/>
    </Container>
    </>
  );
}
export default App;

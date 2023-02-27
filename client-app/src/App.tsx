// import { Outlet } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './features/imoveis/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  );
}
export default App;

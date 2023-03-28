// import { Outlet } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './features/Footer';
import NavBar from './features/imoveis/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  );
}
export default App;

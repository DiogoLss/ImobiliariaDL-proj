import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import ImoveisDashboard from './dashboard/ImoveisDashboard';

export default function NavBar(){
    const navigate = useNavigate();
    function toHome(){
        navigate('/')
    }
    return(
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
                <img src="/assets/images/logo.png" className='img-logo' alt="Logo" onClick={toHome} />
            {/* <Link to={'/'} className='navbar-brand app-logo'>Imobiliaria DL</Link> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={'/Imoveis'} className='nav-link'>Imoveis</Link>
                    </li>
                    <li className="nav-item">
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}
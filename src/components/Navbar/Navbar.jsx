import 'bootstrap/dist/css/bootstrap.min.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../images/logo.png'
import './NavBar.css'


const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className='logo'>
                    <img src={logo} alt='logo' img-fluid/>
                    <h1>POPCORN TIME</h1>   
                </div>
                <div className="container-fluid">                
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">                            
                            <li className="nav-item">
                                <a className="nav-link" href="#">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                            <li className="nav-item">                                
                                <a className="nav-link" href="#">Buscar</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <CartWidget />
            </nav>
    );
};

export default Navbar;

<Navbar />;
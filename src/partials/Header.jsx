import '../styles/header.css';
import Wave from '../assets/wave-2.svg';

function Header({ children }) {

    return (
        <header>
            <div className="header-content">
                {children}
            </div>
            <img className="header-wave" src={Wave} alt="wave" />
        </header>
    )
}

export default Header;
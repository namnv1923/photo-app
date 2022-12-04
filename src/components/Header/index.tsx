import { Link } from 'react-router-dom';
import images from '../../assets/images';
import './Header.scss';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img src={images.logo} alt="logo" />
            </Link>
            <span className="header-text">Redux project</span>
        </div>
    );
}

export default Header;

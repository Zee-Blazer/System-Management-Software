
import { Link } from 'react-router-dom';

// CSS
import './header.component.css';

export const HeaderComponent = () => {

    return (
        <div className='header'>

            <nav>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/add">ADD</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                </ul>
            </nav>
        </div>
    )
}

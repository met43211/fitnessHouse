import { Link } from "react-router-dom";
import Logo from '../static/assets/Logo.png'
import phone from '../static/assets/phone.png'
import telegram from '../static/assets/telegram.png'
import vk from '../static/assets/vk.png'

function Header() {
    return (
        <div className="wrapper header-wrapper"  id='top'>
            <header>
                <div className="header-left">
                    <Link to='/fitnessHouse'>
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <nav className="header-middle">
                    <Link to='./subscription'>Абонементы</Link>
                    <Link>Расписание</Link>
                    <Link>Тренеры</Link>
                    <Link>Клубы</Link>
                </nav>
                <div className="header-right">
                    <div className="phone">
                        <img src={phone} alt="phoneIcon" />
                    </div>
                    <div className="socials">
                        <a href="">
                            <img src={vk} alt="vk" />
                        </a>
                        <a href="">
                            <img src={telegram} alt="telegram" />
                        </a>
                    </div>
                </div>
            </header>
        </div>
     );
}

export default Header;
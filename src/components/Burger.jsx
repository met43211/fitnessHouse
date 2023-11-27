import { useState } from "react";
import { Link } from "react-router-dom";
import phone from '../static/assets/phone.png'
import telegram from '../static/assets/telegram.png'
import vk from '../static/assets/vk.png'

function Burger() {
    const [burger, setBurger] = useState(false)
    return ( 
        <>
            <button className="burger-menu-button" onClick={()=>setBurger(prev=>!prev)}>
                <svg width="30" height="9" viewBox="0 0 30 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="-0.000244141" y="0.467285" width="30" height="2" fill="white"/>
                <rect x="-0.000244141" y="6.53271" width="30" height="2" fill="white"/>
                </svg>
            </button>
            {burger&&<>
                <div className="burger-wrapper" onClick={()=>setBurger(false)}>
                </div>
                <div className="burger-menu">
                    <nav className="links">
                        <Link to='/fitnessHouse/subscription'>Абонементы</Link>
                        <Link>Расписание</Link>
                        <Link>Тренеры</Link>
                        <Link>Клубы</Link>
                    </nav>
                    <div className="contacts">
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
                </div>
            </>}
        </>
     );
}

export default Burger;
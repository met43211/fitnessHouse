import { useState } from "react";
import { Link } from "react-router-dom";
import phone from '../static/assets/phone.png'
import telegram from '../static/assets/telegram.png'
import vk from '../static/assets/vk.png'

function Burger() {
    const [burger, setBurger] = useState(false)
    return ( 
        <>
            <button className="burger-menu-button" onClick={()=>setBurger(prev=>!prev)}>Меню</button>
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
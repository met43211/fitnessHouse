import Logo from '../static/assets/Logo.png'
import telegram from '../static/assets/telegram.png'
import vk from '../static/assets/vk.png'

function Footer() {
    return ( 
        <div className="wrapper footer-wrapper">
            <footer>
                <div className="footer-top">
                    <div className="footer-left">
                        <img src={Logo} alt="logo" />
                        <p className="phone">(812) 610 06 06</p>
                    </div>
                    <div className="footer-right">
                        <p>Служба поддержки</p>
                        <div className="socials">
                            <a href="">
                                <div className="footer-social">
                                    <img src={vk} alt="vk" />
                                </div>
                            </a>
                            <a href="">
                                <div className="footer-social">
                                    <img src={telegram} alt="telegram" />
                                </div>
                            </a>
                        </div>
                        <p>
                            c 7.00 до 00.00
                        </p>
                        <p>Email: help@fhdud.ru</p>
                    </div>
                </div>
                <div className="footer-line"></div>
                <div className="footer-bottom">
                    <div className="footer-left">
                        <a href="">
                            <img src={vk} alt="vk" />
                        </a>
                        <a href="">
                            <img src={telegram} alt="telegram" />
                        </a>
                    </div>
                    <div className="footer-pre-left">
                        <a href="">Юридическая информация</a>
                    </div>
                    <div className="footer-pre-right">
                        <a href="">Соглашение на обработку персональных данных</a>
                    </div>
                    <div className="footer-right">
                        <p>©2007-2023</p>
                        <p>Email: help@fhdud.ru</p>
                    </div>
                </div>
            </footer>
        </div>
     );
}

export default Footer;
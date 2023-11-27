import Cards from "../../components/Cards";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Infografic from "../../components/Infografic";
import SimpleSlider from "../../components/SimpleSlider";
import s1Img from '../../static/assets/s1Img.png';
import './MainPage.scss'

function MainPage() {
    return ( 
        <>
            <Header/>
                <div className="wrapper main-s1-wrapper">
                    <div className="s1">
                        <div className="s1-left">
                            <img src={s1Img} alt="s1Img" />
                        </div>
                        <div className="s1-right">
                            <h1>ФИТНЕС ХАУС  — ЭТО</h1>
                            <Infografic/>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="s2">
                        <h2>Фитнес на современных условиях</h2>
                        <Cards data={['СПА и зона отдыха', 'PRO оборудование', 'Индивидуальные абонементы', 'Программа лояльности']}/>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="slider">
                        <SimpleSlider/>
                    </div>
                </div>
            <Footer/>
        </>
     );
}

export default MainPage;
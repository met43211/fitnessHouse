import Cards from "../../components/Cards";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Quiz from "../../components/Quiz";
import TopButton from "../../components/TopButton";
import './SubscriptionPage.scss'

function SubscriptionPage() {
    return (
        <>
            <Header/>
                <div className="wrapper">
                    <div className="s1">
                        <Cards data={['Бассейн', 'Тренажерный зал', 'Групповые занятия', 'Зал растяжки']}/>
                    </div>
                </div>
                <div className="wrapper s2-wrapper">
                    <div className="s2">
                        <h2>Абонементы сети клубов</h2>
                        <div className="pic-block">
                            <div className="img">
                                <img src="" />
                            </div>
                            <div className="img">
                                <img src="" />
                            </div>
                            <div className="img">
                                <img src="" />
                            </div>
                            <div className="img">
                                <img src="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="s3">
                        <h2>
                            Калькулятор абонемента
                        </h2>
                        <p>
                            Ответь на 5 вопросови получи свою цену
                        </p>
                        <Quiz/>
                    </div>
                </div>
            <Footer/>
            <TopButton/>
        </>
    );
}

export default SubscriptionPage;
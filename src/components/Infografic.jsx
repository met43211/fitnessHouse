import info1 from '../static/assets/info1.png'
import info2 from '../static/assets/info2.png'
import info3 from '../static/assets/info3.png'
import info4 from '../static/assets/info4.png'

function Infografic() {
    return ( 
        <div className="info">
            <div className="info-top-left">
                <div className="sector-top">
                    <h2>10</h2>
                    <img src={info1}/>
                </div>
                <p>НАПРАВЛЕНИЯ ЗАНЯТИЙ</p>
            </div>
            <div className="info-top-right">
                <div className="sector-top">
                    <h2>300+ </h2>
                    <img src={info2}/>
                </div>
                <p>ПРОФЕССИОНАЛЬНЫХ ТРЕНЕРОВ</p>
            </div>
            <div className="info-bottom-left">
                <div className="sector-top">
                    <h2>50</h2>
                    <img src={info3}/>
                </div>
                <p>КЛУБОВ В СПБ</p>
            </div>
            <div className="info-bottom-right">
                <div className="sector-top">
                    <h2>2000+</h2>
                    <img src={info4}/>
                </div>
                <p>ПОСЕТИТЕЛЕЙ ЕЖЕДНЕВНО ВЫБИРАЮТ НАС</p>
            </div>
        </div>
     );
}

export default Infografic;
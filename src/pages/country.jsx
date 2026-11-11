import Countrydata from './data/country.json'
import Location from './../assets/lacation2.png'
import './style/country.css'
function Country(){
    return(
        <main className='country'>
            <h2>위치 선택</h2>
            <p className='sub'>주문한 상품을 어디로 배송하시겠습니까?</p>
            <section>
                {Object.entries(Countrydata).map(([region,coutries])=>(
                    <h3>{region}</h3>
                ))}
                <h3>북미</h3>
                <div className="countrywrap">
                    {coutries.map((item, index)=>(
                        <div className='box'>
                        <img src={Location} alt="icon" />
                        <div className='text'>
                            <h4>{item.country}</h4>
                            {item.language &&(<p>{item.language}</p>)}
                        </div>
                    </div>
                    ))}
                </div>
                <div className="countrywrap">
                    <div className='box'>
                        <img src={Location} alt="icon" />
                        <div className='text'>
                            <h4>캐나다</h4>
                            <p>English</p>
                        </div>
                    </div>
                    <div className='box'>
                        <img src={Location} alt="icon" />
                        <div className='text'>
                            <h4>캐나다</h4>
                            <p>Français</p>
                        </div>
                    </div>
                    <div className='box'>
                        <img src={Location} alt="icon" />
                        <div className='text'>
                            <h4>캐나다</h4>
                            <p>Français</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Country
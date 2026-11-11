import {useNavigate} from "react-router-dom"
import LogoBlack from "./../assets/logoblack.png"
import sec1img from "./../assets/main1.png"
import Button from "./../com/button"
import bnrimg from "./../assets/main2.png"
import Hd from "./../data/hd"
import './style/home.css'
import HomeCard from "../com/homeCard.jsx"
function Home(){
    const navigate = useNavigate();
    const style = {
        backgroundColor: "black",
        color: "white",
        border: "none",
        borderRadius: "50px",
        fontSize: "24px",
        fontWeight: "700",
        padding: "10px 40px",
        cursor: "pointer",
    }
    return (
        <main id="home">
            <section className="sec1">
                <div className="top">
                    <p>YOUR RUN, YOUR STYLE</p>
                    <div><img src={LogoBlack} alt="logo" /></div>
                </div>
                <div className="middle">
                    <img src={sec1img} alt="run" />
                </div>
                <div className="bottom">
                    <h2>레이스로 증명하다</h2>
                    <p>샤론 로케디, 또 하나의 메달을 완성하다.</p>
                    <div className="btns">
                        <Button onClick={()=>navigate("/men")} btn={"남성 러닝화"} style={style}></Button>
                        <Button onClick={()=>navigate("/women")} btn={"여성 러닝화"} style={style}></Button>
                    </div>
                </div>
            </section>
            <div className="bnrimg">
                <img src={bnrimg} alt="image" />
            </div>
            <section className="sec2">
                <h2>BUILT FOR TRAINING</h2>
                <p>더 나은 퍼포먼스를 위한 트레이닝 셀렉션 움직임을 고려한 가능성과 편안함을 경험해보세요.</p>
                <article>
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                </article>
            </section>
        </main>
    )
}
export default Home
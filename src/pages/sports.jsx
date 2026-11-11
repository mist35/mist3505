import {useNavigate} from "react-router-dom"
import LogoBlack from "./../assets/logoblack.png"
import sports1 from "./../assets/98timerun.png"
import Run from "./../assets/run.png"
import Training from "./../assets/traning.png"
import Outdoor from "./../assets/outdour.png"
import Golf from "./../assets/goalf.png"
import Button from "./../com/button"
import Sportscard from "../com/sportscard"
import './style/sports.css'
function Sports(){
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
        <main id="sport">
            <section className="sec1">
                <div className="top">
                    <p>YOUR RUN, YOUR STYLE</p>
                    <div><img src={LogoBlack} alt="logo" /></div>
                </div>
                <div className="middle">
                    <img src={sports1} alt="run" />
                </div>
                <div className="bottom">
                    <h2>레이스로 증명하다</h2>
                    <p>샤론 로케디, 또 하나의 메달을 완성하다.</p>
                    <div className="btns">
                        <Button onClick={()=>navigate("/pages/Program")} btn={"프로그램 자세히 보기"} style={style}></Button>
                        <Button onClick={()=>navigate("/pages/women")} btn={"러닝 컬렉션 쇼핑하기"} style={style}></Button>
                    </div>
                </div>
            </section>
            <section className="sec2">
                <Sportscard cardimg={Run} title={'러닝'} />
                <div className="titletext"><h2>Train By Sport</h2></div>
                <Sportscard cardimg={Training} title={'트레이닝'} />
                <Sportscard cardimg={Outdoor} title={'아웃도어'}/>
                <div className="titletext"><h2>Train By Sport</h2></div>
                <Sportscard cardimg={Golf} title={'골프'} />
            </section>
        </main>    
    )
}
export default Sports
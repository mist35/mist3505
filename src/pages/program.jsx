import {useNavigate} from "react-router-dom"
import LogoBlack from "./../assets/logoblack.png"
import sports1 from "./../assets/98timerun.png"
import See from './../assets/programsee.png'
import Button from "./../com/button"
export default function Program(){
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
    const style1 ={
        textAlign : "center"
    }
    return(
        <main id="moreprogram">
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
                        <Button onClick={()=>navigate("/men")} btn={"프로그램 자세히 보기"} style={style}></Button>
                        <Button onClick={()=>navigate("/women")} btn={"러닝 컬렉션 쇼핑하기"} style={style}></Button>
                    </div>
                </div>
            </section>
            <section className="sec2" style={style1}>
                <img src={See} alt="info" />
            </section>
        </main>
    )
}
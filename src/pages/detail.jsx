import { useNavigate } from 'react-router-dom'
import girl1 from './../assets/girl1.png'
import girl2 from './../assets/girl2.png'
import girl3 from './../assets/girl3.png'
import Button from './../com/button'
import "./style/detail.css"
import starW from './../assets/Star.png'
import starB from './../assets/starblack.png'
import Shoessize from './../com/size'
export default function Detail(){
    const navigate = useNavigate();
    const bkstyle ={
        width : "600px",
        backgroundColor : "black",
        color : "white",
        border : "1px solid black",
        borderRadius : "50px",
        fontSize : "24px",
        fontWeight : "700",
        padding : "20px 0",
        cursor : "pointer",
        textAlign : "center"   
    }
    const wtstyle={
        width : "600px",
        backgroundColor : "white",
        color : "black",
        border : "1px solid black",
        borderRadius : "50px",
        fontSize : "24px",
        fontWeight : "700",
        padding : "20px 0",
        cursor : "pointer",
        textAlign : "center"   
    }
    return(
        <main className="productdetail">
            <div className="imgwrap">
                <img src={girl1} alt="" />
            </div>
            <section>
                <h2>UA HB 러너2</h2>
                <p>여성 러닝화</p>
                <h3>179000원</h3>
                <ul className='type'>
                    <li><img src={girl1} alt="" /></li>
                    <li><img src={girl2} alt="" /></li>
                    <li><img src={girl3} alt="" /></li>
                </ul>
                <div className='shoessize'>
                    <h4>사이즈 선택</h4>
                    <div className='sizelists'>
                    <Shoessize />
                    </div>
                <Button stlye={bkstyle} onClick={()=>navigate("/pages/cart")} btnText={"장바구니"}/>
                <Button stlye={bkstyle} onClick={()=>navigate("/pages/wishlist")} btnText={"장바구니"}/>
                </div>
                <div>
                    <h3>무료픽업</h3>
                    <h3>매장찾기</h3>
                    <p>상품 상세 정보 보기</p>
                    <div className='delivery'><h4>무료 배송 및 반품</h4><span>V</span></div>
                    <div className='review'>
                        <h4>리뷰</h4>
                        <ul>
                            <li><img src="" alt="" /></li>
                            <li><img src="" alt="" /></li>
                            <li><img src="" alt="" /></li>
                            <li><img src="" alt="" /></li>
                            <li><img src="" alt="" /></li>
                        </ul>
                        <span>V</span>
                    </div>
                    <div className='info'><h4>추가 정보</h4></div>
                </div>
            </section>
        </main>
    )
}
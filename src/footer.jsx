import {Link} from "react-router-dom";

import "./css/footer.css";

function Footer(){

    return(
        <footer>
            <div className="footer_wrap">
                <div className="signUp">
                    <p className="title">이메일을 등록하시고 최신 소식을 받아보세요.</p>
                    <button >이메일주소 등록</button>
                    <p className="option">
                        (선택) 마케팅 정보를 위해 이메일 수신을 등록하실 경우 언더아머코리아의 선택적 개인정보 처리(수집, 이용, 저장 등)에 동의한 것으로 간주합니다.  
                        <button>자세히보기</button>
                    </p>
                    <p className="payment">
                    채무지급보증안내
                    당사는 고객님이 현금 결제한 금액에 대해 우리은행과
                    채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다. 
                    </p>
                    <button>서비스가입사실확인</button>
                </div>
                <div className="contact">
                    <h3>전화상담</h3>
                    <p>1577-9691
                        <span>월요일 ~ 금요일 9:00~18:00/ 점심시간 : 12:00 ~ 13:00 </span>
                    </p>
                    <button>문의하기</button>
                </div>
                <div className="customer">
                    <h3><Link to="./pages/customerService">고객 서비스</Link></h3>
                    <ul>
                        <li>자주 묻는 질문(FAQ)</li>
                        <li>반품 및 교환</li>
                        <li><Link to="./pages/orders">주문 조회</Link></li>
                    </ul>
                </div>
                <div className="about">
                    <h3>회사정보</h3>
                    <ul>
                        <li>Under Armour 스토리</li>
                        <li>채용 안내</li>
                    </ul>
                </div>
                <div className="sitemap"> 
                    <h3>UA 소셜</h3>
                    <ul>
                        <li><Link to="#">페이스북</Link></li>
                        <li><Link to="#">인스타그램</Link></li>
                        <li><Link to="#">유튜브</Link></li>
                    </ul>

                </div>
            </div>           
            <div className="footer_info">
                <p>ⓒ Under Armour, Inc.</p>
                <ul className="footer_info_menu">
                    <li><Link to="#">이용약관</Link></li>
                    <li><Link to="#">개인정보처리방침</Link></li>
                    <li><Link to="#">회사정보</Link></li>
                    <li><Link to="#">사업자정보 확인</Link></li> 
                    <li><Link to="#">쿠키 환경설정</Link></li>                  
                </ul>
                <div>
                    <ul className="footer_info_company">
                        <li>언더아머코리아(유)</li>
                        <li>서울특별시 강남구 테헤란로 521, 28F</li>
                        <li>대표 : 성모은</li>
                        <li>사업자등록번호 : 102-81-44827</li>
                        <li>통신판매업신고번호 : 제 2017-서울강남-00220호</li>
                    </ul>
                    <ul className="footer_info_contact">
                        <li>대표전화 : 1577-9691</li>
                        <li>이메일 : cskorea@underarmour.com</li>
                        <li>개인정보보호책임자 : 최성택</li>
                        <li>호스팅서비스 : Salesforce.com ,lnc.</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}   
export default Footer;
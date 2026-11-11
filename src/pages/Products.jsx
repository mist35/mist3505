import { useNavigate } from 'react-router-dom'
import './style/woman.css'
import Products from '../com/Products.jsx'
import womenshoes from "./data/womenshoes.json"
function Women(Products,gender){
    const navigate = useNavigate()
    return (
        <main id='product'>
            <aside>
                <p>러닝/신발</p>
                <h2>여성 러닝 신발</h2>
                <div className="filter_btn">
                    <button>필터</button>
                </div>
            </aside>
            <section className='products'>
                {womenshoes.map((shoes)=>{
                    <Product
                    key={womenshoes.id} 
                    shoes = {womenshoes.shoes}
                    ex = {womenshoes.ex}
                    price = {womenshoes.price}
                    title = {womenshoes.title}
                    product = {womenshoes.product}
                    onClick={()=>{navigate('/pages/detail')}}
                    />
                })}
            </section>
        </main>
    )
}
export default Women
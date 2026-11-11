import './style/product.css'
function Product(key,shoes,ex,title,price,product,onClick){
    return(
        <figure className='product' key={id} onClick={onClick}>
                <div>
                    <img src={shoes} alt={ex} />
                    </div>
                    <figcaption>
                        <h3>{title}</h3>
                        <p>{product}</p>
                        <h4>{price}</h4>
                    </figcaption>
                </figure>
    )
}
export default Product
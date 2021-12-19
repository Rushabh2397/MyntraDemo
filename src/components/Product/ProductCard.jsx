import { Link } from 'react-router-dom'
import './card.css'



const ProductCard = ({prod}) => {


    return (
        <div className="product_card">
            <div>
               <Link to={`/tshirts/${prod.id}`} > <img className="product_image" src={prod.images[0]} alt="t-shirt" /></Link>
            </div>
            <div className="product_detail">
                <div>
                    <div className="product_brand">
                        <div className="product_title">{prod.title}</div>
                        <div ><i className="far fa-heart "></i></div>
                    </div>
                    <div className="product_desc">{prod.description}</div>
                </div>
                <div>
                <span className="product_money_symbol"> ₹ </span> <span>{prod.price}</span> <span className="product_money_symbol_discount">₹ </span><span className="product_mrp">{prod.mrp}</span> <span className="product_discount">({prod.discount}% OFF)</span>
                </div>

            </div>

        </div>
    )
}

export default ProductCard
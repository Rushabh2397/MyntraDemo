import './productdetail.css'
import { useParams } from 'react-router-dom'
import { useProduct } from '../../context/ProductContext'
import { useCart } from '../../context/CartContext'
import { useEffect, useState } from 'react'


const ProductDetail = () => {
    let { id } = useParams();
    const { products } = useProduct()
    const { cartObj, dispatchCart } = useCart()
    const [disableValue, setDisableVlaue] = useState(false)
    let product = products.product.find(ele => ele.id === id)


    const addToBag = () => {
        let productObj = {
            ...product,
            qty: 1
        }

        dispatchCart({type:'ADD_TO_CART',payload:productObj})
    }

    useEffect(() => {
    
        if (cartObj && cartObj.cart.length > 0) {
            let isProductPresent = cartObj.cart.some((prod) => prod.id===id);
            setDisableVlaue(isProductPresent)
        }else{
            setDisableVlaue(false)
        }
        // eslint-disable-next-line
    }, [cartObj])


    return (
        <div className="product_detail_container">
            <div className="image_section">
                {
                    product.images.map((ele, index) => {
                        return <img className="prod_image" key={index} src={ele} alt="tshirt" />
                    })
                }
            </div>
            <div className="product_detail_section">
                <h1 className="product_detail_title">{product.title}</h1>
                <div className="product_detail_detail">
                    {product.detail}
                </div>
                <div className="product_ratings">
                    <div>{product.rating.stars}<i className="fas fa-star fa-sm" style={{ color: "green",marginLeft:"3px",marginRight:"3px" }}></i></div>
                    <div>{product.rating.ratings}</div>

                </div>
                <hr></hr>
                <div className="product_detail_rate">
                    <strong className="product_detail_price">Rs. {product.price}</strong> <span className="product_detail_mrp">Rs. {product.mrp}</span> <span className="product_detail_discount">({product.discount}% OFF)</span>
                </div>
                <div className="tax">inclusive of all taxes</div>
                <span className="select_size">SELECT SIZE</span>
                <div className="prod_sizes_container">

                    {
                        product.sizes.map((ele) => {
                            return <div className="prod_sizes" key={ele}> {ele} </div>
                        })
                    }
                </div>

                <div>
                    <button className={`add_to_bag  ${disableValue && "disable_button" } ` } disabled={disableValue} onClick={addToBag}>Add To Bag</button>
                    
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
import './cartmodal.css'
import { useCart } from '../../context/CartContext'

const CartModal = ({ open, setOpen }) => {

    const { cartObj, dispatchCart } = useCart()

    const removeProd = (prod)=>{
        dispatchCart({type:'REMOVE',payload:prod})
      }

    const handleQty = ({ key, prod }) => {
        let type = key === 'add' ? 'INC_QTY' : 'REM_QTY'
        if (prod.qty === 1 && type === 'REM_QTY') {
          removeProd(prod)
        } else {
            dispatchCart({ type: type, payload: prod })
        }

    }

    

    return (
        <>
            <div className="overlay" onClick={() => { setOpen(false) }}>
            </div>
            <div className="cart_modal">
                <div style={{ display: "flex", justifyContent: 'space-between', marginBottom: "0.4rem" }} >
                    <div>Total Amount : {cartObj.totalCartAmount}</div>
                    <div onClick={() => { setOpen(false) }} ><i class="fas fa-times"></i></div>
                </div>
                {
                    cartObj?.cart.length > 0 && cartObj.cart.map((prod) => {
                        return <div className="cart_section">
                            <div>
                                <img className="cart_image" src={prod.images[0]} alt="t-shirt" />
                            </div>
                            <div className="cart_product_detail">
                                <div>
                                    <div className="product_brand">
                                        <div className="cart_product_title">{prod.title}</div>
                                    </div>
                                    <div className="cart_product_desc">{prod.description}</div>
                                </div>
                                <div>
                                    <span className="product_money_symbol"> ₹ </span> <span>{prod.price}</span> <span className="product_money_symbol_discount">₹ </span><span className="product_mrp">{prod.mrp}</span> <span className="product_discount">({prod.discount}% OFF)</span>
                                </div>

                                <div className="cart_action">
                                    <div className="act_btn" onClick={() => { handleQty({ key: 'decrease', prod: prod }) }}>-</div>
                                    {prod.qty}
                                    <div className="act_btn" onClick={() => { handleQty({ key: 'add', prod: prod }) }}>+</div>
                                </div>
                                <div>
                                    <button className="action_remove" onClick={()=>{removeProd(prod)}}>REMOVE</button>
                                </div>

                            </div>
                        </div>
                    })
                }


            </div>
        </>

    )
}

export default CartModal
import { useEffect} from 'react'
import ProductCard from './ProductCard'
import {useProduct} from '../../context/ProductContext'
import Data from '../../Dataset'





const Product = () => {

    const {products,dispatchProduct} = useProduct()

    useEffect(() => {
        dispatchProduct({type:'SET_PRODUCT',payload:Data})
        // eslint-disable-next-line
    }, [])

    return (
        <div className="product_container">

            {

                products.product?.length>0 && products.product.map((prod,index)=>{
                    return <ProductCard key={index} prod={prod} />
                }) 

            }

        </div>
    )
}

export default Product
import Product from '../../components/Product/Product'
import Filters from '../../components/Filters/Filters'
import Sort from '../../components/Sort/Sort'
import './home.css'




const Home = () => {

    

    return (
        <div>
           <Sort/>
            <div className="home_filter_product_section">
                <div className="home_filter_container">
                    <Filters />
                </div>
                <div className="home_product_container">
                    <Product />
                </div>
            </div>
            
        </div>
    )
}

export default Home
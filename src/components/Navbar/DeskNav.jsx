import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext'
import {useProduct} from '../../context/ProductContext'






const DeskNav = ({open,setOpen}) => {

    const { cartObj } = useCart();
    const {dispatchProduct} = useProduct()
    const [searchTerm,setSearchTerm] = useState('')

    return (
        <div className="nav_desktop_container">
            <div className="nav_desktop">
                <div className="logo">
                    <Link to="/" style={{textDecoration:"none",color:'black'}}> MYNTRA </Link>
                </div>

                <ul className="nav_desktop_left_menu">
                    <li>MEN</li>
                    <li>WOMEN</li>
                    <li>KIDS</li>
                    <li>HOME & LIVING</li>
                    <li>BEAUTY</li>
                </ul>
                <div className="search_box">
                    <input type="search" placeholder="Search by products,brands and more" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value);dispatchProduct({type:'SEARCH',payload:e.target.value})}}  />
                    <div className="search_icon"><i class="fas fa-search"></i></div>

                </div>
                <ul className="nav_desktop_right_menu">
                    
                    <li className="cart_icon" onClick={()=>{setOpen(!open)}}>
                        <i className="fas fa-shopping-bag fa-lg"></i>
                        {cartObj?.cart?.length > 0 && <div className="cart_size">{cartObj.totalCartSize}</div>}
                    </li>
                    <li><i className="far fa-heart fa-lg "></i></li>
                </ul>
            </div>
        </div >
    )


}

export default DeskNav
import { useState } from "react";
import {useProduct} from '../../context/ProductContext'



const MobNav = ({ open, setOpen }) => {

    const [searchBar, setSearchBar] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const {dispatchProduct} = useProduct()

    return (
        <div className="mob_nav_container">
            <nav className="nav_container" >
                <div className="nav_menu_logo_mob" >
                    <i className="fas fa-bars fa-lg"></i>
                </div>
                <div className="nav_right_section_mob">
                    <div className="nav_title_mob" >Myntra</div>
                    <div className="nav_menu_mob">
                        <div className="nav_logo_mob" onClick={()=>setSearchBar(true)}><i className="fas fa-search fa-lg" ></i></div>
                        <div className="nav_logo_mob"><i className="far fa-heart fa-lg "></i></div>
                        <div className="nav_logo_mob"><i className="fas fa-shopping-bag fa-lg"></i></div>
                    </div>
                </div>

            </nav>
            {
              searchBar &&  <div className="mobile_search_box">
                    <input type="text" placeholder="Search by products,brands and more" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); dispatchProduct({ type: 'SEARCH', payload: e.target.value }) }} />
                    <div className="mobile_icon_search" onClick={() => { setSearchBar(false) }} ><i class="fas fa-times"></i></div>

                </div>
            }
        </div>


    )
}


export default MobNav
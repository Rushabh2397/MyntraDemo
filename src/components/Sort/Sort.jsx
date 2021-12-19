import './sort.css'
import {useProduct} from '../../context/ProductContext'




const Sort = ()=>{
    const {dispatchProduct} = useProduct()
    const sortBy = [{ title: 'High-to-Low', value: 1 }, { title: 'Low-to-High', value: -1 }]

    const sortProduct = (value)=>{
        let type = value===1 ? 'HIGH-TO-LOW' : 'LOW-TO-HIGH'
        dispatchProduct({type:type})
    }

    return (
        <div className="filter_sort_section">
        <h2>Filters</h2>
        <div className="sort" >Sort by : <strong>Recommended</strong><span><i class="fas fa-angle-down fa-lg sort_icon"></i></span></div>
        <ul className="pretty p-default sort_list_container">
            {
                sortBy.map((sort, index) => {
                    return <div className="sort_list" key={index} onClick={()=>{sortProduct(sort.value)}}>
                        <li className="sort_title">{sort.title}</li>
                    </div>
                })
            }


        </ul>
    </div>
    )
}

export default Sort
import { useState } from "react"
import { useProduct } from '../../context/ProductContext'
import "./filters.css"




const Filters = () => {

    const {  dispatchProduct } = useProduct()
    const [filterList, setFilterList] = useState({
        "Brands": [],
        "Prices": [],
        "Discount Range": []
    })

    let filters = {
        "Brands": [
            {
                title: "Roadster"
            },
            {
                title: "HRX by Hrithik Roshan",
            },
            {
                title: "Moda Rapido"
            },
            {
                title: "Ducati"
            },
            {
                title:"Nautica"
            },
            {
                title:"DILLINGER"
            }
        ],
        "Prices": [
            {
                title: "Rs.200 to Rs.400",
                from: 200,
                to: 400
            },
            {
                title: "Rs. 400 to Rs.800",
                from: 400,
                to: 800
            },
            {
                title: "Rs. 800 to Rs.3000 ",
                from: 800,
                to: 3000
            }
        ],
        "Discount Range": [
            {
                title: '10% and above',
                discount: 10,
            
            },
            {
                title: '30% and above',
                discount: 30
            },
            {
                title: '50% and above',
                discount: 50
            },
            {
                title: '60% and above',
                discount:60
            }
        ]
    }


    const applyFilter = ({ key, value }) => {
        let newFilterListObj;
        console.log(filterList[key].some((ele)=>ele.title===value.title))
        if (filterList[key].some((ele)=>ele.title===value.title)) {
            newFilterListObj = {
                "Brands": key === "Brands" ? filterList[key].filter((ele) => ele.title !== value.title) : filterList['Brands'],
                "Prices": key === "Prices" ? filterList[key].filter((ele) => ele.title !== value.title) : filterList['Prices'],
                "Discount Range": key === "Discount Range" ? filterList[key].filter((ele) => ele.title !== value.title) : filterList['Discount Range']
            }
        } else {
            newFilterListObj = {
                "Brands": key === "Brands" ? [value, ...filterList['Brands']] : filterList['Brands'],
                "Prices": key === "Prices" ? [value, ...filterList['Prices']] : filterList['Prices'],
                "Discount Range": key === "Discount Range" ? [value, ...filterList['Discount Range']] : filterList['Discount Range']
            }


        }
        console.log("new",newFilterListObj)
        setFilterList(newFilterListObj)
        dispatchProduct({ type: 'FILTER', payload: newFilterListObj })
    }

    return (
        <div className="filter_section">
            {
                Object.keys(filters).map((filter, index) => {
                    return <div >
                        <h3 className="filter_title">{filter}</h3>

                        {
                            filters[filter].map((filterObj, index) => {
                                return <div class="pretty p-default">
                                    <ul className="filter_list">
                                        <input type="checkbox" onChange={() => { applyFilter({ key: filter, value: filterObj }) }} />

                                        <li className="filter_list_title">{filterObj.title}</li>
                                    </ul>
                                </div>
                            })
                        }
                    </div>
                })
            }

        </div>
    )
}


export default Filters
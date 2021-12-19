import { createContext, useContext, useReducer } from 'react'
import Products from '../Dataset'



const ProductContext = createContext();

const filterOperation = (filterObj) => {

    let filterdProducts = [...Products]
    

    if (filterObj['Brands'].length !== 0) {
        let newBrands = filterObj['Brands'].map(prod => prod.title)
        filterdProducts = filterdProducts.filter(prod => newBrands.includes(prod.title))
    }

    if (filterObj['Prices'].length !== 0) {
        let minPrices = filterObj['Prices'].map(prod => prod.from)
        let maxPrices = filterObj['Prices'].map(prod => prod.to)
        filterdProducts = filterdProducts.filter(prod =>prod.price >= Math.min(...minPrices) && prod.price <= Math.max(...maxPrices))
    }

    if (filterObj['Discount Range'].length !== 0) {
        let disArr = filterObj['Discount Range'].map(prod => prod.discount)
        filterdProducts = filterdProducts.filter(prod => prod.discount>=Math.min(...disArr))

    }


    return filterdProducts
}

const productReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCT':
            return {
                product: action.payload,

            }

        case 'HIGH-TO-LOW':

            return {
                product: state.product.sort((a, b) => b.price - a.price)
            }

        case 'LOW-TO-HIGH':

            return {
                product: state.product.sort((a, b) => a.price - b.price)
            }


        case 'FILTER':
            let filteredProd = filterOperation(action.payload)
            return {
                product: filteredProd
            }
        

        case  'SEARCH':
            
        return {
            product : action.payload!=='' ? state.product.filter(x => x.title.toLowerCase().includes(action.payload.toLowerCase())) :Products

        }

        default:
            return state

    }
}

let intialState = {
    product: []
}

export const ProductProvider = ({ children }) => {


    const [state, dispatch] = useReducer(productReducer, intialState)

    return (
        <>
            <ProductContext.Provider value={{ products: state, dispatchProduct: dispatch }}>
                {children}
            </ProductContext.Provider>
        </>)
}

export const useProduct = () => {
    return useContext(ProductContext)
}
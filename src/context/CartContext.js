import { createContext, useContext, useReducer } from 'react'




const CartContext = createContext();



const cartReducer = (state, action) => {
    switch (action.type) {

        case 'ADD_TO_CART':
            console.log(action.payload, state)
            return {
                cart: [action.payload, ...state.cart],
                totalCartSize: state.cart.length + 1,
                totalCartAmount: state.totalCartAmount + action.payload.price

            }

       

        case 'INC_QTY':

            return {
                ...state,
                cart: state.cart.map((prod) => {
                    if (prod.id === action.payload.id) {
                        prod.qty = prod.qty + 1;
                    }
                    return prod
                }),
                totalCartAmount: state.totalCartAmount + action.payload.price


            }

        case 'REM_QTY':

            return {
                ...state,
                cart: state.cart.map((prod) => {
                    if (prod.id === action.payload.id) {
                        prod.qty = prod.qty - 1;
                    }
                    return prod
                }),
                totalCartAmount: state.totalCartAmount - action.payload.price


            }



        case 'REMOVE':
            return {
                cart : state.cart.filter((prod)=>prod.id!==action.payload.id),
                totalCartAmount : state.totalCartAmount  - parseInt(action.payload.qty) * parseInt(action.payload.price),
                totalCartSize: state.cart.length - 1
            }

        default:
            return state

    }
}

let intialState = {
    cart: [],
    totalCartSize: 0,
    totalCartAmount: 0
}

export const CartProvider = ({ children }) => {


    const [state, dispatch] = useReducer(cartReducer, intialState)

    return (
        <>
            <CartContext.Provider value={{ cartObj: state, dispatchCart: dispatch }}>
                {children}
            </CartContext.Provider>
        </>)
}

export const useCart = () => {
    return useContext(CartContext)
}
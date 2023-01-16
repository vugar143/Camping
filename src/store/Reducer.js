const initialState = {
    products: [],
    basket: [],
    wishlist: [],
    product: {}

}

export default function Reducer(state = initialState, action) {

    switch (action.type) {
        case "SET_PRODUCTS":
            return { ...state, products: action.payload }
        case "SET_PRODUCT":
            return { ...state, product: action.payload }
        case "SET_BASKET":
            // localStorage.setItem("basket", JSON.stringify(action.payload))
            return { ...state, basket: action.payload }

        case "SET_WISHLIST":
            return { ...state, wishlist: action.payload }
        case "REMOVE_BASKET":
            // localStorage.setItem("basket", JSON.stringify([...state.basket.filter((a) => a.id !== action.payload)]))
            return {...state,
               basket: [...state.basket.filter((a) => a.id !== action.payload)]}
        case "SET_COUNT":
            return {...state,basket:action.payload}
        default:
            return state
    }
}

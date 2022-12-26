const initialState={
    products:[],
    basket:[],
    wishlist:[],
    
}

export default function Reducer(state=initialState,action){
    switch (action.type){
        case "SET_PRODUCTS":
            return{...state,products:action.payload}
            case "SET_BASKET":
                return{...state,basket:action.payload}
                case "SET_WISHLIST":
                    return{...state,wishlist:action.payload}
        
    default:
    return state
    }
}

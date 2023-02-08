const initialState = {
     modalShow: false,
    products: [],
    basket: [],
    wishlist: [],
    product: {},
    tour_detail:{},
    tours:[],
    user:""
}

export default function Reducer(state = initialState, action) {

    switch (action.type) {
        case "SET_PRODUCTS":
            return { ...state, products: action.payload }
            case "SET_USER":
                return { ...state, user: action.payload };
            case "SET_TOURS":
                return { ...state, tours: action.payload }
        case "SET_PRODUCT":
            return { ...state, product: action.payload }
            case "SET_TOUR":
                return { ...state, tour_detail: action.payload }
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
            case "OPEN_MODAL":
                return { ...state, modalShow: true };
              case "CLOSE_MODAL":
                return { ...state, modalShow: false };
        default:
            return state
    }
}

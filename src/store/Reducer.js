const initialState = {
    modalShow: false,
    products: [],
    basket:JSON.parse(window.localStorage.getItem("basket"))?JSON.parse(window.localStorage.getItem("basket")) : [],
    wishlist: [],
    product: {},
    tour_detail: {},
    tours: [],
    turlarim:[],
    zonas:[],
    zona:{},
    user: JSON.parse(window.localStorage.getItem("user1"))
        ? JSON.parse(window.localStorage.getItem("user1"))
        : "",
    blogs: [],
    totalPagess: "",
    ptotalPages: "",
    ztotalPages:"",
    error: null,
    fav: JSON.parse(window.localStorage.getItem("fav"))
        ? JSON.parse(window.localStorage.getItem("fav"))
        : [],
}

export default function Reducer(state = initialState, action) {

    switch (action.type) {
        case "SET_PRODUCTS":
            return { ...state, products: action.payload }
        case "SET_BLOGS":
            return { ...state, blogs: action.payload }
        case "SET_USER":
            localStorage.setItem("user1", JSON.stringify(action.payload))
            return { ...state, user: action.payload };
        case "SET_TOURS":
            return { ...state, tours: action.payload }
            case "SET_TURLARIM":
                return { ...state, tours: action.payload }
        case "SET_PRODUCT":
            return { ...state, product: action.payload }
        case "SET_TOUR":
            return { ...state, tour_detail: action.payload }
        case "SET_BASKET":
            localStorage.setItem("basket", JSON.stringify(action.payload))
            return { ...state, basket: action.payload }

        case "SET_WISHLIST":
            return { ...state, wishlist: action.payload }
        case "REMOVE_BASKET":
            localStorage.setItem("basket", JSON.stringify([...state.basket.filter((a) => a.id !== action.payload)]))
            return {
                ...state,
                basket: [...state.basket.filter((a) => a.id !== action.payload)]
            }
        case "SET_COUNT":
            return { ...state, basket: action.payload }
        case "OPEN_MODAL":
            return { ...state, modalShow: true };
        case "CLOSE_MODAL":
            return { ...state, modalShow: false };
        case 'SET_TOTALPAGES':
            return { ...state, totalPagess: action.payload };
        case 'SET_PTOTALPAGES':
            return { ...state, ptotalPages: action.payload };
            case 'SET_ZTOTALPAGES':
                return { ...state, ztotalPages: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        case "FAV":
            return {
                ...state,
                fav: [...state.fav, action.payload],
            };
        case "REMOVE_FAV":
            console.log(state.fav, action.payload);
            return {
                ...state,
                fav: [...state.fav.filter((a) => a.id !== action.payload)],
            };
            case 'SET_ZONAS':
                return { ...state, zonas: action.payload };
                case 'SET_ZONA':
                    return { ...state, zona: action.payload };
        default:
            return state
    }
}

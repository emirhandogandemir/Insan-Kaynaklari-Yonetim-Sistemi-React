import { ADD_TO_FAVORITE,REMOVE_TO_FAVORITE } from "../actions/favoriteAction";
import { favoriteItems } from "../initialValues/favorite";


const initialState ={
    favoriteItems:favoriteItems
}
export default function cartReducer(state=initialState,{type,payload}){

switch (type) {
    case ADD_TO_FAVORITE:
        
        let jobAdvert =state.favoriteItems.find(j=>j.jobAdvert.id===payload.id)
        if(jobAdvert){
            return {
                ...state
            }
        }else{
            return {
                ...state,
                favoriteItems:[...state.favoriteItems,{jobAdvert:payload}]
            }
        }
        case REMOVE_TO_FAVORITE:
            return {
                ...state,
                favoriteItems:state.favoriteItems.filter(j=>j.jobAdvert.id!==payload.id)
            }
    default:
        return state;
}

}
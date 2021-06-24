export const ADD_TO_FAVORITE="ADD_TO_FAVORITE"

export const REMOVE_TO_FAVORITE="REMOVE_TO_FAVORITE"

export function addToFavorite(jobAdvert){
return{
    type:ADD_TO_FAVORITE,
    payload:jobAdvert
}

}

export function removeFromFavorite(jobAdvert){
    return{
        type:REMOVE_TO_FAVORITE,
        payload:jobAdvert
    }
}
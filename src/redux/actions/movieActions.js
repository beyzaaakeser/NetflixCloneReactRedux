import { ActionTypes } from "../actionTypes"

export const getPopular = () => (dispatch)=>{
    dispatch({
        type:ActionTypes.MOVIES_LOADING,
    })
}

 
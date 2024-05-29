import { ActionTypes } from "../actionTypes";

const initalState = {
    isLoading:false,
    error:null,
    movies:[],
}

const movieReducer = (state=initalState, action) => {
    const {type,payload} = action;
    switch(type){
        case ActionTypes.MOVIES_LOADING: 
        console.log(action)
        console.log(state)
        return {...state, isLoading:true}
    }
    return state
};

export default movieReducer;

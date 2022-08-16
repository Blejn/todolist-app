import { FILTER } from "../../Filter/constans"
import {SET_FILTER} from './actionType'
const initialState= FILTER.ALL;
const vibility = (state=initialState,action ) => {
switch(action.type){
    case SET_FILTER:{
        return action.payload.filter
    }
    default:{
        return state
    }


}
}
export default vibility;

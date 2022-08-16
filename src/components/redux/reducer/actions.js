import { filter } from '@chakra-ui/react';
import{ADD_TODO,DELETE_TODO,SET_FILTER,TOGGLE_TODO} from './actionType'

let nextToDoId=0;

export const addTodo = content => (
{ 
    type:ADD_TODO,
    payload:{
        id:++nextToDoId,
        content
    }
}
);

export const toggleToDo = id =>({
    type: TOGGLE_TODO,
    payload:{id}
})
export const setFilter = filter=>({
    type: SET_FILTER,
    payload:{filter}

});
export const deleteTodo = id =>({
    type: DELETE_TODO,
    payload:{id}
}
    
);
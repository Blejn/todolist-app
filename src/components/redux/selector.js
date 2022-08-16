import {FILTER} from"../Filter/constans"
export const getTodosByFilter=(store,vFilter)=>{
    switch(vFilter){
        case FILTER.DONE:{
            return store.todos.filter(todo=>todo.completed);

        }
          case FILTER.IN_PROGRESS:{
            return store.todos.filter(todo=>!todo.completed);
            
        }
        default:{
            return store.todos;
        }
    }

}
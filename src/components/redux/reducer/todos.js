
import {ADD_TODO,TOGGLE_TODO, DELETE_TODO} from './actionType';


const initialState={
    todos:[]
}

const todos = (state=initialState,action) => {
  switch(action.type){ 
    //ADDING TASK
    case ADD_TODO:{
      const{id, content} = action.payload;
      return{
        todos:[
          ...state.todos,
          {
     content, completed:false,id
          }
        ]
      }
    }
      
      //TODO TOGGLE
      case TOGGLE_TODO:{
        const{ id } = action.payload;
        const todos = state.todos.map(obj =>{
         return obj.id === id ? {...obj , completed: !obj.completed}:obj
        });
        return {todos}
      }




    //REMOVING TASK
      case DELETE_TODO:{
        //  const{ id } = action.payload;
   
          
        // const todos = state.todos.filter(obj =>{
        //    const{ id } = action.payload;
        //    console.log(obj)
        //   return obj.id === id ?{...obj, id: !obj.id} : obj
        
        // });
  
        return {
          todos:[...state,state.todos.filter((todo,id)=> id !== action.payload)]

    
      }
    }

    
    default:{
    return state;
    }
  }
}
export default  todos;


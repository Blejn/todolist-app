const initialState={
    todos:[{ 
      id: 1,
      content: 'coding',
      completed: false

    }]
}

const todos = (state=initialState,action) => {
  switch(action.type){
  
    default:
    return state;
  }
}
export default  todos;


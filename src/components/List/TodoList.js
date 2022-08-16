import React, { useState } from 'react'
import {Box,Text} from '@chakra-ui/react'
import { useSelector } from 'react-redux/es/exports';
import Todo from '../Todo/Todo';
import { getTodosByFilter } from '../redux/selector';

const TodoList = () => {
 
  const{todos,vibility} = useSelector(state=> state)
  const filterTodos= getTodosByFilter(todos,vibility)
  

  return (
 
   <Box textAlign="center" my="4" >
    { filterTodos.length ? todos.todos.map(todo => (
 
      <Todo key={todo.id} todo={todo}/>
   
    ))
    
    
    :

    <Text color={"white"}>
      NO TASKS TODAY!
   </Text>
}
   </Box>
  
  )
  }

export default TodoList;
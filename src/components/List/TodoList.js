import React, { useState } from 'react'
import {Box,Text} from '@chakra-ui/react'


const TodoList = () => {
  const [tasks, setTasks]= useState([]);
  if(tasks.length===0){
  return (
    
   <Box textAlign="center" my="4">
    <Text color={"white"}>
      NO TASKS TODAY!
   </Text>
   </Box>
  )
  }
  else
  return(
    <Box>


   </Box>
  )
}

export default TodoList
import { Checkbox, Text, Box, Button, Flex,Spacer } from '@chakra-ui/react'
import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import {toggleToDo} from '../redux/reducer/actions';
import {AiOutlineDelete} from 'react-icons/ai'
import {deleteTodo } from '../redux/reducer/actions'

const Todo = ({todo,idx}) => {
  const dispatch = useDispatch();


  const [checked, setChecked] = useState(false);

//CONTENT CHANGE
  const handleChecked=()=> dispatch(toggleToDo(todo.id));


  useEffect(()=>{
    setChecked(todo.completed)
  },[todo])




  return (
    <Flex height={50}  borderRadius={10} gap={2} alignItems={"center"} marginRight={"auto"} marginLeft={"auto"} mb={1} bgColor="rgb(0, 0, 0,0.3)" p={2} maxWidth={400}>
    <Box p={4} >
      <Checkbox onChange={handleChecked} colorScheme={"teal"} isChecked={checked} >
        <Text as={todo.completed && "del"} color={"white"} fontSize={20}> {todo.content}</Text>
        </Checkbox>
         </Box>
         

        <Spacer/>
           
            <Box  p={4}>

</Box>
    </Flex>
  )
}

export default Todo
import React, { useState } from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {Flex, FormControl,Input,Button} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/reducer/actions'
const Add = () => {
    // let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    const dispatch = useDispatch();
    const [ value, setValue]=useState('');
  


        const handleSubmit=(e)=>{
            e.preventDefault();
            dispatch(addTodo(value));
setValue('');
console.log(addTodo.value);




    }



    const handleInput=(e)=>{
        
        setValue(e.target.value); 
    }
// const handleAdding=(e)=>{
// e.preventDefault();
// setTask('')
//     }

  return (
 <form onSubmit={handleSubmit}  >

        
        <Flex align="center" marginLeft={0}>
          
            <FormControl align="center">
                 <Input 
                
                    maxWidth={400} 
                    value={value}
                    color="white" 
                    onChange={handleInput} 
                    size="md" 
                    width="auto" 
                    type="text"/>
            </FormControl>
      <Button  position={"absolute"}
                onClick={handleSubmit}
            borderRadius='10px' 
            // onClick={handleAdding}
            disabled={!value} 
            rightIcon={<AiOutlineArrowRight/>} 
            variant='outline' 
            color="white" 
            size='md' 
            colorScheme='purple'>Add
                 </Button>


        </Flex>
    </form>
  )
}

export default Add
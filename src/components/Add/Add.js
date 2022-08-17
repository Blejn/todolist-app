import React, { useEffect, useState } from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {Flex, FormControl,Input,Button} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/reducer/actions'
const Add = () => {
    // let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    const dispatch = useDispatch();
    const [ value, setValue]=useState('');
    const [items, setItems] = useState([]);

  

//ADD TASK
        const handleSubmit=(e)=>{
            if(!value){

            }
            else{

            e.preventDefault();
            setItems([...items,value]);
            dispatch(addTodo(value));
            
            setValue('');
        }





    }
useEffect(()=>{
localStorage.setItem('list',JSON.stringify(items));
},[items])


    const handleInput=(e)=>{
        
        setValue(e.target.value); 
    }
// const handleAdding=(e)=>{
// e.preventDefault();
// setTask('')
//     }

  return (
 <form onSubmit={handleSubmit} >

        
        <Flex align="center" marginLeft={"auto"} marginRight="auto" maxWidth={400}>
          
            <FormControl maxWidth={400}  align="center">
                 <Input 
                   align="center"
                   
                    maxWidth={400} 
                    value={value}
                    color="white" 
                    onChange={handleInput} 
                    size="md" 
                    width="max-content" 
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
    </form >
  )
}

export default Add
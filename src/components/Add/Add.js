import React, { useState } from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {Flex, FormControl,Input,Button} from '@chakra-ui/react'
const Add = () => {
    const [ value, setValue]=useState('');
    const[task, setTask] = useState('');


        const handleSubmit=(e)=>{
            e.preventDefault();
setValue('');


    }



    const handleInput=(e)=>{
        
        setValue(e.target.value); 
    }
// const handleAdding=(e)=>{
// e.preventDefault();
// setTask('')
//     }

  return (
 <form onSubmit={handleSubmit}>
    <Button 
            borderRadius='10px' 
            // onClick={handleAdding}
            disabled={!value} 
            rightIcon={<AiOutlineArrowRight/>} 
            variant='outline' 
            color="white" 
            size='md' 
            colorScheme='purple'>Add
    </Button>
        
        <Flex>
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



        </Flex>
    </form>
  )
}

export default Add
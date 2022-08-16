import React from 'react';
import {Container,Text, Heading} from '@chakra-ui/react'
import Add from './components/Add/Add';
import TodoList from './components/List/TodoList';
import Filter from './components/Filter/Filter';

function App() {
  return (
  
    <Container  width="100%" height="100vh" boxShadow='dark-lg' maxH="100vh"  maxW="100vw"  bgGradient="linear-gradient(to right, #fc5c7d, #6a82fb);" >
   <Heading  align="center" color="white">TO DO LIST</Heading>
 <Add/>
 <Filter/>
 <TodoList />
 
    </Container>
   
  );
}

export default App;

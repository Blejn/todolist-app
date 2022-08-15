import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {ChakraProvider} from '@chakra-ui/react'
import App from './App';

import store from './components/redux/store';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
     <ChakraProvider>
  <React.StrictMode>

      <App />

  </React.StrictMode>
   </ChakraProvider>
   </Provider>
);


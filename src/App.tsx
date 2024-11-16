import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          클린
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.scss';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import { Estimate } from './Pages/Estimate';
import Header from './Components/Header';
import { Top } from './Components/Top';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
            
            <Header />
            <div className='contents'>
            <Top/>
            <Routes>
              <Route path="/" element={<Main />}  />
              <Route path="/estimate" element={<Estimate />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;

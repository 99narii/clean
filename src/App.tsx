import React,{useRef} from 'react';
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
  const topRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const estimateRef = useRef<HTMLDivElement | null>(null);

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMain = () => {
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToEstimate = () => {
    if (estimateRef.current) {
      estimateRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <ChakraProvider>
      <div className="App" >
        <div ref={topRef}></div>
        <Header scrollToMain={scrollToMain} scrollToEstimate={scrollToEstimate} />
        <div className='contents'>
          <Top scrollToTop={scrollToTop} />
          <div ref={mainRef}>
            <Main />
          </div>
          <div ref={estimateRef}>
            <Estimate />
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;

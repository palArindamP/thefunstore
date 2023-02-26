import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/home/home';
import Pubg from './component/pubg/pubg';
import Call from './component/call/call';
import Coc from './component/coc/coc';
import Payments from './component/payments';
import './App.css';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pubg' element={<Pubg/>}/>
        <Route path='/call' element={<Call/>}/>
        <Route path='/coc' element={<Coc/>}/>
        <Route path='/payments' element={<Payments/>}/>
        
      </Routes>
    </BrowserRouter>
  
    
  );
}

export default App;

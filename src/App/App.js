import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../viewers/Login';
import ListPanneau from '../viewers/ListPanneau';

function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/home" exact element={<ListPanneau />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;

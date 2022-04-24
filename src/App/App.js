import React  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../viewers/Login';
import ListPanneau from '../viewers/ListPanneau';
import ListBatterie from '../viewers/ListBatterie';

function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/home" exact element={<ListPanneau />} />
          <Route path="/panneau" exact element={<ListPanneau />} />
          <Route path="/batterie" exact element={<ListBatterie />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;

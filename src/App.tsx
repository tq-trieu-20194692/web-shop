import React from 'react';
import Homepage from './pages/homepage/HomePage';
// import {Route, Routes } from 'react-router-dom';
// import ProductPage from './pages/product/ProductPage';

const App: React.FC = () => {
  return (
      <div className="App">
        <Homepage />
          {/*<Routes>*/}
          {/*    <Route path="/product/:productName" element={<ProductPage />} />*/}
          {/*</Routes>*/}
      </div>
  );
}

export default App;

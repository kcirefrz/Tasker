import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routess from './routes';
import Header from './components/Header';
 
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routess />
    </BrowserRouter>
  );
}
 
export default App;
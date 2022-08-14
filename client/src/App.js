import './App.css';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path='/' default />
          <Route element={<Detail/>} path='/products/:id' default />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

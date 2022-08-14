import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import UpdateProduct from './views/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path='/' default />
          <Route element={<Detail/>} path='/products/:id' default />
          <Route element={<UpdateProduct/>} path='/products/edit/:id' default />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import LogIn from './components/login/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/home';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Appheader></Appheader> */}
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/login' element={<LogIn/>}></Route>
        {/* <Route path='/register' element={<Register/>}></Route>
        <Route path='/customer' element={<Customer/>}></Route> */}
      </Routes>

      
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;

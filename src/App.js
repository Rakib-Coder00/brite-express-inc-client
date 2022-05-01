import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/Login/Login';
import Banner from './Components/Home/Banner/Banner';
import Home from './Components/Home/Home/Home';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
        <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/banner" element={<Banner/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;

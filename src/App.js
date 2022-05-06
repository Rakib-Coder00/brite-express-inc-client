import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/Login/Login';
import Banner from './Components/Home/Banner/Banner';
import Home from './Components/Home/Home/Home';
import Header from './Components/Header/Header';
import  { Toaster } from 'react-hot-toast';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';
import Signup from './Components/Auth/Signup/Signup';
import Blog from './Components/Blog/Blog';
import Inventory from './Components/Inventory/Inventory';
import MyItems from './Components/MyItems/MyItems';

function App() {
  return (
    <div>
        <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/banner" element={<Banner/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/inventory" element={<Inventory/>} />
        <Route path="/service/:serviceId" element={<MyItems/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;

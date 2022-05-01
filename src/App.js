import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Components/Home/Banner/Banner';
import Home from './Components/Home/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/banner" element={<Banner/>} />
      </Routes>
    </div>
  );
}

export default App;

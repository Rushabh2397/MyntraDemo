import Navbar from './components/Navbar/Navbar'
import ProductDetail from './components/ProductDetail/ProductDetail'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">

      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path={"/tshirts/:id"} element={<ProductDetail/>} />
      </Routes>

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from "./components/NavBar";
import Banner from './components/Banner';
import Movies from './components/Movies';
import Pagination from './components/Pagination';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Favourites from './components/Favourites';

function App() {
  return (
    <BrowserRouter>
   {/* <h1>Hello </h1> */}
   {/* <h2>Navbar</h2> */}
   <Navbar></Navbar>
   <Routes>
     <Route path="/" element={<>
      <Banner/>
      <Movies/>
      {/* <Pagination/> */}
     </>}/>

     <Route path="/Favourites" element={<Favourites/>}/>
    </Routes>
   {/* <Banner></Banner>
   <Movies></Movies>
   <Pagination></Pagination> */} 
   {/* <h2>banner</h2>
   <h2>trending</h2>
   <h2>pagination</h2> */}
   </BrowserRouter>
  );
}

export default App;

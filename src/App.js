import {Routes, Route} from "react-router-dom";
import About from "./component/About";


import Home from "./component/Home";
import Navbar from "./component/Navbar";


function App() {
  return (
    <>
    <Navbar />

    <Routes >
      <Route path="/" element={ <Home /> } />
      
     
      <Route path="/about" element={ <About /> } />
      
     
    </Routes>
    </>
  );
}

export default App;

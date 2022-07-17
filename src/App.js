import React from "react";
// import Footer from './Footer';
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Comingsoon from "./pages/Comingsoon";
import Github from "./pages/Github.jsx"
import './App.css'



import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

// import Product from "./components/Product.jsx"
import './style.css';
// import Contact from "./components/Contact";


function App() {
    
    return (
        <Router>
            {/* <switch> */}
                <div>
                    <Navbar />
                        <Routes>
                            <Route path="/github" exact element={<Github/>}></Route>
                            <Route path="/" exact element={<Comingsoon />}></Route>
                            <Route path="/About" element={<About />}></Route>
                            <Route path="/Blog" element={<Blog />}></Route>
                            <Route path="/Contact" element={<Contact />}></Route>
                        </Routes> 
                </div>

         {/* </switch> */}
            
            
        </Router>
       
    );
}
export default App;
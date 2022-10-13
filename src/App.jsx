import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home"
import Header from "./components/Header/Header";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                
                <Route path="/about" element={<About />} />    

                <Route path ="*" element = {<Error />} />    
            </Routes>
        </BrowserRouter>
    );
};

export default App;

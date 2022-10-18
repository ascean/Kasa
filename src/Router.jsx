import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home"
import Location from "./pages/Location/Location"
import locationDatas from './assets/logements.json'

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />  
                <Route path="/location/:id" element={<Location datas={locationDatas} />} />    
                <Route path ="*" element = {<Error />} />    
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;
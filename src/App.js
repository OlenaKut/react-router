import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contacts from './pages/Contacts.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route element={<About />}></Route>
        <Route element={<Contacts />}></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

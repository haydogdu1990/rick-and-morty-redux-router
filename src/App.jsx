import React from 'react';
import './App.css';

import Home from './pages/Home';
import Detail from './pages/Detail';

import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/detail/2">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/detail/:id" element={<Detail />} />

          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

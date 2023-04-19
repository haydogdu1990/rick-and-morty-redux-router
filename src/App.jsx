import React from 'react';
import './App.css';

import Home from './pages/Home';

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
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />

          <Route path="/users" element={<Users />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

import React from 'react';
import Header from './components/header';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router';
import Home from './pages/home';
import UserDetail from './pages/userDestail';
import './App.css';
import BothMe from './pages/bothMe';

const App = () => {
  return (
    <div className='header'>
      <Header/>
      <Container>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/both-me' exact element={<BothMe/>}/>
          <Route path='/users/:userId' exact element={<UserDetail/>}/>
        </Routes>
      </Container>
    </div>
  );
};

export default App;
// src/App.js
import React from 'react';
import Layout from '../src/Layout/Layout'  // Importing the Layout component
import LoginForm from './pages/User/LoginForm';

function App() {
  return (
    <div>
      <LoginForm />
      <Layout /> 
    </div>
  );
}

export default App;


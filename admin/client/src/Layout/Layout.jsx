import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import User from  '../pages/User/User';
import LoginForm from '../LoginForm';



const Layout = ({ children }) => {
  return (
    <Router>
   

      <div>
        <div style={{ marginLeft: '60px', padding: '20px' }}>
        {/* Header component can go here if needed */}
        { children }
      </div>
        <div>

          <Routes>

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<User />} />
            <Route path="/" element={<LoginForm />} />
            
            {/* Add more routes for additional pages */}
          </Routes>
          
        </div>
      </div>

    
    </Router>
  );
};

export default Layout;

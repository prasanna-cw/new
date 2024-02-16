// MainApp.js
import React from 'react';
import { render } from 'react-dom';
import Dashboard from './dashboard/Dashboard'; // Update the import statement

const  MainApp = () => <Dashboard />;

render(<MainApp />, document.getElementById('root'));

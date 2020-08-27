import React from 'react';
import Table from './js/components/Table.js';
import './App.css';

function App() {

    const url = 'http://localhost:5000/users'
  
    return (
    <div>
        <Table url={url} />
    </div>       
    );
  }
  
export default App
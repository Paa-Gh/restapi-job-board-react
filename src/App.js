import React from 'react';
import './App.css';
import JobsList from './components/JobsList';

function App() {
  return (
      <div className="App">
        <h1 className="m-4">Jobs</h1>
        <JobsList />
      </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Maps from './components/map/map'
import Task from './components/tasks/task'

function App() {
  return (
    <>
      <Header />
      <div class="row">
          <div class="col-lg">
            <Task />
            <Task />
            <Task />
          </div>
      </div>
    </>
  );
}

export default App;

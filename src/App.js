import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import Main from './views/Main';
import AddBook from './views/AddBook';
import Update from './views/Update';
import Detail from './views/Detail'


function App() {
  return (
    <div className="App">
      <h1>Books</h1>
      <Router>
        <Main path="/books" />
        <AddBook path="/" />
        <Update path="/:id/edit" />
        <Detail path="/:id" />
      </Router>
    </div>
  );
}

export default App;
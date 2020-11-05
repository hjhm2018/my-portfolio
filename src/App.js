import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faTrashAlt)

function App() {
  return (
    <div>
      <header>
        <Nav/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import NavBar from './Components/Navbar/navbar';
import Students from './Components/Students/students';
import './App.css'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <NavBar />
        <div className="students-container">
          <Students />
        </div>
      </div>
     );
  }
}
 
export default App;
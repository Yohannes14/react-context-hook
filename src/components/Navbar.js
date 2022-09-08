import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
    static contextType =ThemeContext;

  render() { 
   const {isLightTheme, light, dark} = this.context;
   const them = isLightTheme ? light: dark;
    return ( 
      <nav style={{background: them.ui, color:them.syntax}}>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}
 
export default Navbar;
import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
class BookList extends Component {
    static contextType =ThemeContext
  render() { 
    const {isLightTheme, light, dark} = this.context;
   const them = isLightTheme ? light: dark;
    return ( 
      <div className="book-list" style={{color:them.syntax, background:them.bg}}>
        <ul>
          <li style={{background:them.ui}}>the way of kings</li>
          <li style={{background:them.ui}}>the name of the wind</li>
          <li style={{background:them.ui}}>the final empire</li>
        </ul>
      </div>
    );
  }
}
 
export default BookList;
import  React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

class Layout extends Component{
  render(){
    return(
      <div>
      {this.props.children}
      <h1>Hello Mr/mss</h1>
       </div>
       )
   }
}
export default Layout;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewDeal from './deals/NewDeal';
import ActiveDeal from './deals/ActiveDeal';
import ClosedDeal from './deals/ClosedDeal';


class App extends Component {
  render() {
    return (

      

      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header
            mdl-layout--fixed-tabs">
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
              
              <span className="mdl-layout-title">   Ticketing System</span>
            </div>
            <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
              <a href="#fixed-tab-1" className="mdl-layout__tab is-active">Active Deal</a>
              <a href="#fixed-tab-2" className="mdl-layout__tab">Closed Deal</a>
              <a href="#fixed-tab-3" className="mdl-layout__tab">New Deal</a>
            </div>
          </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">Ticketing System</span>
          </div>
          <main className="mdl-layout__content">
            <section className="mdl-layout__tab-panel is-active" id="fixed-tab-1">
              <div className="page-content">
                <ActiveDeal />
              </div>
            </section>
            <section className="mdl-layout__tab-panel" id="fixed-tab-2">
              <div className="page-content">
                <ClosedDeal />
              </div>
            </section>
            <section className="mdl-layout__tab-panel" id="fixed-tab-3">
              <div className="page-content">
                <NewDeal />
              </div>
            </section>
          </main>
      </div>
      
    );
  }
}




export default App;







// <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to js by Harisu</h1>
//         </header>
//         <p className="App-intro">
//         Getting started with reactjs at facebook developer cycle buea<br/>
//           To get started, edit <code>src/App.js</code> and save to reload.
//           <h1 className = "title"> Hello Harisu how are you doing with react native</h1>
//         <ul className ="list">
//           <li> firstName</li>
//           <li> SecondName</li>
//           <li> thirdName </li>
//         </ul>
//         </p>
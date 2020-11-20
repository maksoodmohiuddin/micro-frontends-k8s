import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MicroFrontend from './MicroFrontend';
import './App.css';
import AppHeader from './AppHeader';
import About from './About';


//function App() {

const {
  REACT_APP_CONTENT_HOST: contentHost,
  REACT_APP_APP1_HOST: app1Host,
} = process.env;

const logoImageName = `/content/images/logo.svg`
const logoSrc = `${contentHost}${logoImageName}`

const App1 = () => (
  <MicroFrontend host={app1Host} name="App1" />
);

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={App1} />
        <Route exact path="/about" render={About} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;


//return (
//  <div className="App">
//    <header className="App-header">
//      <img src={logoSrc} className="App-logo" alt="logo" />
//      <p>
//         A React Micro-Frontend Container App deployed in Kubernates as Docker Container 
//      </p>

  //   </header>
//  </div>
//);
//

//export default App;

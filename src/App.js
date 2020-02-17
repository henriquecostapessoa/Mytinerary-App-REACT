import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landingpage from './Components/Landingpage';
import Loginpage from './Components/Loginpage';
import Signinpage from './Components/Signinpage';
import Citiespage from './Components/Citiespage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landingpage}/>
          <Route path="/loginpage" component={Loginpage}/>
          <Route path="/signinpage" component={Signinpage}/>
          <Route path="/citiespage" component={Citiespage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

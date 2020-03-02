import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {Provider} from 'react-redux';
import Landingpage from './Components/Landingpage';
import Loginpage from './Components/Loginpage';
import Registrationpage from './Components/Registrationpage';
import Citiespage from './Components/Citiespage';
import Itinerarypage from './Components/Itinerarypage';
import Activitiespage from './Components/Activitiespage';

function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landingpage}/>
          <Route path="/loginpage" component={Loginpage}/>
          <Route path="/registrationpage" component={Registrationpage}/>
          <Route path="/citiespage" component={Citiespage}/>
          <Route path="/itinerary" component={Itinerarypage}/>
          <Route path="/activitiespage" component={Activitiespage}/>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

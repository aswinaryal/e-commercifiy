import React from 'react';
import HomePage from './pages/homepage/homepage.pages';
import {Route,Switch} from 'react-router-dom';
import HatsPage from './pages/hatspage/hatspage.pages';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component = {HomePage} />
        <Route path='/hats' component = {HatsPage} />
      </Switch>
      
     </div>
  )
}
export default App;

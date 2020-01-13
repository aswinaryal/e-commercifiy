import React from 'react';
import HomePage from './pages/homepage/homepage.pages';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/signIn-signUp-page/signIn-signUp.component';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component = {HomePage} />
        <Route path='/shop' component = {ShopPage} />
        <Route path='/signin' component = {SignInSignUpPage} />
      </Switch>
      
     </div> 
  )
}
export default App;

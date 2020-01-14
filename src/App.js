import React, { Component } from 'react';
import HomePage from './pages/homepage/homepage.pages';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/signIn-signUp-page/signIn-signUp.component';
import {auth, createUserProfileDocument} from './firebase/firebase.util';

 
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async authenticUser => {
      if(authenticUser) {
        const userRef = await createUserProfileDocument(authenticUser);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
      this.setState({currentUser: authenticUser})
    })
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component = {HomePage} />
          <Route path='/shop' component = {ShopPage} />
          <Route path='/signin' component = {SignInSignUpPage} />
        </Switch>
        
       </div> 
    )
  }
  
}
export default App;

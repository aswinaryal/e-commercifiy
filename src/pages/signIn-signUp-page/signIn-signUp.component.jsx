import React from 'react';
import './signIn-signUp.styles.scss';
import SignIn from '../../components/sign-in/sign-in.compoenent';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInSignUpPage = () => (
    <div className="signIn-signUp">
        <SignIn />
        <SignUp />  
    </div>
    
);


export default SignInSignUpPage;


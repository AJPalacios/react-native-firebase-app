import React,{ Component } from 'react';
// firebase
import firebase from 'react-native-firebase';
// Components
import SignUp from '../components/AuthenticatorUi';
import AuthenticatorUi from '../components/AuthenticatorUi';
// Redux
import { connect } from 'react-redux';
import { login } from '../redux/actions/user';
class SignUpScreen extends Component{

    constructor(props){
        super(props);

    }
 

    createUser = async ({email, password})=>{
        try{
            let response = firebase.auth().createUserWithEmailAndPassword(email, password)
            const { user } = response;
            this.props.login(user);
            console.log(user);
        }catch(err){
            console.log(err);
        }
    }

    render(){
        return(
            <AuthenticatorUi 
                setPassword={this.setPassword} 
                setEmail={this.setEmail} 
                mainButtonTitle="Crear cuenta"
                secondaryButtonTitle="Ya tengo cuenta"
                navigationAction={() => this.props.navigation.navigate('Login') }
                mainAction={this.createUser}
            />
        );
    }
}

export default connect(
    (state) => ({user: state.user}),
    {
        login: login
    }

)(SignUpScreen);
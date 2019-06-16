import React,{ Component } from 'react';
// firebase
import firebase from 'react-native-firebase';
// Components
import SignUp from '../components/AuthenticatorUi';
import AuthenticatorUi from '../components/AuthenticatorUi';


class SignUpScreen extends Component{

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }

    setEmail = (email)=>{
        this.setState({
            email
        });
    }

    setPassword=(password)=>{
        this.setState({
            password
        })
    }

    createUser = async ()=>{
        try{
            let response = firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            const { user } = response;
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

export default SignUpScreen;
import React,{ Component } from 'react';
// firebase
import firebase from 'react-native-firebase';
// Components
import AuthenticatorUi from '../components/AuthenticatorUi';


class LoginScreen extends Component{

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

    login = async ()=>{
        try{
            let response = await firebase.auth().signInAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
            const { user } = response;
            console.log(user)
        }catch(err){
            console.log(err);
        }
    }

    render(){
        return(
            <AuthenticatorUi 
                setPassword={this.setPassword} 
                setEmail={this.setEmail}
                mainButtonTitle="Iniciar sesión"
                secondaryButtonTitle="No tengo cuenta"
                navigationAction={() => this.props.navigation.navigate('SignUp') } 
                mainAction={this.login}
            />
        );
    }
}

export default LoginScreen;
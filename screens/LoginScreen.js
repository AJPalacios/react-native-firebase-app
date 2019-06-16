import React,{ Component } from 'react';
// firebase
import firebase from 'react-native-firebase';
// Components
import AuthenticatorUi from '../components/AuthenticatorUi';
// Redux
import { connect } from 'react-redux';
import { login } from '../redux/actions/user';
class LoginScreen extends Component{

    constructor(props){
        super(props);

    }

    componentDidMount() {
        console.log(this.props.user);

    }

    componentDidUpdate() {
        console.log(this.props.user);
    }

    login = async ({email, password})=>{
        try{
            let response = await firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
            const { user } = response;
            this.props.login(user);
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

export default connect(
    // 1- Map state to props - function
    (state) => ( {user: state.user} ),
    // 2- Map dispatch to props - objeto JSON
    {
        login: login
    }



)(LoginScreen);
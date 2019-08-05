import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';
import { login } from '../redux/actions/user';

class AuthLoadingScreen extends Component{

    componentDidMount(){
        this.getUser()
    }

    getUser(){
        firebase.auth().onUserChanged((user)=>{
            this.props.login(user)
            this.props.navigation.navigate(user ? 'App' : 'Auth');
        });
    }

    render(){
        return(
            <View>

            </View>
        );
    }

}

export default connect(()=>{ return {}},{
    login
})(AuthLoadingScreen);
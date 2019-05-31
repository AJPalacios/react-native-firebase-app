import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'react-native-firebase';

class AuthLoadingScreen extends Component{

    componentDidMount(){
        this.getUser()
    }

    getUser(){
        firebase.auth().onUserChanged((user)=>{
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

export default AuthLoadingScreen;
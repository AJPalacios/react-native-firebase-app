import React, { Component } from 'react';
import firebase from 'react-native-firebase';
// components
import HomeComponent from '../components/HomeComponent';
import { IconButton } from 'react-native-paper';
import { connect } from 'react-redux';

class HomeScreen extends Component{

    componentDidMount() {
        this.db = firebase.firestore();

        this.readMyEvents();
    }

    readMyEvents = async () => {
       let ref = await this.db.collection('users').doc(this.props.user.uid)
        .collection('events').get()

        let events = ref.docs.map(docRef => docRef.data());
        console.log(events)
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle: {
                backgroundColor: navigation.getParam('backgroundColor') || '#222'
            },
            headerTitleStyle: {
                color: 'white'
            },
            headerRight: (
                <IconButton 
                    icon="power-settings-new" 
                    color="white" 
                    onPress={
                        ()=>{
                            firebase.auth().signOut();
                            navigation.navigate('Auth')
                        }
                    }
                />
            )
        }
    }

    setNavigationColor = (color) => {
        this.props.navigation.setParams({
            backgroundColor: color
        });
    }

    goToAddEvent = () =>{
        this.props.navigation.navigate('AddEvent');
    }

    render(){
        return(
            <HomeComponent 
                setNavigationColor={this.setNavigationColor} 
                goToAddEvent={this.goToAddEvent} 
                    
                />
        );
    }
}

export default connect((state) =>{
    return { user: state.user }
},)(HomeScreen);
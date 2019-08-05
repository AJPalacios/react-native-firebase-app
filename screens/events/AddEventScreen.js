import React, { Component } from 'react';
import AddEventUI from '../../components/events/AddEventUI';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import slugify from '../../lib/slugify';


class AddEventScreen extends Component{

  componentDidMount() {
    this.db = firebase.firestore();
  }

  add = async ({title, date}) => {

    // Guardar en firebase
    let slug =  slugify(title)
    await this.db.collection('users').doc(this.props.user.uid).collection('events').doc(slug).set({
      title,
      date
    })
    
    await this.db.collection('events').doc(slug).set({
      title,
      date
    })

    this.props.navigation.navigate('Home')

  }

  render(){
    return(
      <AddEventUI add={this.add}/>
    );
  }
}

export default connect(({user})=>{
  return { user }
})(AddEventScreen);
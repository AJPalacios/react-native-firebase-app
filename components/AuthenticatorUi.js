import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { TextInput, Button, Title, withTheme } from 'react-native-paper';


// styles
import styles from '../stylesheets/login.stylesheet';


class AuthenticatorUI extends Component{

    constructor(props) {
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

    render() {
        // console.log(props.theme)
        return(
            <View
            style={styles.container}
            >   
                <Title>Ingresar a tu cuenta.</Title>
                <TextInput
                    style={styles.formControl}
                    label="Correo Electrónico"
                    onChangeText={(email)=> this.setEmail(email) } 
                    value={this.state.email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    />
                
                <TextInput 
                    style={styles.formControl}
                    label="Password"
                    onChangeText={(password)=> this.setPassword(password) } 
                    value={this.state.password}
                    textContentType="password"
                    secureTextEntry={true}
                    />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    ...styles.formControl
                }}> 
                    <TouchableHighlight>
                        <Button 
                            color={this.props.theme.colors.accent}
                            onPress={()=>this.props.mainAction({email: this.state.email, password: this.state.password})} 
                            mode='contained'
                        >
                            {this.props.mainButtonTitle}
                        </Button>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Button onPress={()=>this.props.navigationAction()} mode='contained'>
                            {this.props.secondaryButtonTitle}
                        </Button>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default withTheme(AuthenticatorUI); // inject prop theme
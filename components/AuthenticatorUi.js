import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { TextInput, Button, Title, withTheme } from 'react-native-paper';


// styles
import styles from '../stylesheets/login.stylesheet';


AuthenticatorUI = (props) => {
    console.log(props.theme)
    return(
        <View
        style={styles.container}
        >   
            <Title>Ingresar a tu cuenta.</Title>
            <TextInput
                style={styles.formControl}
                label="Correo Electrónico"
                onChangeText={(email)=> props.setEmail(email) } 

                />
            
            <TextInput 
                style={styles.formControl}
                label="Password"
                onChangeText={(password)=> props.setPassword(password) } 

                />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                ...styles.formControl
            }}> 
                <TouchableHighlight>
                    <Button 
                        color={props.theme.colors.accent}
                        onPress={()=>props.mainAction()} 
                        mode='contained'
                    >
                        {props.mainButtonTitle}
                    </Button>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Button onPress={()=>props.navigationAction()} mode='contained'>
                        {props.secondaryButtonTitle}
                    </Button>
                </TouchableHighlight>
            </View>
        </View>
    );
}

export default withTheme(AuthenticatorUI); // inject prop theme
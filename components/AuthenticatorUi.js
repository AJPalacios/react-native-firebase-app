import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default (props) => {
    return(
        <View>
            <Text>Correo Electrónico</Text>
            <TextInput onChangeText={(email)=> props.setEmail(email) } />
            <Text>Password</Text>
            <TextInput onChangeText={(password)=> props.setPassword(password) } />
            <Button title={props.mainButtonTitle} onPress={()=>props.mainAction()} />
            <Button title={props.secondaryButtonTitle} onPress={()=>props.navigationAction()} />
        </View>
    );
}
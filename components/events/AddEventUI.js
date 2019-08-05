import React, { Component } from 'react';
import { View } from 'react-native';
import { Title, TextInput, Button, withTheme } from 'react-native-paper';
import { tsPropertySignature } from '@babel/types';

class AddEventUI extends Component{

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      date: (new Date()).toJSON()
    }

  }


  submit = () => {
    this.props.add(this.state)
  }

  render() {

    const { title } = this.state;

    return(
      <View>
        <Title>Organiza un intercambio</Title>
        <TextInput 
          label="Título (intercambio de la oficina)"
          value={title}
          onChangeText={(title) => this.setState({ title }) }
        />
        <View>
          <Button 
            mode="contained" 
            color={this.props.theme.colors.accent}
            onPress={this.submit}
            >
              Crear evento
          </Button>
        </View>
      </View>
    );
  }
}

export default withTheme(AddEventUI);
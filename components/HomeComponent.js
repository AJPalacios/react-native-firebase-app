import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { withTheme } from 'react-native-paper';

class HomeComponent extends Component {

  componentDidMount() {
    this.props.setNavigationColor(this.props.theme.colors.primary);
  }

  render(){
    return(
      <View>
        <Text>Bienvenido</Text>
      </View>
    );
  }
}

export default withTheme(HomeComponent);
import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { withTheme, FAB } from 'react-native-paper';

import baseStyles from '../stylesheets/base.stylesheets';

class HomeComponent extends Component {

  componentDidMount() {
    this.props.setNavigationColor(this.props.theme.colors.primary);
  }

  render(){
    return(
      <View style={{ flex : 1}}>
        <Text>Bienvenido</Text>
        <FAB 
          icon="add"
          color="white"
          style={{ backgroundColor: this.props.theme.colors.primary, ...baseStyles.fab }}
          onPress={this.props.goToAddEvent}
        />
      </View>
    );
  }
}

export default withTheme(HomeComponent);
import { createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';

const AuthNavigator = createStackNavigator({
    SignUp: SignUpScreen,
    Login: LoginScreen
},{
    initialRouteName: "SignUp"
});

const AppNavigator = createStackNavigator({
    Home: HomeScreen
},{
    defaultNavigationOptions: ({navigation}) => {
        return {
            title: "Intercambios 🎁"
        }
    }
});


export default createAppContainer(
    createSwitchNavigator({
        Auth: AuthNavigator,
        App:  AppNavigator,
        AuthLoading: AuthLoadingScreen
    },{
        initialRouteName: "AuthLoading"
    })
);
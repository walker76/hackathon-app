// SignUp.js
import React from 'react';
import logo from '../assets/images/icon.png';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import * as firebase from 'firebase';

// console.log(logo);
// function Header(){
//     return <img src={logo} alt="Logo" />;
// }

// export default Header;

export default class SignUp extends React.Component {
    constructor(props){
        super(props);

        this.state = { 
            email: '', 
            password: '', 
            errorMessage: null 
        }
    }

    _registerUser(user){

        console.log("About to register user", user);

        return fetch('https://wacode-hackathon-api.herokuapp.com/user/insert', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: user.user.uid,
                jobsPosted: [],
                jobsWorking: []
            }),
        }).catch(err => {
            console.error(err);
        })
    }

    handleSignUp = () => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
            //console.log(res);
            this._registerUser(res)
            .then(() => 
                this.props.navigation.navigate('Main')
            );
        })
        .catch(error => this.setState({ errorMessage: error.message }))
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Sign Up</Text>
                {this.state.errorMessage !== null &&
                <Text style={{ color: 'red' }}>
                    {this.state.errorMessage}
                </Text>}
                <TextInput
                placeholder="Email"
                autoCapitalize="none"
                style={styles.textInput}
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
                />
                <TextInput
                secureTextEntry
                placeholder="Password"
                autoCapitalize="none"
                style={styles.textInput}
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
                />
                <Button title="Sign Up" onPress={this.handleSignUp} />
                <Button
                title="Already have an account? Login"
                onPress={() => this.props.navigation.navigate('Login')}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})
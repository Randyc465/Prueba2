// screens/RegisterScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import firebase from '../firebaseConfig'; // Importa firebaseConfig desde la ubicación correcta

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Login');
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Register Screen</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 10, margin: 10, width: 200 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, padding: 10, margin: 10, width: 200 }}
      />
      <Button title="Register" onPress={register} />
    </View>
  );
};

export default RegisterScreen;

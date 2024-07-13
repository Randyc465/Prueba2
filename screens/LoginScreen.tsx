// screens/LoginScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const login = () => {
    // Aquí iría la lógica de autenticación con Firebase
    // Por simplicidad, aquí simplemente navegamos a la pantalla de Welcome
    navigation.navigate('Welcome');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={login} />
    </View>
  );
};

export default LoginScreen;

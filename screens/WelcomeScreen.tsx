// screens/WelcomeScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const logout = () => {
    // Aquí iría la lógica para cerrar sesión
    // Por simplicidad, aquí simplemente navegamos a la pantalla de Login
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome Screen</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default WelcomeScreen;

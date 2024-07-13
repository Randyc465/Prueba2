// screens/ProfileScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from '../firebaseConfig'; // Importa firebaseConfig desde la ubicación correcta

const ProfileScreen = () => {
  const [displayName, setDisplayName] = useState('');
  const [bio, setBio] = useState('');

  const saveProfile = () => {
    // Aquí iría la lógica para guardar el perfil del usuario en Firebase
    // Por simplicidad, aquí no se implementa la lógica de guardado
    console.log('Saving profile...');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <TextInput
        placeholder="Display Name"
        value={displayName}
        onChangeText={setDisplayName}
        style={{ borderWidth: 1, padding: 10, margin: 10, width: 200 }}
      />
      <TextInput
        placeholder="Bio"
        value={bio}
        onChangeText={setBio}
        style={{ borderWidth: 1, padding: 10, margin: 10, width: 200 }}
      />
      <Button title="Save Profile" onPress={saveProfile} />
    </View>
  );
};

export default ProfileScreen;

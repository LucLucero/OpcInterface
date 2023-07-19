import React, { useState } from 'react';
import { View, TextView, Button } from 'react-native';
import Login from '/screens/login';
import Register from './screens/Register';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('login');

  const handleRegisterLinkPress = () => {
    setCurrentScreen('register');
  };

  const renderScreen = () => {
    if (currentScreen === 'login') {
      return <Login />;
    } else if (currentScreen === 'register') {
      return <Register />;
    }
  };

  return (
    <View>
      {renderScreen()}
      {currentScreen === 'login' && (
        <Button title="Caso não tenha uma conta, clique aqui para criar" onPress={handleRegisterLinkPress} />
      )}
    </View>
  );
};

export default App;

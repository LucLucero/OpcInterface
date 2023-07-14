import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './navigation/AppNavigator';

// Componente raiz do aplicativo
const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}

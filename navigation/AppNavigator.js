import { createStackNavigator } from 'react-navigation-stack';
import HomePage from '../views/HomePage';

// Configuração das rotas
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      title: 'Home',
    },
  },
  // Adicione outras rotas aqui, se necessário
});

export default AppNavigator;
//first commit
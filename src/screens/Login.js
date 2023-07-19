import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Faz a solicitação HTTP para autenticação no backend
    axios.post('http://localhost:3000/login', {
      email,
      password
    })
    .then(response => {
      // Se a autenticação for bem-sucedida, você pode armazenar o token de autenticação
      const token = response.data.token;
      // Armazene o token de forma segura no AsyncStorage ou SecureStore
      // ...

      
      console.log("sucessful");
      
    })
    .catch(error => {
      // Se ocorrer um erro durante a autenticação, você pode exibir uma mensagem de erro para o usuário
      console.error(error);
    });
  };


//   const handleRegisterRoute = () => {
//     const [currentScreen, setCurrentScreen] = useState('Login');
//     setCurrentScreen = 'Resgister';
//   }

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} />
       {/* <Button title="Create Account" onPress={handleRegisterRoute} /> */}
    </View>
  );
};

export default Login;
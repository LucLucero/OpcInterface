import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';
import bcrypt from 'bcryptjs';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    bcrypt.genSalt(10, (error, salt) => {
      if (error) {
        console.error('Erro ao gerar salt:', error);
        return;
      }

      bcrypt.hash(password, salt, (error, hashedPassword) => {
        if (error) {
          console.error('Erro ao gerar hash:', error);
          return;
        }

        axios.post('http://localhost:3000/register', {
          email,
          password
        })
        .then(response => {
          console.log(response.data.message);
          // Resto do código em caso de sucesso...
        })
        .catch(error => {
          console.error(error);
          // Resto do código em caso de erro...
        });
      });
    });
  };

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
      <Button title="Criar Conta" onPress={handleRegister} />
    </View>
  );
};

export default Register;

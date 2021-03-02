import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { View } from 'react-native';
import { Button, Image, Input } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

const HomeScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPssword] = useState('');

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <Image
        source={{
          uri:
            'https://mir-s3-cdn-cf.behance.net/projects/404/d6991d86437115.Y3JvcCw4MDgsNjMyLDAsMA.jpg',
        }}
        style={styles.image}
      />
      <View style={styles.inputConatiner}>
        <Input
          autoFocus
          placeholder="Email"
          type="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          secureTextEntry
          placeholder="Password"
          type="Password"
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

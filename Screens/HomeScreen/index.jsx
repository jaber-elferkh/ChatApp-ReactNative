import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { View } from 'react-native';
import { Button, Image, Input } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

const HomeScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const image = '../../assets/images/Logo.png';

  const signIn = () => {};

  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.root}>
      <StatusBar style="light" />
      <Image
        source={{
          uri:
            'https://cdn.logojoy.com/wp-content/uploads/2018/08/23144949/2-1.png',
        }}
        style={{ width: 200, height: 200, marginBottom: 30, borderRadius: 100 }}
        resizeMode={'cover'}
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

      <View style={styles.buttons}>
        <Button
          buttonStyle={{ backgroundColor: '#5A1BEE' }}
          containerStyle={styles.button}
          onPress={signIn}
          title="Login"
        />
        <Button
          buttonStyle={{
            borderColor: '#5A1BEE',
            borderWidth: 1,
          }}
          font
          containerStyle={styles.button}
          type="outline"
          title="Register"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;

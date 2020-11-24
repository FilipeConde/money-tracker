import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import BalanceLabel from '../../Components/BalanceLabel';

export default function NewEntry({navigation}) {
  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View>
        <TextInput style={styles.input}></TextInput>
        <TextInput style={styles.input}></TextInput>
        <Button title="GPS" />
        <Button title="Câmera" />
      </View>
      <View>
        <Button title="Adicionar" />
        <Button title="Cancelar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 10,
    //alignItems: 'center',
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
  },
});

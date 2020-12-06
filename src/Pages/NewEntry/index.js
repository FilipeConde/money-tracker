import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import BalanceLabel from '../../Components/BalanceLabel';
import {saveEntry} from '../../services/Entries';

export default function NewEntry({navigation}) {
  const currentBalance = '2.035,12';
  const [amount, setAmount] = useState('0');

  const save = () => {
    const data = {
      amount: parseFloat(amount),
    };
    console.log('NewEntry :: save ', data);
    saveEntry();
  };

  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />

      <View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setAmount(text)}
          value={amount}></TextInput>
        <TextInput style={styles.input}></TextInput>
        <Button title="GPS" />
        <Button title="Câmera" />
      </View>
      <View>
        <Button title="Adicionar" onPress={save} />
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

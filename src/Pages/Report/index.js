import React from 'react';
import {View, Text, StyleSheet, Picker, Button} from 'react-native';

import BalanceLabel from '../../Components/BalanceLabel';
import EntrySummary from '../../Components/EntrySummary';
import EntryList from '../../Components/EntryList';

export default function Report() {
  const currentBalance = '2.035,12';

  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />
      <View>
        <Picker>
          <Picker.Item label="Todas categorias" />
        </Picker>
        <Picker>
          <Picker.Item label="Últimos 7 dias" />
        </Picker>
      </View>
      <EntrySummary />
      <EntryList />
      <View>
        <Button title="Salvar"></Button>
        <Button title="Fechar"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

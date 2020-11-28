import React from 'react';
import {View, Text, StyleSheet, Picker, Button} from 'react-native';

import BalanceLabel from '../../Components/BalanceLabel';
import EntrySummary from '../../Components/EntrySummary';
import EntryList from '../../Components/EntryList';

export default function Report() {
  const saldo = '2.064,34';

  const entriesGrouped = [
    {key: '1', description: 'Alimentação', amount: '$200'},
    {key: '2', description: 'Combustível', amount: '$12'},
    {key: '3', description: 'Aluguel', amount: '$120'},
    {key: '4', description: 'Lazer', amount: '$250'},
    {key: '5', description: 'Outros', amount: '$1200'},
  ];
  const entries = [
    {key: '1', description: 'Padaria Asa Branca', amount: 10},
    {key: '2', description: 'Supermercado Isadora', amount: 190},
    {key: '3', description: 'Posto Ipiranga', amount: 120},
  ];

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
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />
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

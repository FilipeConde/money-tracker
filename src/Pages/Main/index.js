import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import BalancePanel from '../../Components/BalancePanel';
import EntrySummary from '../../Components/EntrySummary';
import EntryList from '../../Components/EntryList';
import {saveEntry} from '../../services/Entries';

const Main = ({navigation}) => {
  const saldo = '2.064,34';

  const save = () => {
    saveEntry();
  };

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
      <BalancePanel currentBalance={saldo} />
      <Button
        onPress={() => navigation.navigate('NewEntry')}
        title="Adicionar"
      />

      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default Main;

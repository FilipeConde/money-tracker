import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import BalancePanel from '../../Components/BalancePanel';
import EntrySummary from '../../Components/EntrySummary';
import EntryList from '../../Components/EntryList';

const Main = ({navigation}) => {
  const saldo = '2.064,34';

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

      <EntrySummary />
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

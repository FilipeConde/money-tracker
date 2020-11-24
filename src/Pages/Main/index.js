import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import BalancePanel from '../../Components/BalancePanel';
import EntrySummary from '../../Components/EntrySummary';
import EntryList from '../../Components/EntryList';

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BalancePanel />
      <Button
        onPress={() => navigation.navigate('NewEntry')}
        title="Adicionar"
      />

      <EntrySummary />
      <EntryList />
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

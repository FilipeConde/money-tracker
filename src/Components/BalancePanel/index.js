import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

export default function BalancePanel() {
  const addEntry = () => {
    //console.log('eita');
    alert('Abrir tela de acicionar lançamento!');
  };

  return (
    <View style={styles.container}>
      <BalancePanelLabel />
      <BalancePanelChart />
      <Button onPress={addEntry} title="Adicionar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

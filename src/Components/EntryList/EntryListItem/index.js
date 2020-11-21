import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

export default function EntryListItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Últimos lançamentos</Text>
      <FlatList
        data={[
          {key: 'Padaria Asa Branca: $10'},
          {key: 'Suermercado Isadora: $190'},
          {key: 'Posto Ipiranga: $120'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

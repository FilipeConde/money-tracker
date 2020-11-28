import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

export default function EntrySummaryList({entriesGrouped}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Categorias</Text>
      <FlatList
        data={entriesGrouped}
        renderItem={({item}) => (
          <Text>
            {item.description} - ${item.amount}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

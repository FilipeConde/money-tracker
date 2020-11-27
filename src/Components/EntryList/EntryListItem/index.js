import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

export default function EntryListItem({entries}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Últimos lançamentos</Text>
      <FlatList
        data={entries}
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
    //flex: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

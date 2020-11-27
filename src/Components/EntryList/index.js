import React from 'react';
import {View, StyleSheet} from 'react-native';
import EntryListItem from './EntryListItem';

export default function EntryList({entries}) {
  return (
    <View style={styles.container}>
      <EntryListItem entries={entries} />
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

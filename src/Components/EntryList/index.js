import React from 'react';
import {View, StyleSheet} from 'react-native';
import EntryListItem from './EntryListItem';

export default function EntryList() {
  return (
    <View style={styles.container}>
      <EntryListItem />
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

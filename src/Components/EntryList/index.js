import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import EntryListItem from './EntryListItem';

export default function EntryList() {
  return (
    <View style={styles.container}>
      <EntryListItem />
      <EntryListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

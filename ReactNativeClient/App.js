import React from 'react';
import { Text, View } from 'react-native';
import IssueList from './IssueList';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
          Issue Tracker
        </Text>
        <IssueList />
      </View>
    );
  }
}
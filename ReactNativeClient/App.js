import React from 'react';
import { Text, View } from 'react-native';
import IssueList from './IssueList';
import styles from './styles';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <Text style={styles.appTitle}>
          Issue Tracker
        </Text>
        <IssueList />
      </View>
    );
  }
}
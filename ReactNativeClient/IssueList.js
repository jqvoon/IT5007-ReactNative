import React, {useState} from 'react';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    Button,
    useColorScheme,
    View,
  } from 'react-native';

  const dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');

  function jsonDateReviver(key, value) {
    if (dateRegex.test(value)) return new Date(value);
    return value;
  }

  async function graphQLFetch(query, variables = {}) {
    try {
        /****** Q4: Start Coding here. State the correct IP/port******/
        const response = await fetch('http://10.0.2.2:3000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ query, variables })
        /****** Q4: Code Ends here******/
      });
      const body = await response.text();
      const result = JSON.parse(body, jsonDateReviver);
  
      if (result.errors) {
        const error = result.errors[0];
        if (error.extensions.code == 'BAD_USER_INPUT') {
          const details = error.extensions.exception.errors.join('\n ');
          alert(`${error.message}:\n ${details}`);
        } else {
          alert(`${error.extensions.code}: ${error.message}`);
        }
      }
      return result.data;
    } catch (e) {
      alert(`Error in sending data to server: ${e.message}`);
    }
  }

class IssueFilter extends React.Component {
    render() {
      return (
        <>
        {/****** Q1: Start Coding here. ******/}
        <View>
          <Text>IssueFilter</Text>
        </View>
        {/****** Q1: Code ends here ******/}
        </>
      );
    }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center' },
  wrappedText: { textAlign: 'center', flexWrap: 'wrap', paddingHorizontal: 8, paddingVertical: 6 },
  dataWrapper: { marginTop: -1 },
  row: { height: 60, backgroundColor: '#E7E6E1' },

  label: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
});

const width= [40,80,80,80,80,80,200];

function IssueRow(props) {
    const issue = props.issue;
    {/****** Q2: Coding Starts here. Create a row of data in a variable******/}
    const rowData = [
      issue.id,
      issue.status,
      issue.owner,
      issue.effort,
      issue.created ? issue.created.toDateString() : '',
      issue.due ? issue.due.toDateString() : '',
      issue.title,
    ];
    {/****** Q2: Coding Ends here.******/}
    return (
      <>
      {/****** Q2: Start Coding here. Add Logic to render a row  ******/}
      <Row data={rowData} widthArr={width} style={styles.row} textStyle={styles.wrappedText} />
      {/****** Q2: Coding Ends here. ******/}  
      </>
    );
  }
  
  
  function IssueTable(props) {
    const issueRows = props.issues.map(issue =>
      <IssueRow key={issue.id} issue={issue} />
    );

    {/****** Q2: Start Coding here. Add Logic to initalize table header  ******/}
    const tableHead = ['ID', 'Status', 'Owner', 'Effort', 'Created', 'Due', 'Title'];
    {/****** Q2: Coding Ends here. ******/}
    
    
    return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View>
        <Table borderStyle={{ borderWidth: 1 }}>
            <Row data={tableHead} widthArr={width} style={styles.header} textStyle={styles.text} />
              {issueRows}
          </Table>
        </View>
      </ScrollView>
    </View>
    );
  }

  
  class IssueAdd extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
       this.state = {
        owner: '',
        effort: '',
        title: '',
        due: '', // optional, format: YYYY-MM-DD
      };
    }
  
    /****** Q3: Start Coding here. Add functions to hold/set state input based on changes in TextInput******/
    /****** Q3: Code Ends here. ******/
    
    handleSubmit() {
      // Create an issue from state variables and call createIssue.
      const { owner, effort, title, due } = this.state;

      // If blank input, alert and return
      if (!owner.trim() || !effort.trim() || !title.trim()) {
        alert('Owner, Effort, and Title are required.');
        return;
      }

      // Validate effort is a positive Number
      const positiveNumber = /^[1-9][0-9]*$/;
      if (!positiveNumber.test(effort)) {
        alert('Effort must be a positive Number.');
        return;
      }

      if (due) {
        const dateOnly = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateOnly.test(due)) {
          // Validate due date format if provided
          alert('Due date must be in YYYY-MM-DD format.');
          return;
        } else {
          // Ensure due date is today or later
          const dueDate = new Date(`${due}T00:00:00`);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          if (dueDate < today) {
            alert('Due date must be today or later.');
            return;
          }
        }
      }

      const newIssue = {
        owner: owner.trim(),
        effort: parseInt(effort, 10),
        title: title.trim(),
        due: due ? new Date(`${due}T00:00:00`) : null,
      };

      if (this.props.createIssue) this.props.createIssue(newIssue);

      // Clear state after submission
      this.setState({
        owner: '',
        effort: '',
        title: '',
        due: ''
      });
    }
  
    render() {
      const { owner, effort, title, due } = this.state;
      return (
        <View style={styles.container}>
          <Text style={styles.label}>Owner*</Text>
          <TextInput
            style={styles.input}
            value={owner}
            onChangeText={(text) => this.setState({ owner: text })}
            placeholder="Owner name"
          />

          <Text style={styles.label}>Effort*</Text>
          <TextInput
            style={styles.input}
            value={effort}
            onChangeText={(text) => {
              if (/^[0-9]*$/.test(text)) {
                this.setState({ effort: text });
              }
            }}
            placeholder="Effort (positive number)"
            keyboardType="numeric"
          />

          <Text style={styles.label}>Title*</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => this.setState({ title: text })}
            placeholder="Issue title"
          />

          <Text style={styles.label}>Due Date</Text>
          <TextInput
            style={styles.input}
            value={due}
            onChangeText={(text) => {
              if (/^[0-9-]*$/.test(text)) {
                this.setState({ due: text });
              }
            }}
            placeholder="YYYY-MM-DD"
            keyboardType="numeric"
          />

          <View style={{ marginTop: 10 }}>
            <Button title="Add Issue" onPress={this.handleSubmit} />
          </View>
        </View>
      );
    }
  }

class BlackList extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
        ownerInput: '',
      };
    }

    handleOwnerChange(text) {
      this.setState({ ownerInput: text });
    }

    async handleSubmit() {
      const { ownerInput } = this.state;
      if (!ownerInput.trim()) {
        alert('Owner name is required.');
        return;
      }

      if (this.props.addToBlacklist) this.props.addToBlacklist(ownerInput.trim());
      this.setState({ ownerInput: '' });
    }

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.label}>Blacklist Owner</Text>
          <TextInput
            style={styles.input}
            value={this.state.ownerInput}
            onChangeText={(text) => this.handleOwnerChange(text)}
            placeholder="Enter owner name"
          />
          <View style={{ marginTop: 10 }}>
            <Button title="Add to Blacklist" onPress={this.handleSubmit} />
          </View>
        </View>
      );
    }
}

export default class IssueList extends React.Component {
    constructor() {
        super();
        this.state = { issues: [] };
        this.createIssue = this.createIssue.bind(this);
        this.addToBlacklist = this.addToBlacklist.bind(this);
    }
    
    componentDidMount() {
     this.loadData();
    }

    async loadData() {
      const query = `query {
          issueList {
          id title status owner
          created effort due
          }
      }`;

      const data = await graphQLFetch(query);
      if (data) {
          this.setState({ issues: data.issueList });
      }
    }

    async createIssue(issue) {
      const query = `mutation issueAdd($issue: IssueInputs!) {
          issueAdd(issue: $issue) {
          id
          }
      }`;

      const data = await graphQLFetch(query, { issue });
      if (data) {
          this.loadData();
      }
    }

    async addToBlacklist(ownerInput) {
      const query = `mutation addToBlacklist($nameInput: String!) {
        addToBlacklist(nameInput: $nameInput)
      }`;

      const data = await graphQLFetch(query, { nameInput: ownerInput });
      if (data) {
        alert(`Added ${ownerInput} to blacklist.`);
      }
    }

    render() {
      return (
      <ScrollView>
      {/****** Q1: Start Coding here. ******/}
      <IssueFilter />
      {/****** Q1: Code ends here ******/}


      {/****** Q2: Start Coding here. ******/}
      <IssueTable issues={this.state.issues} />
      {/****** Q2: Code ends here ******/}

      
      {/****** Q3: Start Coding here. ******/}
      <IssueAdd createIssue={this.createIssue} />
      {/****** Q3: Code Ends here. ******/}

      {/****** Q4: Start Coding here. ******/}
      <BlackList addToBlacklist={this.addToBlacklist} />
      {/****** Q4: Code Ends here. ******/}
      </ScrollView>
    );
  }
}

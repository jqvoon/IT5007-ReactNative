import { StyleSheet } from 'react-native';

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
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f3f3f3',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  tabButtonActive: {
    backgroundColor: '#537791',
  },
  tabButtonText: {
    fontWeight: 'bold',
    color: '#333',
  },
  tabButtonTextActive: {
    color: '#fff',
  },
  tableContainer: {
    borderWidth: 1,
  },
  buttonContainer: {
    marginTop: 10,
  },
  appContainer: {
    flex: 1,
    padding: 20,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default styles;

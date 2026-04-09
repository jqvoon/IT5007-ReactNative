import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // App container
  appContainer: {
    flex: 1,
    padding: 12,
    backgroundColor: '#f5f7fa',
  },
  appTitle: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
    color: '#1a1a2e',
    paddingHorizontal: 16,
    paddingTop: 12,
  },

  // Main container
  container: { 
    flex: 1, 
    padding: 12, 
    backgroundColor: '#f5f7fa' 
  },

  // Table styles
  header: { 
    height: 50, 
    backgroundColor: '#0f3460',
    borderBottomWidth: 2,
    borderBottomColor: '#16213e',
  },
  text: { 
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
  wrappedText: { 
    textAlign: 'center', 
    flexWrap: 'wrap', 
    paddingHorizontal: 6, 
    paddingVertical: 8,
    color: '#1a1a2e',
    fontSize: 11,
  },
  dataWrapper: { marginTop: -1 },
  row: { 
    height: 60, 
    backgroundColor: '#fff',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: '#d4d4d4',
    borderRadius: 8,
    overflow: 'hidden',
    marginHorizontal: 12,
    marginVertical: 12,
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },

  // Form styles
  label: {
    fontWeight: '600',
    marginTop: 14,
    marginBottom: 6,
    color: '#1a1a2e',
    fontSize: 13,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d4d4d4',
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
    color: '#1a1a2e',
    fontSize: 14,
  },

  // Tab bar styles
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#e8e8e8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  tabButtonActive: {
    backgroundColor: '#0f3460',
  },
  tabButtonText: {
    fontWeight: '600',
    color: '#666',
    fontSize: 13,
  },
  tabButtonTextActive: {
    color: '#fff',
    fontWeight: '700',
  },

  // Button
  button: {
    marginTop: 14,
    backgroundColor: '#15416d',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});

export default styles;

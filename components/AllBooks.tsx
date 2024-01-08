import { StyleSheet, Text, View } from 'react-native';

const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'lime'];

const AllBooks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Books</Text>
      <View style={styles.books}>
        {colors.map((color, index) => (
          <View key={index} style={[styles.box, { backgroundColor: color }]} />
        ))}
      </View>
    </View>
  );
};

export default AllBooks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  books: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  box: {
    width: 100,
    height: 140,
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});

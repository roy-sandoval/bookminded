import { StyleSheet, Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '../utils/supabase';

const AddBook = () => {
  const addBook = async () => {
    const { data, error } = await supabase.from('books').insert([{ title: 'New Book' }]);

    if (error) {
      console.error('Error adding book: ', error);
    } else {
      console.log('Book added: ', data);
    }
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={addBook}>
        <Ionicons name="add" size={24} color="white" />
      </Pressable>
    </View>
  );
};
export default AddBook;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 50,
    padding: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

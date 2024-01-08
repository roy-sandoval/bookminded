import AddBook from 'components/AddBook';
import AllBooks from 'components/AllBooks';
import { SafeAreaView, View } from 'react-native';

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ActionItems/> */}
      <AllBooks />
      <AddBook />
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
  },
};

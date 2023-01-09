import styles from './Header.styles';
import {View} from 'react-native';
import {Search} from '@src/components/general/Search';

export const Header = () => {
  return (
    <View style={styles.item}>
      <Search />
    </View>
  );
};

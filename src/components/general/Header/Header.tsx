import styles from './Header.styles';
import {View} from 'react-native';
import {Search} from '@src/components/general/Search';
import {Notification} from '@src/components/general/Notification';
import {Stack} from 'native-base';

export const Header = () => {
  return (
    <View style={styles.item}>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Search />
        <Notification />
      </Stack>
    </View>
  );
};

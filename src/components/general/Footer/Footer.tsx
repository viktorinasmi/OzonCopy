import {View} from 'react-native';
import {Box, HStack, Text} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {menu} from '@src/data/menu';

import styles from './Footer.style';

export const Footer = () => {
  return (
    <View style={styles.container}>
      <HStack alignItems="center" justifyContent="space-between">
        {menu.map((item, id) => (
          <View key={id} style={{position: 'relative'}}>
            {id === 2 && (
              <Box
                style={{
                  position: 'absolute',
                  backgroundColor: '#4EBB62',
                  top: 0,
                  right: 0,
                  borderRadius: 10,
                  padding: 2,
                  paddingLeft: 3,
                  paddingRight: 3,
                  zIndex: 2,
                }}
                _text={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 12,
                }}>
                10
              </Box>
            )}
            <MaterialIcons
              name={item.icon}
              size={30}
              color={id === 0 ? '#4539FA' : '#525D6F'}
              style={{textAlign: 'center'}}
            />
            <Text color={id === 0 ? '#4539FA' : '#525D6F'}>{item.title}</Text>
          </View>
        ))}
      </HStack>
    </View>
  );
};

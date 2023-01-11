import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

import {Box} from 'native-base';

export const Notification = () => {
  return (
    <Box mr={5} position="relative">
      <MaterialIcons name="notifications-none" color="#fff" size={35} />
      <Box
        style={{
          position: 'absolute',
          backgroundColor: '#E4304E',
          top: -3,
          right: 0,
          borderRadius: 10,
          padding: 2,
          paddingLeft: 3,
          paddingRight: 3,
        }}
        _text={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 12,
        }}>
        10
      </Box>
    </Box>
  );
};

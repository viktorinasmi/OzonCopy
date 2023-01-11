/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Main} from '@src/screens/Main';
import {NativeBaseProvider, Box} from 'native-base';

export const App = () => {
  // return <Main />;
  return (
    <NativeBaseProvider>
      <Box>
        <Main />
      </Box>
    </NativeBaseProvider>
  );
};

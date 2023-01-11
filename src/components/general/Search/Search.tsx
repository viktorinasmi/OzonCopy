import React from 'react';
import {Input, Stack, Icon} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export const Search = () => {
  console.log('search');
  return (
    <Stack space={4} w="85%" alignItems="flex-start">
      <Input
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="search" />}
            size={5}
            ml="2"
            mr={-2}
            color="#525D6F"
          />
        }
        placeholder="Искать на Ozon"
        placeholderTextColor="#525D6F"
        InputRightElement={
          <Icon
            as={<MaterialIcons name="qr-code-scanner" />}
            size={5}
            mr="2"
            color="#2E2E2E"
          />
        }
        borderRadius={16}
        backgroundColor={'#fff'}
        color="black.400"
        ml={4}
        mr={2}
        fontSize={14}
      />
    </Stack>
  );
};

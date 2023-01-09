import styles from './Search.styles';

import React from 'react';
import {TextInput, View} from 'react-native';

export const Search = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.inputSearchIcon} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <View style={styles.inputScanIconContainer}>
          <View style={styles.inputScanIcon} />
        </View>
      </View>
    </View>
  );
};

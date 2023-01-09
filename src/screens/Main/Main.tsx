import styles from './Main.styles';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {UI_BACKGROUND} from '@src/styles';
import {Header} from '@src/components/general/Header';

export const Main = () => {
  return (
    <SafeAreaView style={{backgroundColor: UI_BACKGROUND}}>
      <Header />
    </SafeAreaView>
  );
};

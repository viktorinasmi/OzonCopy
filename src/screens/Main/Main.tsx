import styles from './Main.styles';
import React from 'react';
import {SafeAreaView, Button} from 'react-native';
import {UI_BACKGROUND} from '@src/styles';
import {Header} from '@src/components/general/Header';
import {Footer} from '@src/components/general/Footer/index';
import {ScrollView, Box, View, Image, Text} from 'native-base';
import {Heading} from 'native-base';
import {products} from '@src/data/products';

export const Main = () => {
  return (
    <SafeAreaView style={{backgroundColor: UI_BACKGROUND}}>
      <Header />
      {/*<View style={{flex: 1}}>*/}
      <ScrollView>
        <Box style={{marginTop: 10}} p={5}>
          <Heading size={'lg'} color="#111">
            Успей купить!
          </Heading>
          <View mt={10}>
            {products.map((product, id) => (
              <Box key={id}>
                <Image
                  size="md"
                  resizeMode="cover"
                  source={{uri: product.image}}
                  alt={product.name}
                />
                <Text>
                  {product.price.toLocaleString('ru-Ru', {
                    style: 'currency',
                    currency: 'RUB',
                  })}
                </Text>
                <Text>{product.name}</Text>
                <Box style={{backgroundColor: '#4539FA', borderRadius: 10}}>
                  <Button title="В корзину" color="#fff" />
                </Box>
              </Box>
            ))}
          </View>
        </Box>
      </ScrollView>
      <Footer />
      {/*</View>*/}
    </SafeAreaView>
  );
};

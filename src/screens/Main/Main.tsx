import styles from './Main.styles';
import React from 'react';
import {UI_BACKGROUND} from '@src/styles';
import {Header} from '@src/components/general/Header/';
import {Footer} from '@src/components/general/Footer/index';
import {ScrollView, Box, View, Image, Text} from 'native-base';
import {Heading, Button} from 'native-base';
import {products} from '@src/data/products';

export const Main = () => {
  return (
    <View style={{flex: 1, backgroundColor: UI_BACKGROUND}}>
      <Header />
      <ScrollView>
        <Box style={{marginTop: 10}} p={5}>
          <Heading size={'lg'} color="#111">
            Успей купить!
          </Heading>
          <View
            mt={10}
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between">
            {products.map((product, id) => (
              <View key={id} mb={10} mx={2} w="26%" alignItems="center">
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
                <Text style={{fontSize: 14, height: 40}}>{product.name}</Text>
                <Box style={{width: 120, marginTop: 20}} px={2} py={2}>
                  <Button backgroundColor="#005bff" borderRadius={8}>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 14,
                      }}>
                      В корзину
                    </Text>
                  </Button>
                </Box>
              </View>
            ))}
          </View>
        </Box>
      </ScrollView>
      <Footer />
    </View>
  );
};

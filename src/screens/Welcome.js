import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import WelcomeTips from '../components/WelcomeTips';
import Button from '../components/Button';

const Welcome = () => {
  const data = [
    { id: 1, title: 'A forma mais rapida e mais pratica de saber sobre o clima da sua cidade ou de qualquer lugar do mundo.', type1: false },
    { id: 2, title: 'Com duvida se vai cair uma chuva hoje? Deixa com a gente, nos avisamos.', type1: true }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.space} />
      <Carousel 
        data={data}
        sliderWidth={400}
        itemWidth={340}
        renderItem={({ item }) => <WelcomeTips title={item.title} type1={item.type1} />}
      />
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Hora de ver o clima da sua cidade.</Text>
        <Button title="Iniciar" backgroundColor='#08679C' color='#D2D2D2' />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08679C'
  },
  space: {
    marginTop: 20,
    marginBottom: 10
  },
  footer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D2D2D2',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20
  },
  footerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#08679C',
  }
});

export default Welcome;
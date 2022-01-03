import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Weather from '../assets/weather.svg'
import WeatherApp from '../assets/WeatherApp.svg'

const WelcomeTips = ({ title, type1}) => {
  if (type1) {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <WeatherApp width={350} height={300} />
        </View>
        <View style={styles.viewTitle}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Weather width={350} height={300} />
        </View>
        <View style={styles.viewTitle}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#D2D2D2',
    borderRadius: 22
  },
  viewTitle: {
    marginTop: 10,
    backgroundColor: '#D2D2D2',
    borderRadius: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#08679C',
    marginHorizontal: 3
  }
});

export default WelcomeTips;
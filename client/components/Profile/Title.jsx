import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const Title = () => {
  const styles = StyleSheet.create({
    title: {
      alignItems: 'center',
      marginTop: 14
    },
  });

  return (
    <View style={styles.title}>
      <Text variant="titleLarge" style={{ color: '#424F5B' }}>
        Mi Perfil
      </Text>
    </View>
  );
};

export default Title;

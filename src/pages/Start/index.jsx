import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

import LifeStatus from '../../components/common/LifeStatus';
import DefaultButton from '../../components/common/DefaultButton';

export default function Start() {
  const handleNavAppExplanation = () => {
    console.log('Testando o clique');
  };

  return (
    <View style={styles.container}>
      <ScrollView showVerticalScrollIndicator={false}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../../assets/icons/logo3.png')}
            style={styles.logo}
          />
          <LifeStatus />
          <Text style={styles.description}>
            Vamos transformar sua vida {'\n'} em um jogo, buscando sempre {'\n'}{' '}
            o melhor nível.
          </Text>

          <DefaultButton
            buttonText={'Continuar'}
            handlePress={handleNavAppExplanation}
            width={250}
            height={50}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(21, 21, 21, 0.98)',
  },

  logo: {
    width: 300,
    height: 60,
    marginTop: 60,
    marginBotton: 20,
  },

  description: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 60,
  },
});

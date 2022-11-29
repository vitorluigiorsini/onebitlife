import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import DefaultButton from '../../components/common/DefaultButton';
import ExplanationCard from '../../components/explanation/ExplanationCard';

export default function AppExplanation() {
  const navigation = useNavigation();

  function handleNavHome() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.title}>
            Antes, deixa {'\n'} eu te explicar...
          </Text>
          <ExplanationCard />
          <Text style={styles.descriptionCta}>
            Pronto(a) para subir de nível na vida?
          </Text>
          <Text style={styles.description}>
            Na próxima tela você poderá escoher {'\n'} seus 4 hábitos de forma
            individual.
          </Text>
          <DefaultButton
            buttonText={'Continuar'}
            handlePress={handleNavHome}
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

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 40,
  },

  descriptionCta: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },

  description: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
});

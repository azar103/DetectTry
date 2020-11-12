import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title_style}>Welcome to DetectTry</Text>
      <Image
        style={styles.img}
        source={{
          uri:
            'https://image.freepik.com/vecteurs-libre/reconnaissance-faciale-securite-donnees-utilisateurs-telephones-portables-ont-acces-aux-donnees-apres-verification-biometrique-pour-verification-acces-identite-personnelle-concept-identification_74855-9858.jpg',
        }}
      />
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.btn_view_style}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.skip_text_style}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    alignItems: 'center',
  },
  title_style: {
    marginTop: 30,
    fontSize: 30,
    color: '#2B4079',
    fontWeight: 'bold',
  },
  img: {
    width: 350,
    height: 250,
    marginTop: 100,
    marginHorizontal: 5,
  },
  btn_view_style: {
    marginHorizontal: 20,
    marginTop: 280,
    fontSize: 20,
    height: 40,
    backgroundColor: '#2B4079',
    width: 400,
    justifyContent: 'center',
  },
  skip_text_style: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {faMailBulk} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';
const SignUp = () => {
  return (
    <View style={styles.view_container}>
      <Text style={styles.title_style}>Sign Up</Text>
      <View style={styles.form_style}>
        <View style={styles.input_view_style}>
          <TextInput style={styles.input_style} placeholder="email" />
          <FontAwesomeIcon
            icon={faMailBulk}
            size={20}
            color="gray"
            style={styles.icon_style}
          />
        </View>
        <View style={styles.input_view_style}>
          <TextInput style={styles.input_style} placeholder="firstName" />
          <FontAwesomeIcon
            icon={faUser}
            size={20}
            color="gray"
            style={styles.icon_style}
          />
        </View>
        <View style={styles.input_view_style}>
          <TextInput style={styles.input_style} placeholder="lastName" />
          <FontAwesomeIcon
            icon={faUser}
            size={20}
            color="gray"
            style={styles.icon_style}
          />
        </View>
        <View style={styles.input_view_style}>
          <FontAwesomeIcon
            icon={faLock}
            size={20}
            color="gray"
            style={styles.icon_style}
          />
          <TextInput
            style={styles.input_style}
            secureTextEntry={true}
            placeholder="password"
          />
        </View>
        <View style={styles.btn_group_style}>
          <View style={[styles.btn_style, styles.btn_sign_in_style]}>
            <Text style={[styles.btn_text_style, styles.btn_text_style_signin]}>
              Register
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  view_container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  title_style: {
    color: '#2B4079',
    marginLeft: 15,
    marginTop: 30,
    fontSize: 50,
    fontWeight: 'bold',
  },
  input_view_style: {
    marginLeft: 15,
    marginTop: 10,
  },
  label_style: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#B1B7BF',
  },
  input_style: {
    width: 380,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginTop: 5,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    paddingLeft: 40,
    paddingTop: 20,
  },
  form_style: {
    flex: 1,
    marginTop: 140,
  },
  btn_group_style: {
    flex: 1,
    marginLeft: 15,
    marginTop: 20,
  },
  btn_style: {
    width: 380,
    borderRadius: 5,
    padding: 10,
  },
  btn_sign_in_style: {
    backgroundColor: '#2B4079',
  },
  btn_text_style: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  btn_text_style_signin: {
    color: '#FFF',
  },
  btn_text_style_signup: {
    color: '#2B4079',
  },
  btn_sign_up_style: {
    backgroundColor: '#FFF',
    borderColor: '#2B4079',
    borderWidth: 1,
    marginTop: 5,
  },
  icon_style: {
    position: 'absolute',
    top: 30,
    left: 10,
  },
});

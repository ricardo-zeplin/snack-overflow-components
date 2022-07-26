import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../colors';
import {SPACING} from '../../spacing';

const styles = StyleSheet.create({
  container: {
    padding: SPACING.SPACING_M,
    width: 390,
    height: 218,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  facebook: {
    backgroundColor: '#1877F2',
    height: 54,
    width: 358,
    flexDirection: 'row',
    color: COLORS.WHITE,
    fontFamily: 'Helvetica-Bold',
    fontSize: 20,
    padding: SPACING.SPACING_M,
    borderRadius: 8,
  },
  facebook_text: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: COLORS.WHITE,
    marginLeft: SPACING.SPACING_M,
  },
  google: {
    backgroundColor: COLORS.WHITE,
    height: 54,
    width: 358,
    flexDirection: 'row',
    padding: SPACING.SPACING_M,
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    shadowOpacity: 1,
  },
  google_text: {
    color: COLORS.LIGHT_BASE,
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    opacity: 0.54,
    marginLeft: SPACING.SPACING_M,
  },
  apple: {
    backgroundColor: COLORS.LIGHT_BASE,
    height: 54,
    width: 358,
    flexDirection: 'row',
    padding: SPACING.SPACING_M,
    borderRadius: 8,
  },
  apple_text: {
    color: COLORS.WHITE,
    fontFamily: 'SFProDisplay-Medium',
    fontSize: 20,
    marginLeft: SPACING.SPACING_M,
  },
  img: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export const SocialLogin = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.facebook}>
        <Image source={require('./img/facebook.png')} style={styles.img} />
        <Text style={styles.facebook_text}>Sign In with Facebook</Text>
      </Pressable>
      <Pressable style={styles.google}>
        <Image source={require('./img/google.png')} style={styles.img} />
        <Text style={styles.google_text}>Sign In with Google</Text>
      </Pressable>
      <Pressable style={styles.apple}>
        <Image source={require('./img/apple.png')} style={styles.img} />
        <Text style={styles.apple_text}>Sign In with Apple</Text>
      </Pressable>
    </View>
  );
};

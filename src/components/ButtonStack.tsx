import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SPACING} from '../spacing';
import {Button} from './Button';
import {Icons} from './Icon/Icon';

export type ButtonStackProps = {
  primaryOnPress: () => void;
  secondaryOnPress: () => void;
  primaryText: string;
  secondaryText: string;
  sideBySide: boolean;
  primaryIcon: Icons;
  secondaryIcon: Icons;
  disabled: boolean;
};

const styles = StyleSheet.create({
  buttonStack: {
    width: 390,
    height: 160,
    padding: SPACING.SPACING_M,
    justifyContent: 'space-between',
  },
  buttonStack_normal: {
    height: 160,
    flexDirection: 'column',
  },
  buttonStack_sideBySide: {
    height: 88,
    flexDirection: 'row',
  },
});

export const ButtonStack = ({
  primaryOnPress,
  secondaryOnPress,
  primaryText,
  secondaryText,
  sideBySide,
  primaryIcon,
  secondaryIcon,
  disabled,
}: ButtonStackProps) => {
  return (
    <View
      style={[
        styles.buttonStack,
        sideBySide ? styles.buttonStack_sideBySide : styles.buttonStack_normal,
      ]}>
      <Button
        disabled={disabled}
        icon={sideBySide ? secondaryIcon : primaryIcon}
        onPress={sideBySide ? secondaryOnPress : primaryOnPress}
        primary={!sideBySide}
        text={sideBySide ? secondaryText : primaryText}
        size={sideBySide ? 'small' : 'normal'}
      />
      <Button
        disabled={disabled}
        icon={sideBySide ? primaryIcon : secondaryIcon}
        onPress={sideBySide ? primaryOnPress : secondaryOnPress}
        primary={sideBySide}
        text={sideBySide ? primaryText : secondaryText}
        size={sideBySide ? 'small' : 'normal'}
      />
    </View>
  );
};

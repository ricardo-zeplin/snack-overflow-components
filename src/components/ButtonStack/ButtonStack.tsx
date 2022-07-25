import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SPACING} from '../../spacing';
import {Button} from '../Button/Button';
import {Icons} from '../Icon/Icon';

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
        sideBySide
          ? {height: 88, flexDirection: 'row'}
          : {height: 160, flexDirection: 'column'},
      ]}>
      <Button
        disabled={disabled}
        icon={secondaryIcon}
        onPress={secondaryOnPress}
        primary={false}
        text={secondaryText}
        size={sideBySide ? 'small' : 'normal'}
      />
      <Button
        disabled={disabled}
        icon={primaryIcon}
        onPress={primaryOnPress}
        primary={true}
        text={primaryText}
        size={sideBySide ? 'small' : 'normal'}
      />
    </View>
  );
};

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StyleProp,
  ViewStyle,
  Pressable,
  PressableStateCallbackType,
} from 'react-native';
import {COLORS} from '../../colors';
import {SPACING} from '../../spacing';
import {Icon, Icons} from '../Icon/Icon';

export type ButtonSize = 'small' | 'normal';

export type ButtonProps = {
  onPress: () => void;
  text: string;
  icon: Icons;
  disabled: boolean;
  primary: boolean;
  size: ButtonSize;
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
  },
  buttonContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    height: 24,
    top: SPACING.SPACING_M,
    left: SPACING.SPACING_XL,
  },
  icon: {
    width: 24,
  },
});

export const Button = ({
  text,
  onPress,
  icon,
  disabled,
  primary,
  size,
}: ButtonProps) => {
  const [textColor, setTextColor] = useState<string>(COLORS.PEACH);

  useEffect(() => {
    if (primary) {
      setTextColor(COLORS.WHITE);
    } else {
      setTextColor(COLORS.PEACH);
    }
  }, [primary, icon]);

  const buttonStyleHandler = (
    state: PressableStateCallbackType,
  ): StyleProp<ViewStyle> => {
    let ret: StyleProp<ViewStyle>;
    if (state.pressed) {
      if (primary) {
        ret = [
          styles.button,
          {backgroundColor: COLORS.PEACH_PRESSED},
          size === 'small' ? {width: 171} : {width: 358},
        ];
      } else {
        ret = [
          styles.button,
          {backgroundColor: COLORS.KARL_PRESSED},
          size === 'small' ? {width: 171} : {width: 358},
        ];
      }
    } else {
      if (primary) {
        ret = [
          styles.button,
          {backgroundColor: COLORS.PEACH},
          size === 'small' ? {width: 171} : {width: 358},
        ];
      } else {
        ret = [
          styles.button,
          {backgroundColor: COLORS.KARL},
          size === 'small' ? {width: 171} : {width: 358},
        ];
      }
    }

    if (disabled) {
      ret = [ret, {opacity: 0.4}];
    } else {
      ret = [ret, {opacity: 1}];
    }

    return ret;
  };

  return (
    <Pressable style={buttonStyleHandler} onPress={onPress} disabled={disabled}>
      <View
        style={[
          styles.buttonContainer,
          size === 'small' ? {width: 123} : {width: 310},
        ]}>
        {icon !== undefined && <Icon name={icon} color={textColor} />}
        <Text style={[styles.buttonText, {color: textColor}]}>{text}</Text>
      </View>
    </Pressable>
  );
};

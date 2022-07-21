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

export type ButtonProps = {
  onPress: () => void;
  text: string;
  icon: Icons;
  disabled: boolean;
  primary: boolean;
};

const styles = StyleSheet.create({
  button: {
    width: 358,
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
    width: 310,
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
        ret = [styles.button, {backgroundColor: COLORS.PEACH_PRESSED}];
      } else {
        ret = [styles.button, {backgroundColor: COLORS.KARL_PRESSED}];
      }
    } else {
      if (primary) {
        ret = [styles.button, {backgroundColor: COLORS.PEACH}];
      } else {
        ret = [styles.button, {backgroundColor: COLORS.KARL}];
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
    <View>
      <Pressable
        style={buttonStyleHandler}
        onPress={onPress}
        disabled={disabled}>
        <View style={styles.buttonContainer}>
          {icon !== undefined && <Icon name={icon} color={textColor} />}
          <Text style={[styles.buttonText, {color: textColor}]}>{text}</Text>
        </View>
      </Pressable>
    </View>
  );
};

import React from 'react';

import { styles } from './styles';
import { TextInput, TextInputProps } from 'react-native';
import { theme } from '../../styles/theme';

interface Props extends TextInputProps {

}

export function Input({ ...rest }) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={theme.colors['gray-300']}
      {...rest}
    />
  );
}

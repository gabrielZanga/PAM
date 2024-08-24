import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './CpsTextInputStyles';

export function CpsTextInput() {
  return (
    
        <TextInput style={styles.inputer} placeholder='Pass'/>
  );
}
import React from 'react';
import { TextInput} from 'react-native';

import { styles } from './CpsTextInputStyles';

interface CpsTextInputProps{
  pass: string
}

export function CpsTextInput(props: CpsTextInputProps) {
  return (
    
      
    <TextInput 
    style={styles.inputer}
     placeholder='Pass'
     value={props.pass}
     />
  
  );
}
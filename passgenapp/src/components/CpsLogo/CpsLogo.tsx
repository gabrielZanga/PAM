import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './CpsLogoStyles';
import logo from '../../../assets/logocps.png';

export function CpsLogo() {
  return (
    <View>
       <Text style={styles.title}>CPS PASS GENERATOR</Text>
       <Image source={ logo }
       style={{
        resizeMode: 'contain',
        height: 180,
        marginLeft: 'auto',
        marginRight: 'auto',
       }}
       />
    </View>
  );
}
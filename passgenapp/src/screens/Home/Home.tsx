import React from "react";
import { View,} from "react-native";

import { StatusBar } from 'expo-status-bar';
import { CpsLogo } from "../../components/CpsLogo/CpsLogo";


import styles from "./HomeStyles";
import { CpsButton } from "../../components/CpsButton/CpsButton";

export default function Home() {
    return (
    <View style={styles.appContainer}>

      <View style={styles.logoContainer}>
          <CpsLogo/>
      </View>

      <View style={styles.inputContainer}>
        <CpsButton/>
      </View>

      <StatusBar style="light" />
    </View>
    );
}


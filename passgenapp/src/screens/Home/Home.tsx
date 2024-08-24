import React from "react";
import { Text, View, StyleSheet} from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from "./HomeStyles";
import { CpsLogo } from "../../components/CpsLogo/CpsLogo";
import { CpsTextInput } from "../../components/CpsTextInput/CpsTextInput";

export default function Home() {
    return (
    <View style={styles.appcontainer}>
      <View style={styles.logoContainer}>
        <CpsLogo/>
      </View>

      <View>
        <CpsTextInput/>
      </View>

        <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    );
}


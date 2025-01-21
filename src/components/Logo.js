import React from "react";
import {Text, StyleSheet} from "react-native"

const Logo = () => {
  return(
    <Text style={styles.logo}>InstaCat</Text>
  );
} 

const styles = StyleSheet.create({
  logo: {
    alignSelf: "center", //alinha elemento no centro do parent
    marginVertical: 20,
    color: "#FF0000",
    fontSize: 22,
  },
});

export default Logo;
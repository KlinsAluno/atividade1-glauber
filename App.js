import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Campus = (props) => {
  return (
    <Text>
      O campus {props.nome} foi fundado em {props.anoFundacao}.
    </Text>
  );
};

const InstitutoFederal = (props) => {
  return (
    <Text>
      {props.sigla} - {props.uf}.
    </Text>
  );
};

const App1 = (View, StyleSheet) => {
  return (
    <View style={styles.container}>
      <InstitutoFederal sigla="IFAL" uf="AL" />
      <Campus nome="Macéio" anoFundacao={1909} />
      <Campus nome="Rio Largo" anoFundacao={2014} />
      <Campus nome="Satuba" anoFundacao={1905} />
      <InstitutoFederal sigla="IFPE" uf="PE" />
      <Campus nome="IFAL" anoFundacao={2014} />
      <Campus nome="IFAL" anoFundacao={2010} />

      <StatusBar style="auto" />
    </View>
  );
};

export default App1;

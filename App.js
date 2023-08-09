import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, View, StyleSheet, Text } from "react-native";

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

const App1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTotal}>
        <InstitutoFederal sigla="IFAL" uf="AL" />
      </Text>
      <Campus nome="Macéio" anoFundacao={1909} />
      <Campus nome="Rio Largo" anoFundacao={2014} />
      <Campus nome="Satuba" anoFundacao={1905} />
      <Campus nome="Eden" anoFundacao={100} />
      <Text style={styles.textTotal}>
        <InstitutoFederal sigla="IFPE" uf="PE" />
      </Text>
      <Campus nome="IFAL" anoFundacao={2014} />
      <Campus nome="IFAL" anoFundacao={2010} />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#9999cc",
    alignItems: "center",
    justifyContent: "center",
  },

  textTotal: {
    fontSize: 17,
    color: "white",
  },
});

const App2 = () => {
  const [cliques, setCliques] = useState(0);

  return (
    <View style={styles.container}>
      <Button
        title="OK"
        onPress={() => {
          setCliques(cliques + 1);
        }}
      />
      <Text style={styles.textTotal}>Quantidade de Cliques: {cliques}</Text>
    </View>
  );
};

export default App1;

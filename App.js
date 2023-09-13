import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import { Avatar, Badge } from "react-native-paper";

const Whatsap = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.menuWhatsapp]}>
        <View style={[styles.tituloWhatsapp]}>
          <Text style={[styles.tituloWhatsapp]}> Whatsapp </Text>
        </View>

        <View style={[styles.textOptions]}>
          <Text style={[styles.textOptions]}>Conversas</Text>
          <Text style={[styles.textOptions]}>Status</Text>
          <Text style={[styles.textOptions]}>Chamadas</Text>
        </View>
      </View>

      <View style={[styles.todasConversas]}>
        <View style={[styles.conversasRecentes]}>
            <conversasRecentess>
              {Avatar="KM"}
            <conversasRecentess/>
          <View style={[styles.reviewConversaContato]}>
            <conversasRecentess>
              {Nome="KM"}
              {Conversa="Kkkkkk"}
            <conversasRecentess/>
          </View>
          <View style={[styles.reviewHoraContMensagem]}>

          <conversasRecentess>
        {Badger="17"}
        {Conversa="Kkkkkk"}
        <conversasRecentess/>
          </View>
        </View>
      </View>
    </View>
  );
};

const conversasRecentess = (Avatar, Nome, Conversa, Hora, Badger) => {
  return (
    <Avatar.Text size={60} label="KM" />

    <Text style={[styles.nomeTitulo]}> {Nome} </Text>
    <Text> {Conversa} </Text>

    <Text style={{ color: "#09CC65" }}>{Hora}</Text>

    <Badge
    style={{
      backgroundColor: "#09CC65",
      paddingBottom: 5,
    }}
  >
    {Badger}
  </Badge>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  menuWhatsapp: {
    flex: 0.15,
    backgroundColor: "#065E55",
  },

  tituloWhatsapp: {
    flexDirection: "row",
    padding: 9,
    color: "white",
    fontSize: 20,
  },

  textOptions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    color: "white",
  },

  todasConversas: {
    flex: 1,
    backgroundColor: "white",
  },

  conversasRecentes: {
    flex: 0.1,
    flexDirection: "row",
    padding: 12,
  },

  reviewConversaContato: {
    flex: 0.95,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,
  },

  nomeTitulo: {
    fontWeight: "bold",
    fontSize: 17,
  },

  reviewHoraContMensagem: {
    justifyContent: "space-evenly",
  },
});

// const Campus = (props) => {
//   return (
//     <Text>
//       O campus {props.nome} foi fundado em {props.anoFundacao}.
//     </Text>
//   );
// };

// const InstitutoFederal = (props) => {
//   return (
//     <Text>
//       {props.sigla} - {props.uf}.
//     </Text>
//   );
// };

// const App1 = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.textTotal}>
//         <InstitutoFederal sigla="IFAL" uf="AL" />
//       </Text>
//       <Campus nome="Macéio" anoFundacao={1909} />
//       <Campus nome="Rio Largo" anoFundacao={2014} />
//       <Campus nome="Satuba" anoFundacao={1905} />
//       <Campus nome="Eden" anoFundacao={100} />
//       <Text style={styles.textTotal}>
//         <InstitutoFederal sigla="IFPE" uf="PE" />
//       </Text>
//       <Campus nome="IFAL" anoFundacao={2014} />
//       <Campus nome="IFAL" anoFundacao={2010} />

//       <StatusBar style="auto" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: "#9999cc",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   textTotal: {
//     fontSize: 17,
//     color: "white",
//   },
// });

// const App2 = () => {
//   const [cliques, setCliques] = useState(0);

//   return (
//     <View style={styles.container}>
//       <Button
//         title="OK"
//         onPress={() => {
//           setCliques(cliques + 1);
//         }}
//       />
//       <Text style={styles.textTotal}>Quantidade de Cliques: {cliques}</Text>
//     </View>
//   );
// };

export default Whatsap;

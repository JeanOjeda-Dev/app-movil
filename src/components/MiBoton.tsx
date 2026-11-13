import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  textoBoton: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  colorBoton: string;
  onPress: () => void;
};

export default function MiBoton({ textoBoton, nombreIcono, colorBoton, onPress }: Props) {
  return (
    <TouchableOpacity style={[styles.boton, { backgroundColor: colorBoton }]} onPress={onPress}>
      <Ionicons name={nombreIcono} size={20} color="#000" style={styles.icono} />
      <Text style={styles.texto}>{textoBoton}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
  },
  icono: {
    marginRight: 8,
  },
  texto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});
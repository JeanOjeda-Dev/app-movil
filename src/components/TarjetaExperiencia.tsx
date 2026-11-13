import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  puesto: string;
  empresa: string;
  periodo: string;
  descripcion: string;
};

export default function TarjetaExperiencia({ puesto, empresa, periodo, descripcion }: Props) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.puesto}>{puesto}</Text>
      <Text style={styles.empresa}>{empresa} ({periodo})</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  puesto: { fontSize: 16, fontWeight: "bold", color: "#0f172a" },
  empresa: { fontSize: 14, color: "#2563eb", fontWeight: "600", marginVertical: 2 },
  descripcion: { fontSize: 13, color: "#475569", marginTop: 4 },
});
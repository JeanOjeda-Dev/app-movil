import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  titulo: string;
  detalle: string;
  icono: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

export default function TarjetaHobby({ titulo, detalle, icono, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.tarjeta} onPress={onPress}>
      <Ionicons name={icono} size={28} color="#2563eb" style={styles.icono} />
      <View style={styles.textoContenedor}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.detalle}>{detalle}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  icono: { marginRight: 16 },
  textoContenedor: { flex: 1 },
  titulo: { fontSize: 16, fontWeight: "bold", color: "#1e293b" },
  detalle: { fontSize: 13, color: "#64748b", marginTop: 2 },
});
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  titulo: string;
  institucion: string;
  anio: string;
  enCurso: boolean;
};

const TarjetaEstudio = ({ titulo, institucion, anio, enCurso }: Props) => {
  return (
    <View style={[styles.tarjeta, enCurso ? styles.enCurso : styles.finalizado]}>
      <Text style={styles.titulo}>{titulo}</Text>
      {enCurso && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>En Curso</Text>
        </View>
      )}
      <Text style={styles.subtitulo}>{institucion}</Text>
      <Text style={styles.anio}>{anio}</Text>
    </View>
  );
};

export default TarjetaEstudio;

const styles = StyleSheet.create({
  tarjeta: {
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
  },
  finalizado: {
    backgroundColor: "#ffffff",
    borderColor: "#ccc",
  },
  enCurso: {
    backgroundColor: "#eef2ff",
    borderColor: "#6366f1",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e293b",
  },
  badgeContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#6366f1",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    marginVertical: 4,
  },
  badgeText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 12,
  },
  subtitulo: {
    fontSize: 14,
    color: "#555",
  },
  anio: {
    fontSize: 12,
    color: "#888",
    marginTop: 2,
  },
});
// Ajuste de visualizacion responsive

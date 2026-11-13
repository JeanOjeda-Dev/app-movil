import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";

export default function Estudios() {
  return (
    <ScrollView style={styles.contenedor}>
      <TarjetaEstudio
        titulo="Bachiller Académico"
        institucion="Institución Educativa Distrital - Bogotá"
        anio="2023"
        enCurso={false}
      />
      <TarjetaEstudio
        titulo="English Does Work - Level 2"
        institucion="SENA Virtual"
        anio="2026"
        enCurso={false}
      />
      <TarjetaEstudio
        titulo="Tecnólogo en Análisis y Desarrollo de Software (ADSO)"
        institucion="SENA - Centro de Gestión de Mercados, Logística y TIC (CGMLTI)"
        anio="2026"
        enCurso={true}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc", padding: 16 },
});
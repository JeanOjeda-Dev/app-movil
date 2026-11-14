import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import TarjetaExperiencia from "../components/TarjetaExperiencia";

export default function Experiencia() {
  return (
    <ScrollView style={styles.contenedor}>
      <TarjetaExperiencia
        puesto="Desarrollador Backend & Bases de Datos"
        empresa="Proyecto Formativo Vextor - SENA"
        periodo="2026 - Actualidad"
        descripcion="Diseño y administración de bases de datos relacionales en PostgreSQL y Supabase, modelado de tablas, consultas SQL optimizadas y desarrollo de APIs RESTful con Python (FastAPI) y Node.js."
      />
      <TarjetaExperiencia
        puesto="Arquitectura Backend y Seguridad"
        empresa="App Contabilidad PYMEs"
        periodo="2026"
        descripcion="Implementación de lógica de negocio en el servidor, autenticación de usuarios, integración con Docker y persistencia de datos transaccionales."
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc", padding: 16 },
});
// Fix de validacion de URLs

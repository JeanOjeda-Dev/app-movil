// src/app/experiencia.tsx
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function ExperienciaScreen() {
  const experiencias = [
    {
      id: '1',
      cargo: 'Gestión y Organización de Datos en Excel',
      empresa: 'Proyectos Independientes / Administrativos',
      periodo: 'Experiencia Práctica',
      descripcion:
        'Organización, limpieza y estructuración de bases de datos e información de usuarios utilizando Microsoft Excel, optimizando la búsqueda y el control de registros.',
    },
    {
      id: '2',
      cargo: 'Atención al Cliente y Soporte Técnico',
      empresa: 'Local de Internet / Café Internet',
      periodo: 'Experiencia Laboral',
      descripcion:
        'Atención directa al público, soporte básico en equipos de cómputo, gestión de trámites digitales, navegación web y mantenimiento preventivo de estaciones de trabajo.',
    },
    {
      id: '3',
      cargo: 'Desarrollo Backend y Bases de Datos',
      empresa: 'Proyectos Formativos SENA',
      periodo: 'Actualidad',
      descripcion:
        'Diseño y gestión de bases de datos relacionales con PostgreSQL y desarrollo de lógica de servidor (Backend) y aplicaciones móviles.',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerTitle}>Mi Experiencia Laboral</Text>
      <Text style={styles.headerSubtitle}>
        Trayectoria laboral, manejo de datos y desarrollo técnico
      </Text>

      {experiencias.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.cargo}>{item.cargo}</Text>
          <Text style={styles.empresa}>{item.empresa}</Text>
          <Text style={styles.periodo}>{item.periodo}</Text>
          <Text style={styles.descripcion}>{item.descripcion}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f6fa',
    flexGrow: 1,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cargo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  empresa: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3498db',
    marginTop: 2,
  },
  periodo: {
    fontSize: 12,
    color: '#888',
    marginBottom: 8,
  },
  descripcion: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});
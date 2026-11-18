// src/app/estudios.tsx
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function EstudiosScreen() {
  const estudios = [
    {
      id: '1',
      titulo: 'Tecnólogo en Análisis y Desarrollo de Software (ADSO)',
      institucion: 'SENA - Ficha 3407187',
      detalle: 'En curso • Bogotá D.C.',
      descripcion:
        'Formación enfocada en arquitectura de software, desarrollo Backend, bases de datos PostgreSQL y aplicaciones móviles con React Native.',
    },
    {
      id: '2',
      titulo: 'Reconocimiento: Mejor Robot de Logística',
      institucion: 'Feria Tecnológica - SENA',
      detalle: 'Logro Destacado',
      descripcion:
        'Diseño, programación y construcción propia de un robot autónomo enfocado en tareas de logística, premiado como el mejor proyecto de su categoría en la feria del SENA.',
    },
    {
      id: '3',
      titulo: 'Técnico en Desarrollo de Software',
      institucion: 'Formación Técnica',
      detalle: 'Graduado',
      descripcion:
        'Fundamentos de programación, lógica computacional, estructuras de datos y desarrollo de aplicaciones.',
    },
    {
      id: '4',
      titulo: 'Bachiller Académico',
      institucion: 'Colegio Miguel Antonio Caro',
      detalle: 'Graduado',
      descripcion: 'Formación secundaria completa.',
    },
    {
      id: '5',
      titulo: 'Campeonatos de Robótica (Certificado)',
      institucion: 'Colegio Miguel Antonio Caro',
      detalle: 'Participación destacada desde Grado Séptimo',
      descripcion:
        'Participación activa y certificada en competencias de robótica escolar, desarrollando habilidades tempranas en electrónica, ensamblaje y lógica de control.',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerTitle}>Estudios y Logros</Text>
      <Text style={styles.headerSubtitle}>
        Formación académica, certificaciones y reconocimientos en robótica
      </Text>

      {estudios.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.titulo}>{item.titulo}</Text>
          <Text style={styles.institucion}>{item.institucion}</Text>
          <Text style={styles.detalle}>{item.detalle}</Text>
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
    borderLeftColor: '#2ecc71',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  institucion: {
    fontSize: 14,
    fontWeight: '600',
    color: '#27ae60',
    marginTop: 2,
  },
  detalle: {
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
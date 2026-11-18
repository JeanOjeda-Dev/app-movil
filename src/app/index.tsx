// src/app/index.tsx
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  Linking,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function HomeScreen() {
  const [mostrarObjetivo, setMostrarObjetivo] = useState(true);

  const toggleObjetivo = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setMostrarObjetivo(!mostrarObjetivo);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Tarjeta Superior de Identidad */}
      <View style={styles.profileCard}>
        <Image
          source={require('../../assets/images/perfil.jpg')} // Verifica el nombre exacto de tu imagen en assets
          style={styles.avatar}
        />
        <Text style={styles.name}>Jean Ojeda Rangel</Text>
        <Text style={styles.subtitle}>Tecnólogo en ADSO - SENA</Text>
        <View style={styles.divider} />
        <Text style={styles.ficha}>Ficha 3407187 • Bogotá D.C.</Text>
      </View>

      {/* Ficha de Datos Personales y Técnicos */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Información General</Text>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Especialidad</Text>
            <Text style={styles.value}>Desarrollo Backend</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>Base de Datos</Text>
            <Text style={styles.value}>PostgreSQL</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Desarrollo Móvil</Text>
            <Text style={styles.value}>React Native</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>Disponibilidad</Text>
            <Text style={styles.value}>Inmediata / Etapa Productiva</Text>
          </View>
        </View>
      </View>

      {/* Sección Interactiva Desplegable: Qué busco en una empresa */}
      <Pressable style={styles.card} onPress={toggleObjetivo}>
        <View style={styles.accordionHeader}>
          <Text style={styles.sectionTitle}>Qué busco en una empresa</Text>
          <Ionicons
            name={mostrarObjetivo ? 'chevron-up' : 'chevron-down'}
            size={20}
            color="#1e3a8a"
          />
        </View>
        {mostrarObjetivo && (
          <Text style={styles.textBody}>
            Busco integrarme a un equipo de desarrollo dinámico donde pueda aportar mis conocimientos en arquitectura backend, gestión de bases de datos PostgreSQL y análisis de información, mientras continúo creciendo profesionalmente en proyectos tecnológicos reales.
          </Text>
        )}
      </Pressable>

      {/* Botones de Contacto Directo con Íconos Vectoriales */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Contacto Directo</Text>

        <Pressable
          style={({ pressed }) => [
            styles.actionButton,
            styles.btnPrimary,
            pressed && styles.btnPressed,
          ]}
          onPress={() => Linking.openURL('mailto:jeanojeda2504@gmail.com')}
        >
          <Ionicons name="mail-outline" size={20} color="#fff" />
          <Text style={styles.btnText}>Enviar Correo Electrónico</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.actionButton,
            styles.btnDark,
            pressed && styles.btnPressed,
          ]}
          onPress={() => Linking.openURL('https://github.com/JeanOjeda-Dev/app-movil')}
        >
          <Ionicons name="logo-github" size={20} color="#fff" />
          <Text style={styles.btnText}>Repositorio en GitHub</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f1f5f9',
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 14,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  avatar: {
    width: 105,
    height: 105,
    borderRadius: 52.5,
    borderWidth: 3,
    borderColor: '#1e3a8a',
    marginBottom: 12,
  },
  name: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  subtitle: {
    fontSize: 14,
    color: '#1e3a8a',
    fontWeight: '600',
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#e2e8f0',
    width: '80%',
    marginVertical: 10,
  },
  ficha: {
    fontSize: 13,
    color: '#64748b',
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 10,
  },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  col: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: '600',
  },
  value: {
    fontSize: 14,
    color: '#1e293b',
    fontWeight: '500',
    marginTop: 2,
  },
  textBody: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
    marginTop: 4,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 13,
    borderRadius: 8,
    marginVertical: 5,
    gap: 8,
  },
  btnPrimary: {
    backgroundColor: '#1e3a8a',
  },
  btnDark: {
    backgroundColor: '#334155',
  },
  btnPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.99 }],
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
import React from "react";
import { Alert, Image, Linking, ScrollView, StyleSheet, Text, View } from "react-native";
import MiBoton from "../components/MiBoton";

export default function Inicio() {
  const abrirEnlace = async (url: string) => {
    const soportado = await Linking.canOpenURL(url);
    if (soportado) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Error", "No se pudo abrir el enlace: " + url);
    }
  };

  return (
    <ScrollView style={styles.contenedor} contentContainerStyle={styles.contenido}>
      <View style={styles.avatarContenedor}>
        {/* Recuerda tener tu foto guardada en assets/images/perfil.jpg */}
        <Image
          source={require("../../assets/images/perfil.jpg")}
          style={styles.fotoPerfil}
        />
        <Text style={styles.nombre}>Jean Ojeda Rangel</Text>
        <Text style={styles.profesion}>Tecnólogo en ADSO - SENA</Text>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.subtitulo}>Perfil Profesional</Text>
        <Text style={styles.parrafo}>
          Aprendiz del SENA en Análisis y Desarrollo de Software (Ficha 3407187) en Bogotá D.C.,
          enfocado en desarrollo Backend, bases de datos PostgreSQL y construcción de aplicaciones
          móviles con React Native.
        </Text>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.subtitulo}>Contacto y Perfiles</Text>
        <MiBoton
          textoBoton="Enviar Correo"
          nombreIcono="mail"
          colorBoton="#E8D464"
          onPress={() => Alert.alert("Correo Electrónico", "jeanopjeda2504@gmail.com")}
        />
        <MiBoton
          textoBoton="Llamar"
          nombreIcono="call"
          colorBoton="#60a5fa"
          onPress={() => Alert.alert("Teléfono", "Llamando a Jean Ojeda (+57) - Bogotá D.C.")}
        />
        <MiBoton
          textoBoton="LinkedIn"
          nombreIcono="logo-linkedin"
          colorBoton="#0a66c2"
          onPress={() => abrirEnlace("https://www.linkedin.com/feed/")}
        />
        <MiBoton
          textoBoton="GitHub (Repositorio App)"
          nombreIcono="logo-github"
          colorBoton="#94a3b8"
          onPress={() => abrirEnlace("https://github.com/JeanOjeda-Dev/app-movil")}
        />
        <MiBoton
          textoBoton="Mi Hobby"
          nombreIcono="film-outline"
          colorBoton="#f472b6"
          onPress={() =>
            Alert.alert(
              "Mi Hobby Favorito",
              "Me encanta ver las películas de Spider-Man mientras disfruto de una deliciosa porción de lasaña."
            )
          }
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  avatarContenedor: { alignItems: "center", marginBottom: 20 },
  fotoPerfil: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#2563eb",
    marginBottom: 8,
  },
  nombre: { fontSize: 24, fontWeight: "bold", color: "#0f172a", marginTop: 4 },
  profesion: { fontSize: 16, color: "#2563eb", fontWeight: "600" },
  seccion: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 1,
  },
  subtitulo: { fontSize: 16, fontWeight: "bold", color: "#1e293b", marginBottom: 8 },
  parrafo: { fontSize: 14, color: "#475569", lineHeight: 20 },
});
import React from "react";
import { Alert, ScrollView, StyleSheet } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

export default function Hobbies() {
  return (
    <ScrollView style={styles.contenedor}>
      <TarjetaHobby
        titulo="Películas de Spider-Man y Lasaña"
        detalle="Maratón de cine y comida favorita"
        icono="film-outline"
        onPress={() =>
          Alert.alert(
            "Mi Pasatiempo Favorito",
            "Me encanta ver las películas de Spider-Man mientras disfruto de una deliciosa porción de lasaña."
          )
        }
      />
      <TarjetaHobby
        titulo="Jugar Voleibol"
        detalle="Deporte en equipo"
        icono="basketball-outline"
        onPress={() =>
          Alert.alert(
            "Voleibol",
            "Practico voleibol regularmente para mantener una excelente condición física."
          )
        }
      />
      <TarjetaHobby
        titulo="Rodar en Moto"
        detalle="Movilidad urbana"
        icono="bicycle-outline"
        onPress={() =>
          Alert.alert(
            "Motociclismo",
            "Disfruto salir a recorrer la ciudad en mi AKT RTX 150."
          )
        }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc", padding: 16 },
});
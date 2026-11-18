// src/app/_layout.tsx
import React from 'react';
import { Tabs } from 'expo-router';

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1e3a8a',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#93c5fd',
        tabBarActiveBackgroundColor: '#172554',
        tabBarStyle: {
          backgroundColor: '#1e3a8a',
          height: 60,
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 5,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: 'bold',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '👤',
          tabBarIcon: () => null, // Esto elimina por completo el cuadro con la X arriba
        }}
      />
      <Tabs.Screen
        name="experiencia"
        options={{
          title: '💼',
          tabBarIcon: () => null,
        }}
      />
      <Tabs.Screen
        name="estudios"
        options={{
          title: '📚',
          tabBarIcon: () => null,
        }}
      />
      <Tabs.Screen
        name="hobbies"
        options={{
          title: '🎬',
          tabBarIcon: () => null,
        }}
      />
    </Tabs>
  );
}
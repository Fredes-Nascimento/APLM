import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import styles from './display-styles';

export default function DisplayMessageScreen() {
  const { message } = useLocalSearchParams();
  const decoded = message ? decodeURIComponent(message as string) : '';

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Mensagem Recebida</ThemedText>
      <ThemedText>{decoded}</ThemedText>
    </ThemedView>
  );
}


// styles moved to ./display-styles.ts

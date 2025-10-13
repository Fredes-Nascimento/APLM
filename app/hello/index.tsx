import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';
import styles from './styles';

export default function HelloScreen() {
  const [text, setText] = useState('');
  const router = useRouter();

  function onSend() {
    // navigate to display screen with query param
    const encoded = encodeURIComponent(text || '');
    router.push(`/hello/display?message=${encoded}`);
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Meu Primeiro aplicativo</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Digite uma mensagem"
        value={text}
        onChangeText={setText}
        returnKeyType="send"
        onSubmitEditing={onSend}
      />
      <Button title="Enviar" onPress={onSend} />
    </ThemedView>
  );
}

// styles moved to ./styles.ts

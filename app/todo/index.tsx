import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React, { useRef, useState } from 'react';
import { Button, FlatList, TextInput, View } from 'react-native';
import styles from './styles';

export default function TodoScreen() {
  const [items, setItems] = useState<string[]>([]);
  const [text, setText] = useState('');
  const inputRef = useRef<any>(null);

  function addItem() {
    const t = text.trim();
    if (!t) return;
    setItems(prev => [t, ...prev]);
    setText('');
    inputRef.current?.focus();
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Lista de Tarefas</ThemedText>
      
      <View style={styles.row}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Nova tarefa"
          value={text}
          onChangeText={setText}
          returnKeyType="done"
          onSubmitEditing={addItem}
        />
        <Button title="Add" onPress={addItem} />
      </View>

      <FlatList
        data={items}
        keyExtractor={(item, idx) => `${idx}-${item}`}
        renderItem={({ item }) => <ThemedText>{item}</ThemedText>}
        ListEmptyComponent={<ThemedText>Sem tarefas</ThemedText>}
      />
    </ThemedView>
  );
}

// styles moved to ./styles.ts

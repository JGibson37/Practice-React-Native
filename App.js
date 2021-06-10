import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const work = true;
  const [wordToSave, setWordToSave] = useState('');
  const [savedWord, setSavedWord] = useState('Nothing');

  const handleSaveWordClick = () => {
    setSavedWord(wordToSave);
  };

  return (
    <SafeAreaView>
      <Text style={styles.headerStyle}>Beat Julia at Scrabble</Text>
      <TextInput
        style={styles.inputStyle}
        autoCompleteType="off"
        autoFocus={work}
        selectionColor="red"
        onChangeText={setWordToSave}
      />
      <Button
        title="Search for Words"
        type="submit"
        onPress={handleSaveWordClick}
      />
      <Text style={styles.wordListStyle}>
        Searching Words that match: {savedWord}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    marginTop: 32,
    paddingHorizontal: 24,
    color: 'black',
  },

  headerStyle: {
    padding: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  wordListStyle: {
    paddingLeft: 20,
    paddingTop: 20,
  },
});

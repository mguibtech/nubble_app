import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" style={{color: 'red'}}>
        Testando
      </Text>
      <Text
        preset="headingLarge"
        style={{color: 'red', fontFamily: 'Stardom-Regular'}}>
        Testando
      </Text>

      <Text
        preset="headingLarge"
        style={{color: 'red', fontFamily: 'Satoshi-Italic'}}>
        Testando
      </Text>
    </SafeAreaView>
  );
}

export default App;

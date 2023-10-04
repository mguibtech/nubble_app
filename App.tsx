import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" italic>
        Testando
      </Text>
      <Text preset="headingLarge" semiBold>
        Testando
      </Text>

      <Text preset="paragraphCaption">Testando</Text>
    </SafeAreaView>
  );
}

export default App;

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 20}}>
          <Button title="Login" mb="s10" />

          <Button preset="outline" title="Outile" mb="s10" />
          <Button preset="secondary" loading title="Primary" mb="s10" />

          <Button title="Entrar" loading mb="s10" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;

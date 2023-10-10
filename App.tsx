import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

import {LoginScreen} from './src/screens/auth/LoginScreen/LoginScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SingnUpScreen} from './src/screens/auth/SingnUpScreen/SingnUpScreen';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {/* <LoginScreen /> */}
        <SingnUpScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;

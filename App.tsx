import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Text} from './src/components/Text/Text';
import {Box} from './src/components/Box/Box';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" marginBottom="s8">
            Ola
          </Text>
          <Text preset="paragraphLarge" mb="s40">
            Digite seu e-mail e senha para entrar
          </Text>

          <Box mb="s20">
            <TextInput label="Email" placeholder="Digite seu e-mail" />
          </Box>
          <Box>
            <TextInput errorMessage="Messagem de erro" label="Senha" placeholder="Digite sua senha" />
          </Box>
          <Text preset="paragraphSmall" bold color="primary" mt="s10">
            Esqueci minha senha
          </Text>

          <Button title="Entrar" mt="s48" />
          <Button preset="outline" title="Criar uma conta" mt="s12" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;

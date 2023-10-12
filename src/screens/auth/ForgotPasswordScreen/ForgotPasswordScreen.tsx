import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {RootStackParamList} from '../../../routes/Routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export function ForgotPasswordScreen({navigation}: ScreenProps) {
  function handleSubmitForm() {
    navigation.navigate('SuccessScreen', {
      title: `Enviamos as instruções para seu ${'\n'}e-mail`,
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRoundIcon',
        color: 'primary',
      },
    });
    //TODO: handleß
  }
  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16" bold>
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <TextInput
        placeholder="Digite seu e-mail"
        label="E-mail"
        boxProps={{mb: 's40'}}
      />
      <Button
        onPress={handleSubmitForm}
        title="Recuperar senha"
        preset="primary"
      />
    </Screen>
  );
}

import React from 'react';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';

export function LoginScreen() {
  return (
    <Screen>
      <Text preset="headingLarge" marginBottom="s8">
        Ola
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        label="Email"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />
      <TextInput
        errorMessage="Messagem de erro"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's10'}}
        rightComponent={<Icon color="gray2" name="eyeOn" />}
      />
      <Text preset="paragraphSmall" bold color="primary">
        Esqueci minha senha
      </Text>

      <Button title="Entrar" mt="s48" />
      <Button preset="outline" title="Criar uma conta" mt="s12" />
    </Screen>
  );
}
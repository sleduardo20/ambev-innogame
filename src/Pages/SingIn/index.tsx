import React, { useCallback, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import {
  Container,
  LogoApp,
  ForgotPassword,
  NewProfile,
  ForgotPasswordText,
  NewProfileText,
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoApp from '../../assets/logo_app.png';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleSignIn = useCallback((data: object) => {
    console.log(data);
  }, []);

  return (
    <>
      <Container>
        <LogoApp source={logoApp} />
        <Form ref={formRef} onSubmit={handleSignIn}>
          <Input name="email" icon="mail" placeholder="Email ou código" />
          <Input secureTextEntry name="senha" icon="lock" placeholder="Senha" />

          <Button
            onPress={() => {
              formRef.current?.submitForm();
              navigation.navigate('Home');
            }}
          >
            Entrar
          </Button>
        </Form>
        <ForgotPassword>
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgotPassword>

        <NewProfile>
          <NewProfileText>Criar nova conta</NewProfileText>
        </NewProfile>
      </Container>
    </>
  );
};

export default SignIn;

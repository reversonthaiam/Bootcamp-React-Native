import React, { useRef, useState, useCallback } from "react";
import { Container, Title, BacktoSignIn, BacktoSignInText } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import logoImg from "../../assets/logo.png";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  Keyboard,
  TextInput,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/core";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors'

interface SignInFormData{
  nome: string
  email: string
  password: string
}


const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  const emailInputRef = useRef<TextInput>(null)
  const passwordInputRef = useRef<TextInput>(null)


  const handleSignUp = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('No minimo 6 digitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        /* await signIn({
          email: data.email,
          password: data.password,
        }); */

        Alert.alert(`🎉🧔 GoBarber 💇‍♂️️💈️`, `Bem vindo ao app`);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          console.log(errors)
          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert(
          'Erro na autenticação 🥴',
          'Ocorreu um erro ao fazer login, cheque as credenciais.',
        );
      }
    },
    [],
  );

  return (
    <>
      <KeyboardAvoidingView
        enabled
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg}></Image>
            <View>
              <Title>Crie sua conta</Title>
            </View>
            <Form
              ref={formRef}
              onSubmit={handleSignUp}
            >
              <Input

                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus()
                }}
              ></Input>
              <Input
                ref={emailInputRef}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus()
                }}
              ></Input>
              <Input
                ref={passwordInputRef}
                secureTextEntry
                name="password"
                icon="lock"
                placeholder="Senha"
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              ></Input>
              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Entrar
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BacktoSignIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff"></Icon>
        <BacktoSignInText>Voltar para login</BacktoSignInText>
      </BacktoSignIn>
    </>
  );
};

export default SignUp;

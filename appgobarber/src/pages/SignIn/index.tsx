import React from "react";
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
  
} from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import logoImg from "../../assets/logo.png";
import { Image, KeyboardAvoidingView, Platform, View, ScrollView, Keyboard } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const SignIn: React.FC = () => {
  return (
    <>
    <KeyboardAvoidingView enabled style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1}}>
      <Container>
        <Image source={logoImg}></Image>
        <View>
        <Title>Faça seu login</Title>
        </View>
        <Input name="email" icon="mail" placeholder="E-mail"></Input>
        <Input name="password" icon="lock" placeholder="Senha"></Input>
        <Button
          onPress={() => {
            console.log("deu");
          }}
        >
          Entrar
        </Button>

        <ForgotPassword
          onPress={() => {
            console.log("opa");
          }}
        >
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgotPassword>
      </Container>
      </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => {}}>
        <Icon name="log-in" size={20} color="#ff9000"></Icon>
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;

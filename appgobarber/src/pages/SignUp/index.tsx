import React, { useRef} from "react";
import {
  Container,
  Title,
  BacktoSignIn,
  BacktoSignInText,
  
} from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import logoImg from "../../assets/logo.png";
import { Image, KeyboardAvoidingView, Platform, View, ScrollView, Keyboard } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/core'
import { Form } from '@unform/mobile'
import { FormHandles } from "@unform/core";

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const navigation = useNavigation()
  return (
    <>
    <KeyboardAvoidingView enabled style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1}}>
      <Container>
        <Image source={logoImg}></Image>
        <View>
        <Title>Crie sua conta</Title>
        </View>
        <Form ref={formRef} onSubmit={(data) => {console.log(data)}}>
        <Input name="name" icon="user" placeholder="Nome"></Input>
        <Input name="email" icon="mail" placeholder="E-mail"></Input>
        <Input name="password" icon="lock" placeholder="Senha"></Input>
        <Button
          onPress={() => {
            formRef.current?.submitForm()
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

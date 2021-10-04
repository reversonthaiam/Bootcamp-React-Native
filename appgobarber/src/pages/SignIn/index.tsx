import React from 'react'
import { Container, Title} from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'
import logoImg from '../../assets/logo.png'
import { Image } from 'react-native'
const SignIn: React.FC = () => {
  return(
    <Container>
      <Image source={logoImg}></Image>
      <Title>Faça seu login</Title>
      <Input name="email" icon="mail" placeholder="E-mail"></Input>
      <Input name="password" icon="lock" placeholder="Senha"></Input>
      <Button onPress={() => {console.log('deu')}}>Entrar</Button>
    </Container>
  )
}
 

export default SignIn
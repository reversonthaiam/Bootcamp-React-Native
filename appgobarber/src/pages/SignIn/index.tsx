import React from 'react'
import { Container, Title} from './styles'
import logoImg from '../../assets/logo.png'
import { Image } from 'react-native'
const SignIn: React.FC = () => {
  return(
    <Container>
      <Image source={logoImg}></Image>
      <Title>Faça seu login</Title>
    </Container>
  )
}
 

export default SignIn
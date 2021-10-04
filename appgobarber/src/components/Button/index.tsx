import React from 'react'
import {RectButtonProperties} from 'react-native-gesture-handler'
import {Container, ButtonText} from './styles'
import Icon from 'react-native-vector-icons'

interface ButtonProps extends RectButtonProperties{
  children: string;

}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {... rest}>
    
    <ButtonText>
      {children}
    </ButtonText>
  </Container>
)

export default Button
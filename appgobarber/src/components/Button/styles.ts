import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #ff9000;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  margin-top: 8px;

`

export const ButtonText = styled.Text `
    font-family: 'Roboto-Medium';
    color: #312e38;
    font-size: 18px;
`
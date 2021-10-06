import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { TouchableOpacity} from 'react-native'

/*  export const Container = styled(RectButton)`

  height: 60px;
  background: #ff9000;
  border-radius: 10px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
` */

export const Container = styled.TouchableOpacity`
  
  height: 60px;
  background: #ff9000;
  border-radius: 10px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #312e38;
  font-size: 18px;
`;
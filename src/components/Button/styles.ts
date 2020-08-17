import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 60px;
  border-radius: 8px;
  margin-top: 16px;
  background: #def1ff;

  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  color: #00448c;
  font-family: 'Roboto-Bold';
`;

import React from 'react';

import { BaseButtonProperties } from 'react-native-gesture-handler';
import { Container, TextButton } from './styles';

interface ButtonProps extends BaseButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <TextButton>{children}</TextButton>
    </Container>
  );
};

export default Button;

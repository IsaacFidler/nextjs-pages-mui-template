import React from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';
import styled from 'styled-components';

const StyledButton = styled(MuiButton)`
  margin: 8px;

  &:hover {
    transform: scale(1.05);
  }
`;

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

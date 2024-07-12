'use client';
import { FC } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { styled } from '@mui/system';

interface ButtonProps extends MuiButtonProps {
  status?: boolean;
}

const StyledButton = styled(MuiButton)<ButtonProps>(({ theme, status }) => ({
  padding: '8px 30px 8px 30px',
  backgroundColor: status ? theme.palette.red.main : theme.palette.yellow.main,
  color: status ? 'white' : 'black',
  textTransform: 'capitalize',
  borderRadius: 40,
  '&:hover': {
    backgroundColor: status ? theme.palette.red.dark : theme.palette.yellow.dark,
  },
}));

const Button: FC<ButtonProps> = ({ status, ...props }) => {
  return (
    <StyledButton
      status={status}
      {...props}
    />
  );
};

export default Button;

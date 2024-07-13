'use client';
import { FC } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { styled } from '@mui/system';

interface ButtonProps extends MuiButtonProps {
  bgcolor?: string;
  labelcolor?: string;
}

const StyledButton = styled(MuiButton)<ButtonProps>(({ bgcolor = 'red', labelcolor = 'black' }) => ({
  padding: '8px 30px 8px 30px',
  backgroundColor: bgcolor,
  textTransform: 'capitalize',
  borderRadius: 40,
  color: labelcolor,
  '&:hover': {
    backgroundColor: bgcolor,
  },
}));

const Button: FC<ButtonProps> = ({ labelcolor, bgcolor, ...props }) => {
  return (
    <StyledButton
      bgcolor={bgcolor}
      labelcolor={labelcolor}
      {...props}
    />
  );
};

export default Button;

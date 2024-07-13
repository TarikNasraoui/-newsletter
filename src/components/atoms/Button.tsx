'use client';
import { FC } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { styled } from '@mui/system';

interface ButtonProps extends MuiButtonProps {
  bgcolor?: string;
  labelColor?: string;
}

const StyledButton = styled(MuiButton)<ButtonProps>(({ bgcolor = 'red', labelColor = 'black' }) => ({
  padding: '8px 30px 8px 30px',
  backgroundColor: bgcolor,
  textTransform: 'capitalize',
  borderRadius: 40,
  color: labelColor,
  '&:hover': {
    backgroundColor: bgcolor,
  },
}));

const Button: FC<ButtonProps> = ({ labelColor, bgcolor, ...props }) => {
  return (
    <StyledButton
      bgcolor={bgcolor}
      labelColor={labelColor}
      {...props}
    />
  );
};

export default Button;

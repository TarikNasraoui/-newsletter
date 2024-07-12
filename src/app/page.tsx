'use server';
import React from 'react';
import { Container } from '@mui/material';
import Hero from '@/components/molecules/Hero';
import NewsLetterListContainer from '@/components/organisms/NewsLetterListContainer';

const page = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: '20px' }}
    >
      <Hero />
      <NewsLetterListContainer />
    </Container>
  );
};

export default page;

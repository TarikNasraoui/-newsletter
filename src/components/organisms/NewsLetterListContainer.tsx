import React from 'react';
import { Alert, Container } from '@mui/material';
import NewsLetterList from '@/components/organisms/NewsLetterList';
import { fetchNewsletters } from '@/services/newsLettersServices';

export interface NewsletterItem {
  id: string;
  image: string;
  description: string;
  title: string;
  site: string;
  subscriptions: string[];
}

const NewsLetterListContainer = async () => {
  const response = await fetchNewsletters();
  const { data: newsletters, error } = response;

  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Container
      maxWidth="lg"
      disableGutters={true}
    >
      {newsletters && <NewsLetterList newsletters={newsletters} />}
    </Container>
  );
};
export default NewsLetterListContainer;

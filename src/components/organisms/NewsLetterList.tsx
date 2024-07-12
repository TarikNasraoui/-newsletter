'use client';
import React, { FC } from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import NewsLetterCard from '../molecules/NewsLetterCard';
import { NewsletterItem } from './NewsLetterListContainer';

const Underline = styled(Box)(({ theme }) => ({
  width: '70px',
  height: '4px',
  borderRadius: '10px',
  marginTop: '10px',
  backgroundColor: theme.palette.red.main,
}));

const NewsLetterList: FC<{ newsletters: NewsletterItem[] }> = ({ newsletters }) => {
  const groupeItemsBySite = (items: NewsletterItem[]) => {
    return items.reduce((acc: { [key: string]: NewsletterItem[] }, curr: NewsletterItem) => {
      const site = curr.site;
      if (!acc[site]) {
        acc[site] = [];
      }
      acc[site].push(curr);
      return acc;
    }, {});
  };
  return (
    <>
      {newsletters &&
        Object.entries(groupeItemsBySite(newsletters)).map(([site, items]) => (
          <Box key={site}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ mt: '20px', mb: '20px' }}
            >
              {site}
              <Underline />
            </Typography>
            <Grid
              container
              spacing={4}
            >
              {items.map((item: NewsletterItem) => (
                <Grid
                  item
                  key={item.id}
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{ mb: '30px' }}
                >
                  <NewsLetterCard newsLetter={item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
    </>
  );
};

export default NewsLetterList;

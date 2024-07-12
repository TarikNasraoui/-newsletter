'use client';
import React, { FC } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useUser } from '@/contexts/UserContext';
import { NewsletterItem } from '../organisms/NewsLetterListContainer';
import Button from '../atoms/Button';

const NewsLetterCard: FC<{ newsLetter: NewsletterItem }> = ({ newsLetter }) => {
  const { user } = useUser();
  const hasAccess = newsLetter.subscriptions.length === 0 || newsLetter.subscriptions.some((sub) => !user.subscriptions.includes(sub));

  const labelButton = hasAccess ? "S'inscrire" : "S'abonner";

  return (
    <Card sx={{ paddingBottom: '10px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={newsLetter.image}
          alt="green iguana"
        />
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography
            variant="body1"
            color="text.secondary"
          >
            {newsLetter.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button
          variant="contained"
          status={hasAccess}
        >
          {labelButton}
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsLetterCard;
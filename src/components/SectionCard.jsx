// components/SectionCard.jsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const SectionCard = ({ title, description }) => (
  <Card variant="outlined" sx={{ mb: 2 }}>
    <CardContent >
      <Typography variant="subtitle2" fontWeight="bold">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </Card>
);

export default SectionCard;

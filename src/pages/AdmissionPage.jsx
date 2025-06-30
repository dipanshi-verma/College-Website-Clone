// pages/AdmissionPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

function AdmissionPage() {
  const { programSlug } = useParams();
  const displayName = programSlug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom color="primary">
        {displayName}
      </Typography>
      <Typography variant="body1">
        Here's everything you need to know about our <strong>{displayName}</strong>. Add eligibility, fee structure, duration, and an FAQ to guide your visitors with confidence!
      </Typography>
    </Box>
  );
}

export default AdmissionPage;
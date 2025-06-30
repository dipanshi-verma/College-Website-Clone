// pages/CoursePage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

function CoursePage() {
  const { facultySlug } = useParams();
  const displayName = facultySlug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom color="primary">
        {displayName}
      </Typography>
      <Typography variant="body1">
        Welcome to the <strong>{displayName}</strong> page. Explore specialized departments, faculty expertise, and programs under this stream. You can enrich this page with interactive details, videos, or course catalogs based on your goals!
      </Typography>
    </Box>
  );
}

export default CoursePage;
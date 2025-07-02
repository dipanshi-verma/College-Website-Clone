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
        Here’s everything you need to know about our <strong>{displayName}</strong> — designed to shape future-ready professionals. Whether you’re just stepping out of high school or planning your next academic milestone, our undergraduate programs offer a strong foundation in both theory and practical skills.
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
      </Typography>
      <Typography variant="body1">
        Our undergraduate programs are designed to provide a comprehensive education that prepares you for the challenges of the modern world. With a focus on both academic excellence and practical experience, we aim to equip you with the skills and knowledge necessary to succeed in your chosen field.
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Explore our diverse range of programs and find the one that aligns with your career aspirations. From engineering to business, arts to sciences, we have something for everyone.
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Ready to take the next step? <strong>Apply now</strong> and join a community of innovators and leaders.
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        For more information, feel free to reach out to our admissions team at <a href="mailto:admissions@yourcollege.edu">admissions@yourcollege.edu</a>.
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        We look forward to welcoming you to our college!
      </Typography>
    </Box>
  );
}

export default AdmissionPage;
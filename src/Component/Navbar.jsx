// Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Button,
  Typography,
  Popper,
  Paper,
  Grid,
} from '@mui/material';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Login/Signup', path: '/login' },
];

const CoursesDropdown = [
  'Faculty of Commerce',
  'Faculty of Design',
  'Faculty of IT & Computer Science',
  'Faculty of Engineering & Technology',
  'Faculty of Fine Arts',
  'Faculty of Hotel Management and Catering Technology',
  'Faculty of Law',
  'Faculty of Medicine',
  'Faculty of Pharmacy',
  'Faculty of Social Work',
];

const admissionDropdown = {
  'Explore Our Programs': [
    'Diploma Programs',
    'Bachelors Programs',
    'Masters Programs',
    'Doctoral & Post Doctoral Programs',
    'Honors Programs',
    'Industry Embedded Programs',
    'Online Programs',
  ],
  'Pathway Programs': [
    'Global Programs',
    'How To Apply',
    'Pay Your Fees',
    'Scholarships',
    'Continuing Education Programs',
    'Admission Offices',
    'Dual Degree Programs',
  ],
};

function Navbar({ footerRef }) {
  const [anchorFaculty, setAnchorFaculty] = useState(null);
  const [anchorAdmission, setAnchorAdmission] = useState(null);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [selectedAdmission, setSelectedAdmission] = useState(null);
  const location = useLocation();

  const handleFacultyClick = (faculty) => {
    setSelectedFaculty(faculty);
    setSelectedAdmission(null);
    setAnchorFaculty(null);
  };

  const handleAdmissionClick = (program) => {
    setSelectedAdmission(program);
    setSelectedFaculty(null);
    setAnchorAdmission(null);
  };

  const handleScrollToFooter = () => {
    setSelectedFaculty(null);
    setSelectedAdmission(null);
    if (location.pathname === '/') {
      footerRef?.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact'; // fallback in case ref isn't available
    }
  };

  return (
    <>
      <AppBar position="static" className="!bg-blue-200 shadow-sm">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <Box className="mr-3">
              <img
                src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg"
                alt="Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
            </Box>

            {/* Navigation Items */}
            <Box className="flex gap-6 items-center flex-grow">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`font-semibold text-blue-900 border-b-4 ${
                    location.pathname === item.path ? 'border-yellow-400' : 'border-transparent'
                  } hover:border-blue-400 transition duration-300 px-2 py-1`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Contact Us button */}
              <button
                onClick={handleScrollToFooter}
                className={`font-semibold text-blue-900 border-b-4 ${
                  location.pathname === '/contact' ? 'border-yellow-400' : 'border-transparent'
                } hover:border-blue-400 transition duration-300 px-2 py-1 bg-transparent border-0`}
              >
                Contact Us
              </button>

              {/* Courses Dropdown */}
              <Box
                onMouseEnter={(e) => setAnchorFaculty(e.currentTarget)}
                onMouseLeave={() => setAnchorFaculty(null)}
              >
                <Button
                  sx={{
                    fontWeight: 'bold',
                    color: '#1D4ED8',
                    borderBottom: anchorFaculty ? '4px solid #FACC15' : '4px solid transparent',
                    '&:hover': { borderBottom: '4px solid #60A5FA' },
                    borderRadius: 0,
                  }}
                >
                  Courses
                </Button>
                <Popper open={Boolean(anchorFaculty)} anchorEl={anchorFaculty} placement="bottom-start">
                  <Paper
                    onMouseEnter={() => setAnchorFaculty(anchorFaculty)}
                    onMouseLeave={() => setAnchorFaculty(null)}
                    sx={{
                      bgcolor: 'rgba(219, 234, 254, 0.95)',
                      backdropFilter: 'blur(6px)',
                      color: '#1D4ED8',
                      width: '100vw',
                      left: 0,
                      p: 3,
                      borderRadius: 0,
                    }}
                  >
                    <Grid container spacing={2}>
                      {CoursesDropdown.map((faculty, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                          <Typography
                            variant="body1"
                            sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
                            onClick={() => handleFacultyClick(faculty)}
                          >
                            {faculty}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Paper>
                </Popper>
              </Box>

              {/* Admissions Dropdown */}
              <Box
                onMouseEnter={(e) => setAnchorAdmission(e.currentTarget)}
                onMouseLeave={() => setAnchorAdmission(null)}
              >
                <Button
                  sx={{
                    fontWeight: 'bold',
                    color: '#1D4ED8',
                    borderBottom: anchorAdmission ? '4px solid #FACC15' : '4px solid transparent',
                    '&:hover': { borderBottom: '4px solid #60A5FA' },
                    borderRadius: 0,
                  }}
                >
                  Admissions
                </Button>
                <Popper open={Boolean(anchorAdmission)} anchorEl={anchorAdmission} placement="bottom-start">
                  <Paper
                    onMouseEnter={() => setAnchorAdmission(anchorAdmission)}
                    onMouseLeave={() => setAnchorAdmission(null)}
                    sx={{
                      bgcolor: 'rgba(219, 234, 254, 0.95)',
                      backdropFilter: 'blur(6px)',
                      color: '#1D4ED8',
                      width: '100vw',
                      left: 0,
                      p: 3,
                      borderRadius: 0,
                    }}
                  >
                    <Grid container spacing={4}>
                      {Object.entries(admissionDropdown).map(([section, items], i) => (
                        <Grid item xs={12} sm={6} md={3} key={i}>
                          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                            {section}
                          </Typography>
                          {items.map((program, idx) => (
                            <Typography
                              key={idx}
                              sx={{ py: 0.5, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
                              onClick={() => handleAdmissionClick(program)}
                            >
                              {program}
                            </Typography>
                          ))}
                        </Grid>
                      ))}
                    </Grid>
                  </Paper>
                </Popper>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Dropdown Content Below Nav */}
      {selectedFaculty && (
        <Box className="p-6 bg-blue-100 text-blue-900">
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            {selectedFaculty}
          </Typography>
          <Typography>
            This is detailed information about <strong>{selectedFaculty}</strong>. You can customize this section to show
            real data, course offerings, faculty members, or any other relevant content.
          </Typography>
        </Box>
      )}

      {selectedAdmission && (
        <Box className="p-6 bg-blue-100 text-blue-900">
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            {selectedAdmission}
          </Typography>
          <Typography>
            You selected <strong>{selectedAdmission}</strong> from the Admissions dropdown. Here, you can display application
            instructions, eligibility criteria, fee details, etc.
          </Typography>
        </Box>
      )}
    </>
  );
}

export default Navbar;
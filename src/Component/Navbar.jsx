import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Typography,
  Popper,
  Paper,
  Grid,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleScrollToFooter = () => {
    setAnchorFaculty(null);
    setAnchorAdmission(null);
    setMobileOpen(false);
    if (location.pathname === '/') {
      footerRef?.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <Box className="flex justify-end p-2">
        <IconButton><CloseIcon /></IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem button component={Link} to={item.path} key={item.label}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        <ListItem button onClick={handleScrollToFooter}>
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" className="!bg-blue-200 shadow-sm z-[1200]">
        <Container maxWidth="xl">
          <Toolbar className="flex justify-between">
            {/* Logo */}
            <Box className="flex items-center gap-3">
              <img
                src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg"
                alt="Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
              />
              <Typography variant="h6" className="text-blue-900 font-bold hidden sm:block">
                Parul University Portal
              </Typography>
            </Box>

            {/* Desktop Nav */}
            <Box className="hidden md:flex gap-6 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`font-semibold text-blue-900 border-b-4 ${
                    location.pathname === item.path ? 'border-yellow-400' : 'border-transparent'
                  } hover:border-blue-400 transition px-2 py-1`}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                onClick={handleScrollToFooter}
                sx={{
                  fontWeight: 'bold',
                  color: '#1D4ED8',
                  borderBottom: '4px solid transparent',
                  '&:hover': { borderBottom: '4px solid #60A5FA' },
                }}
              >
                Contact Us
              </Button>

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
                <Popper
                  open={Boolean(anchorFaculty)}
                  anchorEl={anchorFaculty}
                  placement="bottom-start"
                  disablePortal={false}
                  modifiers={[{ name: 'zIndex', enabled: true }]}
                >
                  <Paper
                    sx={{
                      zIndex: 1300,
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
                      {CoursesDropdown.map((faculty, idx) => (
                        <Grid item xs={12} sm={6} md={4} key={idx}>
                          <Typography
                            sx={{
                              cursor: 'pointer',
                              '&:hover': { textDecoration: 'underline' },
                            }}
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
                <Popper
                  open={Boolean(anchorAdmission)}
                  anchorEl={anchorAdmission}
                  placement="bottom-start"
                  disablePortal={false}
                  modifiers={[{ name: 'zIndex', enabled: true }]}
                >
                  <Paper
                    sx={{
                      zIndex: 1300,
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
                              sx={{
                                py: 0.5,
                                cursor: 'pointer',
                                '&:hover': { textDecoration: 'underline' },
                              }}
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

            {/* Mobile Menu Button */}
            <Box className="md:hidden">
              <IconButton onClick={handleDrawerToggle}>
                <MenuIcon className="text-blue-900" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawerContent}
      </Drawer>
    </>
  );
}

export default Navbar;
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
  ClickAwayListener,
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
  const [showCourses, setShowCourses] = useState(false);
  const [showAdmissions, setShowAdmissions] = useState(false);
  const location = useLocation();

  const isDesktop = () => window.innerWidth > 768;

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
    <Box sx={{ width: 250 }} role="presentation">
      <Box className="flex justify-end p-2">
        <IconButton onClick={handleDrawerToggle}><CloseIcon /></IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            component={Link}
            to={item.path}
            key={item.label}
            onClick={handleDrawerToggle}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}

        <ListItem
          button
          onClick={() => {
            handleScrollToFooter();
            handleDrawerToggle();
          }}
        >
          <ListItemText primary="Contact Us" />
        </ListItem>

        {/* Mobile Courses Dropdown */}
        <ListItem button onClick={() => setShowCourses(!showCourses)}>
          <ListItemText primary="Courses" />
        </ListItem>
        {showCourses &&
          CoursesDropdown.map((faculty, idx) => (
            <ListItem
              key={idx}
              component={Link}
              to={`/courses/${faculty.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
              sx={{ pl: 4 }}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={faculty} />
            </ListItem>
          ))}

        {/* Mobile Admissions Dropdown */}
        <ListItem button onClick={() => setShowAdmissions(!showAdmissions)}>
          <ListItemText primary="Admissions" />
        </ListItem>
        {showAdmissions &&
          Object.values(admissionDropdown).flat().map((program, idx) => (
            <ListItem
              key={idx}
              component={Link}
              to={`/admissions/${program.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
              sx={{ pl: 4 }}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={program} />
            </ListItem>
          ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" className="!bg-blue-200 shadow-sm z-[1200]">
        <Container maxWidth="xl">
          <Toolbar className="flex justify-between">
            <Box className="flex items-center gap-3">
              <img
                src="https://pbs.twimg.com/media/GcfFXk-XkAAMdwf.jpg"
                alt="Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
              />
              <Typography variant="h6" className="text-blue-900 font-bold hidden sm:block">
                Parul University Portal
              </Typography>
            </Box>

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

              {/* Courses Dropdown (Desktop) */}
              <Box
                onMouseEnter={(e) => isDesktop() && setAnchorFaculty(e.currentTarget)}
                onMouseLeave={() => isDesktop() && setAnchorFaculty(null)}
                onClick={(e) =>
                  !isDesktop() && setAnchorFaculty(anchorFaculty ? null : e.currentTarget)
                }
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
                  <ClickAwayListener onClickAway={() => setAnchorFaculty(null)}>
                    <Paper
                      sx={{
                        zIndex: 1300,
                        bgcolor: 'rgba(219, 234, 254, 0.95)',
                        backdropFilter: 'blur(6px)',
                        color: '#1D4ED8',
                        width: 400,
                        p: 2,
                        borderRadius: 2,
                      }}
                    >
                      <Grid container spacing={1}>
                        {CoursesDropdown.map((faculty, idx) => (
                          <Link
                            key={idx}
                            to={`/courses/${faculty.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                            style={{ textDecoration: 'none' }}
                          >
                            <Typography
                              sx={{
                                fontSize: '0.85rem',
                                cursor: 'pointer',
                                px: 1,
                                py: 0.5,
                                borderRadius: 1,
                                '&:hover': {
                                  backgroundColor: '#BFDBFE',
                                  transform: 'scale(1.05)',
                                  transition: 'all 0.2s ease-in-out',
                                },
                              }}
                            >
                              {faculty}
                            </Typography>
                          </Link>
                        ))}
                      </Grid>
                    </Paper>
                  </ClickAwayListener>
                </Popper>
              </Box>

              {/* Admissions Dropdown (Desktop) */}
              <Box
                onMouseEnter={(e) => isDesktop() && setAnchorAdmission(e.currentTarget)}
                onMouseLeave={() => isDesktop() && setAnchorAdmission(null)}
                onClick={(e) =>
                  !isDesktop() && setAnchorAdmission(anchorAdmission ? null : e.currentTarget)
                }
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
                  <ClickAwayListener onClickAway={() => setAnchorAdmission(null)}>
                    <Paper
                      sx={{
                        zIndex: 1300,
                        bgcolor: 'rgba(219, 234, 254, 0.95)',
                        backdropFilter: 'blur(6px)',
                        color: '#1D4ED8',
                        width: 500,
                        p: 2,
                        borderRadius: 2,
                      }}
                    >
                      <Grid container spacing={2}>
                        {Object.values(admissionDropdown).flat().map((program, idx) => (
                          <Link
                            key={idx}
                            to={`/admissions/${program.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                            style={{ textDecoration: 'none' }}
                          >
                            <Typography
                              sx={{
                                fontSize: '0.85rem',
                                cursor: 'pointer',
                                px: 1,
                                py: 0.5,
                                borderRadius: 1,
                                fontWeight: '500',
                                '&:hover': {
                                  backgroundColor: '#BFDBFE',
                                  transform: 'scale(1.05)',
                                  transition: 'all 0.2s ease-in-out',
                                },
                              }}
                            >
                              {program}
                            </Typography>
                          </Link>
                        ))}
                      </Grid>
                    </Paper>
                  </ClickAwayListener>
                </Popper>
              </Box>
            </Box>

            {/* Mobile Menu Icon */}
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

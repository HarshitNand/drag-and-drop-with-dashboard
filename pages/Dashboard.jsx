// pages/Dashboard.jsx
import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TemplateList from '../components/TemplateList';
import DetailView from '../components/DetailView';

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // md = 900px

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
      {/* Top Navbar */}
      <Navbar />

      {/* Main layout container */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
        
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            width: isMobile ? '100%' : '5%',
            minWidth: isMobile ? '100%' : '100px',
            borderRight: isMobile ? 'none' : '1px solid #ccc',
            borderBottom: isMobile ? '1px solid #ccc' : 'none',
          }}
        >
          <Sidebar />
        </Box>

        {/* Main Content (TemplateList + DetailView) */}
        <Box
          sx={{
            width: isMobile ? '100%' : '100%',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            flex: 1,
       
          }}
        >
          {/* TemplateList */}
          <Box
            sx={{
              width: isMobile ? '100%' : '30%',
              borderRight: isMobile ? 'none' : '1px solid #ccc',
              borderBottom: isMobile ? '1px solid #ccc' : 'none',
              padding: 2,
              boxSizing: 'border-box',
            }}
          >
            <TemplateList />
          </Box>

          {/* DetailView */}
          <Box
            sx={{
              width: isMobile ? '100%' : '90%',
              padding: 2,
              boxSizing: 'border-box',
            }}
          >
            <DetailView />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

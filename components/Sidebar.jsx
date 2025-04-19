import React from 'react';
import { Box, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

const Sidebar = () => {
  return (
    <Box
      sx={{
        height: '100%',
        bgcolor: '#151515',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 2,
        gap: 2,
        color: 'white',
      }}
    >
       <IconButton sx={{ color: 'inherit' }}><ArrowForwardIosIcon /></IconButton>
      <IconButton sx={{ color: 'inherit' }}><HomeIcon /></IconButton>
      <IconButton sx={{ color: 'inherit' }}><ListIcon /></IconButton>
      <IconButton sx={{ color: 'inherit' }}><FolderOpenIcon /></IconButton>
      <IconButton sx={{ color: 'inherit' }}><PersonOutlineIcon /></IconButton>
     
      <IconButton sx={{ color: 'inherit' }}><SettingsIcon /></IconButton>
    </Box>
  );
};

export default Sidebar;

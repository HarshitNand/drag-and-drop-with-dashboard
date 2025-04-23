// components/TemplateList.jsx
import React from 'react';
import EditIcon from '@mui/icons-material/Edit'; // <-- Import this at the top

import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const sections = [
  'Subjective',
  'Objective',
  'Findings',
  'Diagnoses',
  'Treatment',
  'Recovery',
];

const TemplateList = () => {
  return (
    <Box
      p={2}
      display="flex"
      flexDirection="column"
      height="100%"
      sx={{
        backgroundColor: '#E3E3E3',
        borderRadius: 2,
        marginBottom: 2,
      }}
    >
      {/* Title Header */}
      <Box
        sx={{
          backgroundColor: '#E3E3E3',
          padding: 2,
          borderRadius: 2,
          marginBottom: 2,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Template
        </Typography>
      </Box>

      {/* Paper for Search Bar */}
      <Box
        sx={{
          backgroundColor: '#F2F2F2',
          padding: 2,
          borderRadius: 2,
          marginBottom: 2,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            padding: 2,
            backgroundColor: '#E3E3E3',
            borderRadius: 2,
            mb: 2,
          }}
        >
          <TextField
            fullWidth
            placeholder="Search Templates"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Paper>

        {/* Template Buttons */}
        {sections.map((section) => (
          <Paper
            key={section}
            elevation={1}
            sx={{
              padding: 1,
              backgroundColor: '#E3E3E3',
              borderRadius: 2,
              mb: 2,
            }}
          >
            <Button sx={{ color: 'black' }}>{section}</Button>
          </Paper>
        ))}

        {/* Edit Button */}
        <Box mt={3}>
  <Button
    fullWidth
    variant="contained"
    sx={{
      backgroundColor: '#151515',
      borderRadius: 1,
      color: 'white',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#151515',
      },
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 1.2, // space between text and icon
    }}
  >
    Edit
    <EditIcon />
  </Button>
</Box>

      </Box>
    </Box>
  );
};

export default TemplateList;

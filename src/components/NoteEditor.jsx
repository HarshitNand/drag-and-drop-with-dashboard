// // components/NoteEditor.jsx
// import React, { useState } from 'react';
// import { Box, Grid } from '@mui/material';
// import TemplateList from './TemplateList';
// import DetailView from './DetailView';

// const NoteEditor = () => {
//   const [selectedSection, setSelectedSection] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

//   return (
//     <Box p={2}>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={4}>
//           <TemplateList
//             selectedSection={selectedSection}
//             setSelectedSection={setSelectedSection}
//             isEditing={isEditing}
//             setIsEditing={setIsEditing}
//           />
//         </Grid>
//         <Grid item xs={12} md={8}>
//           <DetailView
//             selectedSection={selectedSection}
//             setSelectedSection={setSelectedSection}
//             isEditing={isEditing}
//             setIsEditing={setIsEditing}
//           />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default NoteEditor;

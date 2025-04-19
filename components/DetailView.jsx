import React, { useState } from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
  Box,
  Button,
  Typography,
  Paper,
  Card,
  CardContent,
} from '@mui/material';
import {
  Mic as MicIcon,
  Download as DownloadIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';

import {
  DndContext,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const initialData = [
  { id: '1', title: 'Subjective', description: 'Toothache for few days' },
  { id: '2', title: 'History of Presenting Complaints', description: 'Toothache present for few days' },
  { id: '3', title: 'Extra Oral Examination', description: 'Not performed' },
  { id: '4', title: 'Intra Oral Examination', description: 'Tenderness around molar\nSwollen gum' },
  { id: '5', title: 'Radiographic Findings', description: 'X-ray planned to confirm extent of infection' },
  { id: '6', title: 'Diagnoses', description: 'Suspected tooth abscess' },
];

const SortableItem = ({ id, title, description }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    marginBottom: '16px',
    backgroundColor: isDragging ? '#e3f2fd' : '#ECECEC',
    boxShadow: isDragging ? '0 4px 8px rgba(0, 0, 0, 0.2)' : '0 1px 3px rgba(0,0,0,0.1)',
    cursor: 'grab',
    touchAction: 'none',
    width: '60%',
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <CardContent>
        <Typography variant="subtitle2" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" style={{ whiteSpace: 'pre-line' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const DetailView = () => {
  const [sections, setSections] = useState(initialData);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 5,
      },
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = sections.findIndex((item) => item.id === active.id);
      const newIndex = sections.findIndex((item) => item.id === over?.id);
      setSections((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <Box
      p={2}
      display="flex"
      flexDirection="column"
      height="100%"
      sx={{
        backgroundColor: '#E3E3E3',
        borderRadius: 2,
      }}
    >
      {/* Top Header Row */}
      <Box
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 2,
  }}
>
<Box display="flex" alignItems="center" gap={1}>
    <Typography variant="h6" fontWeight="bold">
      Root Canal
    </Typography>
    <InfoOutlinedIcon sx={{ fontSize: 20, color: 'black' }} />
  </Box>

  <Box display="flex" alignItems="center" gap={2}>
  <Button
            variant="contained"
            startIcon={<MicIcon />}
            sx={{
              backgroundColor: '#FDFDFD',
              color: '#000',
              borderRadius: 5,
              height: 52,
              textTransform: 'none',
              boxShadow: 'none',
              px: 4,
            }}
          >
            Resume
          </Button>
    {/* <MicIcon sx={{ fontSize: 28, cursor: 'pointer' }} /> */}
    <DownloadIcon sx={{ fontSize: 28, color: 'black', cursor: 'pointer' }} />
    <DeleteIcon sx={{ fontSize: 28, color: 'red', cursor: 'pointer' }} />
  </Box>
</Box>


      {/* Draggable Section */}
      <Paper
        elevation={0}
        sx={{
          flex: 1,
          height: '60vh',
          overflowY: 'auto',
          padding: 2,
          backgroundColor: '#f9f9f9',
          borderRadius: 2,
          mb: 2,
        }}
      >
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={sections.map((item) => item.id)}
            strategy={verticalListSortingStrategy}
          >
            {sections.map((item) => (
              <SortableItem
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
              />
            ))}
          </SortableContext>
        </DndContext>
      </Paper>

      {/* Bottom Action Buttons */}
      <Box mt="auto" display="flex" justifyContent="flex-end" gap={2}>
      <Button
  variant="contained"
  sx={{
    backgroundColor: '#f9f9f9',
    borderRadius: 3,
    color: '#000',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#f9f9f9',
    },
  }}
>
  Send Referral
</Button>
<Button
  variant="contained"
  sx={{
    backgroundColor: '#151515',
    borderRadius: 3,
    color: 'white',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#151515',
      
    },
  }}
>
Save Note
</Button>
        
      </Box>
    </Box>
  );
};

export default DetailView;

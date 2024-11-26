'use client';

import { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';

interface CodeCellProps {
  identifier: string;
  distractors: string[];
}

export const CodeCell = ({ identifier, distractors }: CodeCellProps) => {
  const [showIdentifier, setShowIdentifier] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIdentifier(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleDistractorClick = (distractor: string) => {
    console.log('Clicked distractor:', distractor);
    // Execute your logic here
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: '1rem' }}>
      {showIdentifier ? (
        <Typography variant='h4'>{identifier}</Typography>
      ) : (
        <Box>
          <Box>
            {distractors.map((distractor) => (
              <Button
                key={distractor}
                variant='contained'
                color='primary'
                onClick={() => handleDistractorClick(distractor)}
                sx={{ m: 1 }}
              >
                {distractor}
              </Button>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

'use client';

import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [age, setAge] = useState('');
  const [csBackground, setCsBackground] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Save the data in session storage
    sessionStorage.setItem('code-comprehension-age', age);
    sessionStorage.setItem('code-comprehension-csBackground', csBackground);
    sessionStorage.setItem(
      'code-comprehension-yearsOfExperience',
      yearsOfExperience
    );
    // Navigate to the /practice page
    router.push('/practice');
  };

  return (
    <Container maxWidth='sm' sx={{ mt: '2rem' }}>
      <Typography variant='h4' sx={{ textAlign: 'center' }}>
        First some simple questions
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '1rem' }}>
        <FormControl
          component='fieldset'
          sx={{ mt: '2rem' }}
          onSubmit={handleSubmit}
        >
          <TextField
            id='age'
            label='Age'
            variant='outlined'
            type='number'
            color='secondary'
            fullWidth
            sx={{ mt: '1rem' }}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <Typography variant='body1' sx={{ mt: '1rem' }}>
            Do you have any programming background?
          </Typography>
          <RadioGroup
            aria-label='cs-background'
            name='cs-background'
            sx={{ mt: '1rem', display: 'flex', flexDirection: 'row' }}
            value={csBackground}
            onChange={(e) => setCsBackground(e.target.value)}
          >
            <FormControlLabel
              value='yes'
              control={<Radio color='secondary' />}
              label='Yes'
            />
            <FormControlLabel
              value='no'
              control={<Radio color='secondary' />}
              label='No'
            />
          </RadioGroup>
          {csBackground === 'yes' && (
            <TextField
              id='years-of-experience'
              label='Years of programming experience'
              variant='outlined'
              type='number'
              color='secondary'
              fullWidth
              sx={{ mt: '1rem' }}
              value={yearsOfExperience}
              onChange={(e) => setYearsOfExperience(e.target.value)}
            />
          )}
          <Button
            variant='outlined'
            color='secondary'
            sx={{ mt: '2rem' }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
}

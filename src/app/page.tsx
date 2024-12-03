import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import Link from 'next/link';
import { ListChecks } from 'lucide-react';

const ExperimentLanding = () => {
  return (
    <Box sx={{ maxWidth: 'lg', mx: 'auto', p: 3, gap: 8 }}>
      {/* Header Section */}
      <Box textAlign='center' sx={{ mb: 4 }}>
        <Typography variant='h3' component='h1' fontWeight='bold'>
          Identifier Style Recognition Study
        </Typography>
        <Typography variant='h5' color='text.secondary'>
          camelCase vs kebab-case
        </Typography>
      </Box>

      {/* Introduction Card */}
      <Card>
        <CardContent>
          <Typography variant='body1' gutterBottom>
            Welcome to our research study! Wee investigating how developers
            recognize and recall different identifier naming conventions. You
            will be comparing two common styles:
          </Typography>
          <Box
            sx={{
              mt: 2,
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 2,
            }}
          >
            <Box sx={{ p: 2, bgcolor: 'grey.100', borderRadius: 2 }}>
              <Typography variant='h6' fontFamily='monospace' fontWeight='bold'>
                camelCase
              </Typography>
              <Typography color='text.secondary'>
                Example:{' '}
                <code
                  style={{
                    backgroundColor: '#f3f3f3',
                    padding: '2px 4px',
                    borderRadius: '4px',
                  }}
                >
                  myIdentifierName
                </code>
              </Typography>
            </Box>
            <Box sx={{ p: 2, bgcolor: 'grey.100', borderRadius: 2 }}>
              <Typography variant='h6' fontFamily='monospace' fontWeight='bold'>
                kebab-case
              </Typography>
              <Typography color='text.secondary'>
                Example:{' '}
                <code
                  style={{
                    backgroundColor: '#f3f3f3',
                    padding: '2px 4px',
                    borderRadius: '4px',
                  }}
                >
                  my-identifier-name
                </code>
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Process Steps */}
      <Box sx={{ mt: 6 }}>
        <Typography
          variant='h4'
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <ListChecks size={24} />
          Experiment Process
        </Typography>
        <Box sx={{ mt: 4, display: 'grid', gap: 3 }}>
          {[
            {
              step: '1. Demographics Survey',
              description:
                'Brief questionnaire about your programming background and experience',
              duration: '~1 minute',
              borderColor: 'blue',
            },
            {
              step: '2. Practice Round',
              description:
                'Get familiar with the task format through 2-3 practice questions',
              duration: '~30 seconds',
              borderColor: 'green',
            },
            {
              step: '3. Main Experiment',
              description: 'Complete a series of identifier recognition tasks',
              duration: '~3-4 minutes',
              borderColor: 'purple',
            },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{ pl: 2, borderLeft: `4px solid ${item.borderColor}.500` }}
            >
              <Typography variant='h6' fontWeight='bold'>
                {item.step}
              </Typography>
              <Typography color='text.secondary'>{item.description}</Typography>
              <Typography variant='body2' color='text.disabled' sx={{ mt: 1 }}>
                Duration: {item.duration}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Important Notes */}
      <Card sx={{ mt: 6, bgcolor: 'grey.100' }}>
        <CardContent>
          <Typography variant='h5' sx={{ mb: 2 }}>
            Important Information
          </Typography>
          <Box>
            {[
              'Total experiment duration: 5-6 minutes',
              'No preparation needed',
              'No background knowledge required',
              'Please complete the experiment in one sitting',
            ].map((note, index) => (
              <Typography key={index} sx={{ mb: 1 }}>
                ✓ {note}
              </Typography>
            ))}
          </Box>
        </CardContent>
      </Card>

      {/* Start Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Link href='/demographics' passHref>
          <Button variant='contained' color='secondary' size='large'>
            Let&apos;s begin!
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
// Comment to trigger deployment

export default ExperimentLanding;

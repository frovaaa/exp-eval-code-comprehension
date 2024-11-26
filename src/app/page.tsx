import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Container maxWidth='sm' sx={{ mt: '2rem' }}>
      <Typography variant='h4' sx={{ textAlign: 'center' }}>
        camelCase vs kebab-case
      </Typography>
      <Typography variant='body1' sx={{ mt: '1rem', textAlign: 'justify' }}>
        Welcome! In this task, you will test your ability to recognize and
        recall identifiers written in either <strong>camelCase</strong> (e.g.,{' '}
        <code>myIdentifierName</code>) or <strong>kebab-case</strong> (e.g.,{' '}
        <code>my-identifier-name</code>). <br />
        Below are the full instructions:
      </Typography>

      <Typography variant='h6' sx={{ mt: '0.5rem' }}>
        Instructions:
      </Typography>
      <Box sx={{ mt: '0.5rem', textAlign: 'justify' }}>
        <Typography variant='body1'>
          1. <strong>Demographic Questionnaire</strong>: You will start by
          answering a few simple demographic questions. This step helps us
          analyze results based on user background.
        </Typography>
        <Typography variant='body1'>
          2. <strong>Practice Round</strong>: After the questionnaire, you will
          complete a practice round. This will help you get familiar with the
          task format.
        </Typography>
        <Typography variant='body1'>
          3. <strong>Main Test</strong>: During the main test:
        </Typography>
        <Box component='ul' sx={{ mt: '0.5rem', textAlign: 'justify', pl: 2 }}>
          <Box component='li'>
            <Typography variant='body1'>
              You will see an identifier displayed on the screen for a few
              seconds. Memorize it.
            </Typography>
          </Box>
          <Box component='li'>
            <Typography variant='body1'>
              The identifier will then disappear, and you will be shown four
              options: one correct identifier and three distractors. Your goal
              is to select the correct identifier.
            </Typography>
          </Box>
          <Box component='li'>
            <Typography variant='body1'>
              After selecting an option, a brief 1-2 second pause will follow
              before the next question appears.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Typography variant='h6' sx={{ mt: '1.5rem' }}>
        Estimated Duration:
      </Typography>
      <Typography variant='body1' sx={{ mt: '0.5rem', textAlign: 'justify' }}>
        The entire experiment, including the questionnaire, practice round, and
        main test, will take approximately <strong>2 minutes</strong>.
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '2rem' }}>
        <Link href='/demographics' passHref>
          <Button variant='outlined' color='secondary' size='large'>
            Let&apos;s begin!
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

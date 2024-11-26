import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Container maxWidth='sm' sx={{ mt: '2rem' }}>
      <Typography variant='h4' sx={{ textAlign: 'center' }}>
        camelCase vs kebab-case
      </Typography>
      <Typography variant='body1' sx={{ mt: '1rem' }}>
        Bla bla bla description of the test Bla bla bla description of the test
        Bla bla bla description of the test Bla bla bla description of the test
        Bla bla bla description of the test
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '1rem' }}>
        <Link href='/demographics' passHref>
          <Button variant='outlined' color='secondary'>
            Are you ready?
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

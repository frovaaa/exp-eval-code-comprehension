import { Container, Typography, Box, Button } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth='md'>
      {/* Simple landing page where we explain the study that we are doing (comparing camelCase to kebab-case) */}
      <Typography variant='h4' gutterBottom>
        Welcome to the Code Comprehension Study!
      </Typography>
      <Typography variant='body1' gutterBottom>
        We are conducting a study to compare the comprehension of camelCase and
        kebab-case in code.
      </Typography>
      <Typography variant='body1' gutterBottom>
        In this study, you will be presented with code snippets and asked to
        answer questions about them.
      </Typography>
      <Typography variant='body1' gutterBottom>
        Please click the button below to start the study.
      </Typography>
      <Box mt={2}>
        <Button variant='contained' color='primary' href='/study'>
          Start Study
        </Button>
      </Box>
    </Container>
  );
}

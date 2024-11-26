import { CodeCell } from '@/components/CodeCell';
import { Container, Typography } from '@mui/material';

export default function PracticePage() {
  return (
    <Container maxWidth='sm' sx={{ mt: '2rem' }}>
      <Typography variant='h4' sx={{ textAlign: 'center' }}>
        Practice Round
      </Typography>
      <CodeCell
        identifier='myHouse'
        distractors={['myBouse', 'nyHouse', 'mySpouse'].concat(['myHouse'])}
      />
    </Container>
  );
}

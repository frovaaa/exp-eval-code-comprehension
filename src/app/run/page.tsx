import { CodeCell } from '@/components/CodeCell';
import { Container, Divider, Typography } from '@mui/material';
import { questions } from '@/utils/questions';
import { question } from '@/types/question';

export default function RunPage() {
  // Get all questions and shuffle them
  const allQuestions: question[] = [
    ...questions.camelCase,
    ...questions.kebabCase,
  ];
  allQuestions.sort(() => Math.random() - 0.5);

  return (
    <Container maxWidth='md' sx={{ mt: '2rem' }}>
      <Typography variant='h4' sx={{ textAlign: 'center' }}>
        Real Round
      </Typography>
      <Divider />
      <CodeCell questions={allQuestions} />
    </Container>
  );
}

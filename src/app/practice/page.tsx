import { CodeCell } from '@/components/CodeCell';
import { Container, Divider, Typography } from '@mui/material';
import { questions } from '@/utils/questions';
import { question } from '@/types/question';

export default function PracticePage() {
  const randomCamelCaseQuestion: question =
    questions.camelCase[Math.floor(Math.random() * questions.camelCase.length)];

  const randomKebabCaseQuestion: question =
    questions.kebabCase[Math.floor(Math.random() * questions.kebabCase.length)];

  const codeCellQuestions: question[] = [
    randomCamelCaseQuestion,
    randomKebabCaseQuestion,
  ];

  return (
    <Container maxWidth='md' sx={{ mt: '2rem' }}>
      <Typography variant='h3' sx={{ textAlign: 'center', mb: '2rem' }}>
        Practice Round
      </Typography>
      <Typography
        variant='body1'
        sx={{ mt: '2rem', mb: '2rem', textAlign: 'center' }}
      >
        Please select the card with the answer that matches the identifier below
      </Typography>
      <Divider />
      <CodeCell questions={codeCellQuestions} practice={true} />
    </Container>
  );
}

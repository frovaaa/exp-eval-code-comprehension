import { CodeCell } from '@/components/CodeCell';
import { Container, Divider, Typography } from '@mui/material';
import { questions } from '@/utils/questions';
import { question } from '@/types/question';

export default function PracticePage() {
  console.log(questions.camelCase.length);
  console.log(questions.kebabCase.length);

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
      <Typography variant='h4' sx={{ textAlign: 'center', mb: '2rem' }}>
        Practice Round
      </Typography>
      <Divider />
      <CodeCell questions={codeCellQuestions} practice={true} />
    </Container>
  );
}

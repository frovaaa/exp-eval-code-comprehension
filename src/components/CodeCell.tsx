'use client';

import { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { question } from '@/types/question';
import Link from 'next/link';
import Confetti from 'react-confetti';
import { saveResultsToDatabase } from '@/lib/saveResults';
import { result, demographics } from '@/types/result';

interface CodeCellProps {
  questions: question[];
  practice?: boolean;
}

export const CodeCell = ({ questions, practice = false }: CodeCellProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [results, setResults] = useState<result[]>([]);
  const [resultsSaved, setResultsSaved] = useState(false);

  useEffect(() => {
    setStartTime(Date.now()); // Capture the start time when the component mounts
  }, [currentQuestionIndex]);

  const handleDistractorClick = (distractor: string) => {
    const endTime = Date.now();
    const elapsedTime = startTime ? endTime - startTime : 0;
    const isCorrect = distractor === questions[currentQuestionIndex].identifier;

    // Save the result for the current question
    setResults((prevResults) => [
      ...prevResults,
      {
        elapsedTime,
        isCorrect,
        questionId: questions[currentQuestionIndex].id,
      },
    ]);

    // Hide buttons to prevent spamming
    setButtonsDisabled(true);

    // Move to the next question after a brief break
    setTimeout(() => {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setButtonsDisabled(false); // Re-enable buttons for the next question
      setStartTime(null); // Reset start time for the next question
    }, 1000); // 1 second break between questions
  };

  useEffect(() => {
    if (
      currentQuestionIndex >= questions.length &&
      !resultsSaved &&
      !practice
    ) {
      // Get the demographics from the session storage
      const age = sessionStorage.getItem('code-comprehension-age');
      const csBackground = sessionStorage.getItem(
        'code-comprehension-csBackground'
      );
      const yearsOfExperience = sessionStorage.getItem(
        'code-comprehension-yearsOfExperience'
      );

      const demographics: demographics = {
        age: age ? parseInt(age) : 0,
        csBackground: csBackground === 'yes',
        yearsOfExperience: yearsOfExperience ? parseInt(yearsOfExperience) : 0,
      };

      saveResultsToDatabase(results, demographics);
      setResultsSaved(true); // Mark results as saved
    }
  }, [currentQuestionIndex, questions.length, results, resultsSaved, practice]);

  if (currentQuestionIndex >= questions.length) {
    return (
      <>
        {practice ? (
          <Box sx={{ textAlign: 'center', mt: '1rem' }}>
            <Typography variant='h4'>All questions completed!</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: '1rem' }}>
              <Link href='/run' passHref>
                <Button variant='outlined' color='secondary'>
                  Start the real deal!
                </Button>
              </Link>
            </Box>
          </Box>
        ) : (
          <Box sx={{ textAlign: 'center', mt: '1rem' }}>
            <Typography variant='h4'>All questions completed!</Typography>
            <Typography variant='h5'>Thank you for participating!</Typography>
            <Confetti />
          </Box>
        )}
      </>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const fixedCurrentQuestion = {
    ...currentQuestion,
    distractors: [
      ...currentQuestion.distractors,
      currentQuestion.identifier,
    ].sort(() => Math.random() - 0.5),
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: '1rem' }}>
      <Box>
        {!buttonsDisabled && (
          <Typography variant='h4' align='center'>
            {fixedCurrentQuestion.identifier}
          </Typography>
        )}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            '& > *': {
              width: 'calc(50% - 8px)', // 2 buttons per row with some margin
              margin: '2px',
            },
            flexWrap: 'wrap',
            mt: '1rem',
          }}
        >
          {!buttonsDisabled &&
            fixedCurrentQuestion.distractors.map((option) => (
              <Button
                key={option}
                variant='contained'
                color='secondary'
                onClick={() => handleDistractorClick(option)}
                sx={{
                  m: 1,
                  textTransform: 'none',
                  margin: '0.2rem',
                  padding: '0.7rem',
                }}
              >
                {option}
              </Button>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

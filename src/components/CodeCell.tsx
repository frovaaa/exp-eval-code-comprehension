'use client';

import { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { question } from '@/types/question';
import Link from 'next/link';
import Confetti from 'react-confetti';

interface CodeCellProps {
  questions: question[];
  practice?: boolean;
}

interface Result {
  elapsedTime: number;
  isCorrect: boolean;
}

export const CodeCell = ({ questions, practice = false }: CodeCellProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showIdentifier, setShowIdentifier] = useState(true);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIdentifier(false);
      setStartTime(Date.now()); // Capture the start time when the identifier is hidden
    }, 1500);

    return () => clearTimeout(timer);
  }, [currentQuestionIndex]);

  const handleDistractorClick = (distractor: string) => {
    const endTime = Date.now();
    const elapsedTime = startTime ? endTime - startTime : 0;
    const isCorrect = distractor === questions[currentQuestionIndex].identifier;
    console.log('Clicked distractor:', distractor);
    console.log('Elapsed time (ms):', elapsedTime);
    console.log('Elapsed time (s):', elapsedTime / 1000);
    console.log('Is correct:', isCorrect);

    // Save the result for the current question
    setResults((prevResults) => [...prevResults, { elapsedTime, isCorrect }]);

    // Disable buttons to prevent spamming
    setButtonsDisabled(true);

    // Move to the next question after a brief break
    setTimeout(() => {
      setShowIdentifier(true);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setButtonsDisabled(false); // Re-enable buttons for the next question
      setStartTime(null); // Reset start time for the next question
    }, 1000); // 1 second break between questions
  };

  if (currentQuestionIndex >= questions.length) {
    console.log('All results:', results);
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
      {showIdentifier ? (
        <Typography variant='h4'>{fixedCurrentQuestion.identifier}</Typography>
      ) : (
        <Box>
          <Box>
            {fixedCurrentQuestion.distractors.map((option) => (
              <Button
                key={option}
                variant='contained'
                color='secondary'
                onClick={() => handleDistractorClick(option)}
                sx={{ m: 1, textTransform: 'none' }}
                disabled={buttonsDisabled}
              >
                {option}
              </Button>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

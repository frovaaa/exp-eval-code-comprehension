'use server';

import { getDbAndClient, closeDbAndClient } from '@/lib/mongodb';
import { demographics, result } from '@/types/result';

export const saveResultsToDatabase = async (
  results: result[],
  demographics: demographics
) => {
  try {
    const { db } = await getDbAndClient();
    const collection = db.collection('runs');
    await collection.insertOne({
      results,
      demographics,
      createdAt: new Date(),
    });
    console.log('Results saved to database');
  } catch (error) {
    console.error('Error saving results to database:', error);
  } finally {
    await closeDbAndClient();
  }
};

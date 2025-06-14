"use server";
import {prisma} from '@/liv/db';
import { revalidatePath } from 'next/cache';


export async function addHistory(
  formData: FormData
) {
  try {
    const newHistory = await prisma.history.create({
      data: {
        description: formData.get('description') as string,
        amount: parseFloat(formData.get('amount') as string),
        type: formData.get('type') as 'INCOME' | 'EXPENSE', 
        userId: "30ss"
      },
    });
    revalidatePath('/app/dashboard'); // Revalidate the dashboard path to reflect the new history
  } catch (error) {
    console.error('Error adding history:', error);
    throw error;
  }
}

export async function deleteExpense(id: string) {

  await prisma.history.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/app/dashboard");
}
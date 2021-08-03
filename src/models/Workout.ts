import mongoose from 'mongoose'
import { ExerciseDocument, Exercise } from './Exercise'

export type WorkoutDocument = mongoose.Document & {
	name: string;
	day: string;
	target: string;
	exercises: Array<ExerciseDocument>
}

const workoutScehma = new mongoose.Schema<WorkoutDocument>(
	{
		name: String,
		day: String,
		target: String,
		exercises: [Exercise]
	}
)

export const Workout = mongoose.model<WorkoutDocument>("Workout", workoutScehma)

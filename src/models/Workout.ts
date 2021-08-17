import mongoose from 'mongoose'
import { ExerciseI, Exercise } from './Exercise'

export interface WorkoutI {
	exercises: Array<ExerciseI>
}

export const workoutSchema = new mongoose.Schema<WorkoutI>(
	{
		exercises: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Exercise'
		}]
	}
)

export const Workout = mongoose.model<WorkoutI>("Workout", workoutSchema)

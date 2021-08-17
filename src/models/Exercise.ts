import mongoose from 'mongoose'


export interface ExerciseI {
	name: string;
	reps: number;
	sets: number;
	weight?: number;
}


const exerciseSchema = new mongoose.Schema<ExerciseI>(
	{
		name: {
			type: String,
			required: true,
		}, reps: {
			type: Number,
			required: true,
		}, sets: {
			type: Number,
			required: true,
		}, weight: Number
	}
)


export const Exercise = mongoose.model<ExerciseI>("Exercise", exerciseSchema);

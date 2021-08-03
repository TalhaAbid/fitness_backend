import mongoose from 'mongoose'


export type ExerciseDocument = mongoose.Document & {
	name: string;
	reps: number;
	sets: number;
	weight: number;
	days: Array<String>;
}


const exerciseSchema = new mongoose.Schema<ExerciseDocument>(
	{
		name: String,
		reps: Number,
		sets: Number,
		weight: Number,
		days: [String]
	}
)


export const Exercise = mongoose.model<ExerciseDocument>("Exercise", exerciseSchema);

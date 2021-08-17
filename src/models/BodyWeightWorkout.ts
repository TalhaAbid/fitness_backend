import mongoose from 'mongoose'



export type BodyWeightWorkoutDocument = mongoose.Document & {
    name: string;
    reps: number;
    sets: number;
    timePerSet: number;
}


const BodyWeightWorkoutSchema = new mongoose.Schema<BodyWeightWorkoutDocument>(
    {

    }
)

export const BodyWeightWorkout = mongoose.model<BodyWeightWorkoutDocument>("BodyWeightWorkout",);

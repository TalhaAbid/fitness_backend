import mongoose from 'mongoose'
import { WorkoutI, Workout } from './Workout'

export interface UserI {
    username: string;
    passwordHash: string;
    workouts: Array<WorkoutI>;
}

const userSchema = new mongoose.Schema<UserI>({
    username: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    workouts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workout'
    }]

})

userSchema.set('toJSON', {
    transform: (_document: UserI, returnedObject: UserI & mongoose.Document) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.passwordHash;
    }
})



export const User = mongoose.model<UserI>("User", userSchema);

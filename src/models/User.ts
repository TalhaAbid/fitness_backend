import mongoose from 'mongoose'



export type UserDocument = mongoose.Document & {
    username: string;
    passwordHash: string;
    age: number;
}

const userSchema = new mongoose.Schema<UserDocument>(
    {
        username: String,
        passwordHash: String,
        age: Number
    }
)

userSchema.set('toJSON', {
    transform: (_document: UserDocument, returnedObject: UserDocument) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.passwordHash;
    }
})


export const User = mongoose.model<UserDocument>("User", userSchema);

import express, { Response, Request, NextFunction } from 'express'
import { Exercise, ExerciseDocument } from '../models/Exercise'


// Routes
// Get Exercises


export const getExercisesApi = async (_req: Request, res: Response) => {
	const exercises: Array<ExerciseDocument> = await Exercise.find({});
	console.log(exercises)
	res.send(exercises);
}


export const addExerciseApi = async (req: Request, res: Response) => {
	const exercise = req.body;
	if (exercise === null) {
		res.sendStatus(400);
	}
	const exerciseSaved = new Exercise(exercise);
	const saved = await exerciseSaved.save();
	res.json(saved);
}

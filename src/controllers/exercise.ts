import express, { Response, Request, NextFunction } from 'express'
import { Exercise, ExerciseI } from '../models/Exercise'


// Routes
// Get Exercises


export const getExercisesApi = async (_req: Request, res: Response) => {
	const exercises = await Exercise.find({});
	console.log(exercises)
	res.send(exercises);
}


export const addExerciseApi = async (req: Request, res: Response, next: NextFunction) => {
	const exercise = req.body;
	console.log(exercise)
	if (exercise === null) {
		res.sendStatus(400);
	} else if (exercise.name === undefined || exercise.reps === undefined || exercise.sets === undefined) {
		res.status(400).send({ error: 'Missing name, sets or reps' })
		return;
	} else {
		const exerciseSaved = new Exercise(exercise);
		const saved = await exerciseSaved.save();
		res.json(saved);
	}
}

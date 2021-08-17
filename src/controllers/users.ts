import express, { Request, Response } from 'express'
import { User, UserI } from '../models/User'
import bcrypt from 'bcrypt'


// Routes
// Get all Users

export const getUsersApi = async (_req: Request, res: Response) => {
    const users: Array<UserI> = await User.find({});
    res.json(users);
}

export const addUserApi = async (req: Request, res: Response) => {
    const body = req.body;
    if (body === null) {
        res.sendStatus(400);
    }
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(body.password, saltRounds);
    const user = new User({
        username: body.username,
        passwordHash: passwordHash,
    })
    const savedUser: UserI = await user.save();
    console.log(savedUser);
    res.json(savedUser)
}

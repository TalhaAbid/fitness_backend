import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { User, UserI } from '../models/User'
import { Response, Request } from 'express'

export const loginUserApi = async (req: Request, res: Response) => {
    const body = req.body;
    console.log(body)

    const user = await User.findOne({ username: body.username })
    const passwordCorrect = user === null ? false :
        await bcrypt.compare(body.password, user.passwordHash);

    if (user === null || passwordCorrect === false) {
        return res.status(401).json({
            error: 'invalid username or password'
        })
    }

    const userForToken = {
        username: user.username,
        id: user._id
    }

    const token = jwt.sign(userForToken, process.env.SESSION_SECRET);
    res.status(200).send({
        token: token,
        username: user.username,
    })
}

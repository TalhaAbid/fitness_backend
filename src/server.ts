import errorHandler from 'errorhandler'
import app from './index'


/**
	* Error Handler. Provides Full Stack
	*/

if (process.env.NODE_ENV === "development") {
	app.use(errorHandler());
}


/**
	* Start Express Server.
	*/

const server = app.listen(app.get("port"), () => {
	console.log(` App is running at http://localhost:${app.get("port")} in ${app.get("env")} mode`)
})

export default server;

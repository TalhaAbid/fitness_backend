import winston from 'winston'


// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.json(),
//   defaultMeta: { service: 'user-service' },
//   transports: [
//
//     - Write all logs with level `error` and below to `error.log`
//     - Write all logs with level `info` and below to `combined.log`
//
//     new winston.transports.File({ filename: 'error.log', level: 'error' }),
//     new winston.transports.File({ filename: 'combined.log' }),
//   ],
// });


const options: winston.LoggerOptions = {
	transports: [
		new winston.transports.Console({
			level: process.env.NODE_ENV === "production" ? "erorr" : "debug"
		}),
		new winston.transports.File({ filename: "debug.log", level: "debug" })
	]
};

const logger = winston.createLogger(options);

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== "production") {
	logger.debug("Logging initialized at debug level");
}
export default logger;

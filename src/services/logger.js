import winston from 'winston';

/**
 * Maximum logs level to logging,
 * can be passed as environment variable LOG_LEVEL,
 * eg. `LOG_LEVEL=error` or `LOG_LEVEL=0`
 *
 * options: { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
*/
winston.level = process.env.LOG_LEVEL || 'info';

/**
 * Logging to the file if set environment variable LOG_FILE
 */
const TRANSPORT_FILE_OPTIONS = {
  filename: `${Date.now()}.log`,
  handleExceptions: true,
  humanReadableUnhandledException: true,
};
process.env.LOG_FILE && winston.add(winston.transports.File, TRANSPORT_FILE_OPTIONS);

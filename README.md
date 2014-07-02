log4js-example
==============

A full express application that demonstrates how to configure log4js for the most common use-case.

To run:
```
npm install
npm start
```

Log config
==========
Config file is in `config/log4js.json`. It defines three appenders that are children of the clustered appender. The clustered appender makes sure that only the master process writes to the log files, otherwise having multiple processes try to write at the same time will cause problems. Three log files are defined: `log/app.log` gets all the log messages and is configured to rotate when the file gets to 10Mb in size, keeping 3 backups of the file; `log/errors.log` uses the logLevelFilter to only get ERROR messages; `log/access.log` contains only the http request logs, using the connect-logger, and is configured to rotate every day.

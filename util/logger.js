var log4js = require('log4js');
var defaultLevel = 'TRACE';

exports.getLogger = function(name, level) {
  var logger = log4js.getLogger(name);
  level = level ? level : defaultLevel;
  logger.setLevel(level);

  return logger;
};
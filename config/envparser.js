const DotEnv = require('dotenv')
const parsedEnv = DotEnv.config().parsed

module.exports = function () {
  // Let's stringify our variables
  for (key in parsedEnv) {
    if (typeof parsedEnv[key] === 'string') {
      //parsedEnv[key] = JSON.stringify(parsedEnv[key])
      parsedEnv[key] = parsedEnv[key]
    }
  }
  return parsedEnv
}

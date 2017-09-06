const stackery = require('stackery')

module.exports = function handlerconst stackery = require('stackery');

module.exports = function handleEvents(data) {
  // The REST node will send the content in a buffer in the body field
  const body = JSON.parse(data.body.toString());
  return body.challenge;
}(message) {
  console.dir(message)

  let response = {}
  
  return response
}
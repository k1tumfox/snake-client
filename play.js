
const { connect } = require('./client');
const { setupInput } = require('./input');
console.log('Connecting ...');

const conn = connect();
setupInput(conn); //update to send connection object returned from connect() into 
//setupInput() function

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
/* const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = stdin.on('data', (data) => { //handleUserInput 
    if (data === '\u0003') {
      process.exit();
    }
  });

  return stdin;
} */


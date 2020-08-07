const { connect } = require('./client');
const { setupInput } = require('./input');
console.log('Connecting ...');

const conn = connect();
setupInput(conn); //update to send connection object returned from connect() into 
//setupInput() function
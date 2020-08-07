const net = require('net');
const { IP, PORT } = require('./constants');

//connects with the game server
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  //connect event handler
  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write('Name: T7K'); //writing data to a connection
  });
  //handling data from server, eg kick from server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  //handing kick from server?...
  
  return conn;
}
module.exports = { connect }; //ES6 object shorthand exports
                  //object containing our connect function
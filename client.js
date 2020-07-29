const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  //connect event
  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write('Name: T7K'); //writing data to a connection
    //conn.write('Move: up'); //
    /* setInterval(() => {
      conn.write('Move: right');
    }, 50); */
   
  });
  
  conn.on('connect', () => {
  
  });
 /*  conn.on('connect', () => {
    conn.write('Move: right'); //

  }); */

  //handling data
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  //handing kick from server?...
  
  return conn;
}

module.exports = { connect };
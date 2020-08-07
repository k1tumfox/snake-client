let connection; //stores the active TCP connection object

//handle user input via stdin
const setupInput = function(conn) {
  connection = conn; //I don't think I need this?
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = stdin.on('data', (data) => { //handleUserInput 
    if (data === '\u0003') { //ctrl + c to exit 
      process.exit();
    } 
    if (data === 'w') {
      conn.write('Move: up');
    } 
    if (data === 'a') {
      conn.write('Move: left');
    } 
    if (data === 's') {
      conn.write('Move: down');
    } 
    if (data === 'd') {
      conn.write('Move: right');
    }
    if (data === 'q') {
      conn.write('Say: python ftw!');
    }
    if (data === 'e') {
      conn.write("Say: you zig, I'll zag");
    }
  });
  return stdin;
}
module.exports = { setupInput };
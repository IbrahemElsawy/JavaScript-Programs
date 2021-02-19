// Node.js socket client script
const net = require('net');
// Connect to a server @ port 59001
const client = net.createConnection({ port: 59001 }, () => {
  console.log('CLIENT: I connected to the server.');
  client.write('CLIENT: This is ielsawy!');
});
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});
client.on('end', () => {
  console.log('CLIENT: I disconnected from the server.');
});

const app = require('./app');

const {PORT} = require('./config');

app.listen(PORT, () => {
  console.log('Server runnig on port', PORT);
});

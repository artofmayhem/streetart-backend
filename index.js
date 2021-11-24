const app = require('./api/server');

const port = process.env.PORT || 5000;
const message = `Server is alive and well on port ${port}`;

app.listen(port, () => console.log(message));

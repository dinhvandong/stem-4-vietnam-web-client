// // index.js

// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

app.use("/", express.static("client/build"));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

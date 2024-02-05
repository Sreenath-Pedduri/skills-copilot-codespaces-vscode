// Create web server with express
const express = require('express');
const app = express();
const port = 3000;
const comments = [
  { name: 'Mike', comment: 'Hello!' },
  { name: 'Amy', comment: 'I like it!' },
  { name: 'Joy', comment: 'Good job!' },
  { name: 'Bob', comment: 'Nice work!' }
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

```javascript
// Path: index.js
// Create web server with express
const express = require('express');
const app = express();
const port = 3000;
const comments = [
  { name: 'Mike', comment: 'Hello!' },
  { name: 'Amy', comment: 'I like it!' },
  { name: 'Joy', comment: 'Good job!' },
  { name: 'Bob', comment: 'Nice work!' }
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

```javascript
// Path: index.js
// Create web server with express
const express = require('express');
const app = express();
const port = 3000;
const comments = [
  { name: 'Mike', comment: 'Hello!' },
  { name: 'Amy', comment: 'I like it!' },
  { name: 'Joy', comment: 'Good job!' },
  { name: 'Bob', comment: 'Nice work!' }
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

```javascript
// Path: index.js
// Create web server with express
const express = require('express');
const app = express();
const port = 3000;
const comments = [
  { name: 'Mike', comment: 'Hello!' },
  { name: 'Amy', comment: 'I like it!' },
  { name: 'Joy', comment: 'Good job!' },
  { name: 'Bob', comment: 'Nice work!' }

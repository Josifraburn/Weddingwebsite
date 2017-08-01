const express = require('express');
const app = express();

const PORT = 5050

app.use('/', express.static('.'))

app.listen(PORT, () => {
	console.log(`Server is Listening on PORT: ${PORT}`);
})

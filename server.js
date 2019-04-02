const express = require('express');

const app = express();

require('./config/db');
require('./models/User');

//Use Routes
require('./routes/api/posts')(app);
require('./routes/api/profile')(app);
require('./routes/api/users')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));

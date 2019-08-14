const server = require("./api/server.js");

const port = 4000;
server.listen(port, () =>
    console.log(`\n *** Changing name to Simon and speaking in 3rd person on port ${port} *** \n`)
);
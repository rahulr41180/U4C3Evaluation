
const app = require("./index");

const Connectdb = require("./configs/db");

app.listen(6100, async() =>
{
    try
    {
        Connectdb();

        console.log("listening on port 6100");
    }
    catch(error)
    {
        console.log("error : ", error);
    }
})
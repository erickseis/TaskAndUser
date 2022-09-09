const { app } = require('./app');

// Utils
const { initModels } = require('./models/initModels')
const { db } = require('./utils/database.utils');


const startServer = async () => {
    try {
        //Database authenticated
        await db.authenticate();

        //estabilish models relations
        initModels();
        //database synced
        await db.sync();

        //spin up server
        const PORT = process.env.PORT || 4000;
        app.listen(PORT, () => {
            console.log(`Express app runing on port: ${PORT}`);
        });
    } catch (error) {
        console.log(error)
    }
};

startServer();
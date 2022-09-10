const dotenv = require('dotenv');
const { app } = require('./app');
const { db } = require('./utils/database.utils');
// Utils
const { initModels } = require('./models/initModels')

dotenv.config({ path: './config.env' });

const startServer = async () => {
    try {
        //Database authenticated
        await db.authenticate().then();

        //estabilish models relations
        initModels();
        //database synced
        await db.sync().then();

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
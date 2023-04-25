import pkg from "../package.json";
import * as process from "process";

const ENV = {
    Application: {
        APP_NAME: pkg.name,
        APP_VERSION: pkg.version,
        ENVIRONMENT: process.env.ENVIRONMENT as string,
        PORT: Number(process.env.PORT),
    },
    Log: {
        FILE: process.env.FILE as string,
        FOLDER: process.env.FOLDER as string,
    },
    Database: {
        NODES: (process.env.DB_NODES as string).split(","),
        DATACENTER: process.env.DB_DATACENTER as string,
        USERNAME: process.env.DB_USERNAME as string,
        PASSWORD: process.env.DB_PASSWORD as string,
    },
};
process.env.WSLENV = "wsl";

export default ENV;

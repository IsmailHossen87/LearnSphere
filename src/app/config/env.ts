import dotenv from "dotenv";
dotenv.config();


interface EnvConfig {
    PORT?: string,
    DB_URL: string;
}



const loadEnvVariable = (): EnvConfig => {
    const requiredEnvVariables: string[] = [
        "PORT",
        "DB_URL"
    ];

    requiredEnvVariables.forEach((key) => {
        if (!process.env[key]) {
            throw new Error(`Missing required environment variable: ${key}`);
        }
    });


    return {
        PORT: process.env.PORT,
        DB_URL: process.env.DB_URL as string,
    };
};


export const envVar = loadEnvVariable();
import dotenv from "dotenv"
import fs from "fs"

const env = process.env.NODE_ENV
const envFile: string = `.env.${env}`

if (fs.existsSync(envFile)) {
    console.log(`Using ${envFile} file to supply config environment variables`)
    dotenv.config({ path: envFile })
}
export const PORT = process.env.PORT;

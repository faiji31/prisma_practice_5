import app from "./app"
import config from "./config";
import { prisma } from "./lib/prisma";


const PORT = config.port

async function main(){
    try {
        await prisma.$connect()
        console.log("connect the database successfully!")
        app.listen(PORT,()=>{
            console.log(`server is runnging on port ${PORT}`)
        })
    } catch (error) {
        console.log('error showing', error)
        await prisma.$disconnect()
        process.exit(1)
        
    }
}

main()
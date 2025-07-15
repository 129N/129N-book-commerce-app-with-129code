//import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "@/generated/prisma";
let prisma: PrismaClient;


//global object hot reload prevention
//シングルトン
const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined;
}

if(!globalForPrisma.prisma){
    globalForPrisma.prisma = new PrismaClient();
}


prisma = globalForPrisma.prisma;

export default prisma;

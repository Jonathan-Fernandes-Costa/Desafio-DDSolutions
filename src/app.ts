import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { tasksRoutes } from "./modules/tasks/tasks.routes";
import { userRoutes } from "./modules/user/user.routes";
import { userSchemas } from "./modules/user/user.schema";
import { tasksSchemas } from "./modules/tasks/tasks.schema";
import fjwt from "@fastify/jwt"


export const server = fastify()

declare module "fastify"{
    export interface FastifyInstance{
        authenticate: any
    }
}
server.register(fjwt, {
    secret: "iokdjadjpoijaplsjdapojdpaj123141akdkajmd1",
});

server.decorate("authenticate", async(request:FastifyRequest, reply:FastifyReply)=>{
    try{
        await request.jwtVerify()
    }catch(e){
        return reply.send(e)
    }
})
server.get('/teste', async function(){
    return {status: "Ok"}
})

async function main() {
    for(const schema of [...userSchemas, ...tasksSchemas]){
        server.addSchema(schema);
    }

    server.register(userRoutes, {
        prefix: "api/users"
    })
    server.register(tasksRoutes, {
        prefix: "api/tasks"
    })
    try{
        await server.listen({
            port: 3000
        }).then(()=>{
            console.log('Server rodando em http://localhost:3000')
        })
    }catch(e){
        console.error(e);
        process.exit(1)
    }

}

main()
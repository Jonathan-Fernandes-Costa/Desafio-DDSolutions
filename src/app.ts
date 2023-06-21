import fastify from "fastify";
import { tasksRoutes } from "./modules/tasks/tasks.routes";

const server = fastify()
server.get('/teste', async function(){
    return {status: "Ok"}
})

async function main() {
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
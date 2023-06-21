import { FastifyInstance } from 'fastify';
import { registerTaskHandler } from './tasks.controller';
export async function tasksRoutes(server: FastifyInstance){
    server.post('/', registerTaskHandler)
}
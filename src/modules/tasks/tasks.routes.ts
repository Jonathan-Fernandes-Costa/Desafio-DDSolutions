import { FastifyInstance } from 'fastify';
import { createTaskHandler } from './tasks.controller';
export async function tasksRoutes(server: FastifyInstance){
    server.post('/', createTaskHandler)
}
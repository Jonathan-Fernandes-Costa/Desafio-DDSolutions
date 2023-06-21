import { $ref } from './tasks.schema';
import { FastifyInstance } from 'fastify';
import { createTaskHandler, deleteTaskHandler, getTasksHandler, updateTaskHandler } from './tasks.controller';
import { deleteTask } from './tasks.service';
export async function tasksRoutes(server: FastifyInstance){
    server.post('/', {
        preHandler: [server.authenticate],
        schema:{
            body: $ref('createTaskSchema'),
            response:{
                201: $ref('taskResponseSchema')
            }
        }
    },createTaskHandler)

    server.get('/', {
        schema: {
            response: {
                200: $ref('tasksResponseSchema')
            }
        }
    }, getTasksHandler)

    server.delete('/:id', deleteTaskHandler)
    server.put('/:id', updateTaskHandler)
}

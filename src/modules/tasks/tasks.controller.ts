import { FastifyRequest, FastifyReply } from "fastify";
import { createTask } from "./tasks.service";
import { CreateTaskInput } from "./tasks.schema";
export async function createTaskHandler(request:FastifyRequest<{Body: CreateTaskInput}>){
    const task = await createTask({
        ...request.body,
        ownerId: request.user.id,
    })
    return task
}
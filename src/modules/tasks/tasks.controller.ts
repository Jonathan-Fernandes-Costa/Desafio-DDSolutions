import { FastifyReply, FastifyRequest} from "fastify";
import { createTask, getTasks, deleteTask, updateTask} from "./tasks.service";
import { CreateTaskInput, DeletePutTaskInput } from "./tasks.schema";
export async function createTaskHandler(request:FastifyRequest<{Body: CreateTaskInput}>){
    const task = await createTask({
        ...request.body,
        creatorId: request.user.id,
    })
    return task
}

export async function getTasksHandler(){
    const tasks = await getTasks();
    return tasks
}

export async function deleteTaskHandler(request:FastifyRequest<{Params: DeletePutTaskInput}>,reply:FastifyReply){
    const id = parseInt(request.params.id)
    try{
        await deleteTask(id);
        reply.send({ message: 'Tarefa excluída com sucesso' });
    }catch(e){
        reply.code(500).send({ error: 'Tarefa não encontrada' });
    }
    
}
export async function updateTaskHandler(request:FastifyRequest<{Params: DeletePutTaskInput, Body: CreateTaskInput}>,reply:FastifyReply){
    const id = parseInt(request.params.id)
    const data = {...request.body}
    try{
        await updateTask(id, data);
        reply.send({ message: 'Tarefa atualizada com sucesso' });
    }catch(e){
        reply.code(500).send({ error: 'Tarefa não encontrada' });
    }
        
}
import prisma from "../../utils/prisma"
import {CreateTaskInput} from "./tasks.schema"

export async function createTask(data: CreateTaskInput & {creatorId: string}){
    return prisma.task.create({
        data,
    })
}
export function getTasks(){
    return prisma.task.findMany({
        select:{
            describe: true,
            title: true,
            id: true,
            createdAt: true,
            updatedAt: true,
            status: true,
            creator:{
                select:{
                    name:true,
                    id: true
                }
            }
            
        }
    })
}
export async function deleteTask(id:number){
    return prisma.task.delete({
        where:{
            id: id,
        }
    })
}

export async function updateTask(id:number, data:CreateTaskInput){
    return prisma.task.update({
        where:{
            id: id,
        },
        data:{
            title: data.title,
            describe: data.describe
        }
    })
}
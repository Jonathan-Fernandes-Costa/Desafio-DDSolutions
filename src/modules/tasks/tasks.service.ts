import prisma from "../../utils/prisma"
import {CreateTaskInput} from "./tasks.schema"

export async function createTask(data: CreateTaskInput & {ownerId: number}){
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
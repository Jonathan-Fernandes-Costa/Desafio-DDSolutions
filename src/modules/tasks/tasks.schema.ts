import {z} from "zod"
import {buildJsonSchemas} from "fastify-zod"


const taskInput = {
    title: z.string(),
    describe: z.string().optional(),
}
const taskGenerated = {
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string()
}
const createTaskSchema = z.object({
    ...taskInput
})
const taskResponseSchema = z.object({
    ...taskInput,
    ...taskGenerated
})
const tasksResponseSchema = z.array(taskResponseSchema);

export type CreateTaskInput = z.infer<typeof createTaskSchema>

const deleteTaskSchema = z.object({
    id: z.string()
})
export type DeletePutTaskInput = z.infer<typeof deleteTaskSchema>
export const {schemas: tasksSchemas, $ref} = buildJsonSchemas({
    createTaskSchema,
    taskResponseSchema,
    tasksResponseSchema,
},
{
    $id:"TaskSchema"
})
/*  id Int @id @default(autoincrement())
  title String 
  describe String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  creator User @relation(fields: [creatorId], references: [id])
  creatorId String
  status Status @default(pending)*/ 
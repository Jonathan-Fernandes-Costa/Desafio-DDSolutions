import { FastifyRequest, FastifyReply } from "fastify";
import { createUser, findUserByEmail, findUsers } from "./user.service";
import { LoginInput, createUserInput } from "./user.schema";
import { verifyPassword } from "../../utils/hash";
import { server } from "../../app";

export async function registerUserHandler(request:FastifyRequest<{Body: createUserInput}>, reply:FastifyReply){
    const body = request.body

    try{
        const user = await createUser(body)
        return reply.code(201).send(user)
    }catch(e){
        console.log(e)
        return reply.code(500).send(e)
    }
}

export async function loginHandler(request:FastifyRequest<{Body: LoginInput}>, reply:FastifyReply){
    const body = request.body
    //user by email
    const user = await findUserByEmail(body.email)
    if(!user){
        return reply.code(401).send({
            message: "Email ou senha inválidos"
        })
    }
    //verify pasword
    const correctPassword = verifyPassword({
        userPassword: body.password,
        salt: user.salt,
        hash: user.password
    })
    if(correctPassword){
        const {password, salt, ...rest} = user
        //generate access token
        return { accessToken: server.jwt.sign(rest)}
    }
    return reply.code(401).send({
        message: "Email ou senha inválidos"
    })

    //respond
}

export async function getUsersHandler(){
    const users = await findUsers()

    return users
}

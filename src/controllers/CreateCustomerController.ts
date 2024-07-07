import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateCustomerService } from "../services/CreateCustomerService"

class CreateCustomerService {
    async handle (request: FastifyRequest, reply: FastifyReply){
        const customerService = new CreateCustomerService()

        const customer = await customerService.execute();

        reply.send(customer)
    }
}

export { CreateCustomerService }
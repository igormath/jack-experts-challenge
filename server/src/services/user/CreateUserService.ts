import prisma from "../../database";
import { IUser } from "../../models/user";
import { GetUserService } from "./GetUserService";

class CreateUserService {
    async handle({name, email, password}: IUser){
        if (!name || !email || !password){
            throw new Error("Please, fill in all fields");
        }

        const userExists = new GetUserService();

        if (await userExists.handle(email)){
            throw new Error("User already exists");
        }
        
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password
            }
        })
        
        return user;
    }
}

export {CreateUserService};

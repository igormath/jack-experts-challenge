import prisma from "../../database";
import { IUser } from "../../models/user";

class PutUserService{
    async handle({name, email, password}: IUser){
        if (!name || !email || !password){
            throw new Error("Please, fill in all fields");
        }

        const user = await prisma.user.update({
            where: {
              email: email,
            },
            data: {
              name: name,
              password: password,
            },
        })

        return user;
    }
}

export {PutUserService};

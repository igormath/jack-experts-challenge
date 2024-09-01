import prisma from "../../database";
import { UserProps } from "../../models/user";
import bcrypt from "bcrypt";

class PutUserService{
    async handle({name, email, password}: UserProps){
        if (!name || !email || !password){
            throw new Error("Please, fill in all fields");
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.update({
            where: {
              email: email,
            },
            data: {
              name: name,
              password: hashPassword,
            },
        })

        return user;
    }
}

export {PutUserService};

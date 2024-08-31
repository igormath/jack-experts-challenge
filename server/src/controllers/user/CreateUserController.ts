import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";
import { IUser } from "../../models/user";

class CreateUserController{
    async handle(req: Request, res: Response){

        const {email, name, password} = req.body as IUser;

        const userService = new CreateUserService();

        try{
            const user = await userService.handle({email, name, password});

            if (!user){
                return res.status(400).send({
                    error: "Please, fill in all fields.",
                })
            }
            
            return res.status(201).send(user);

        }catch(error: any){
            if (error.message === "User already exists"){
                return res.status(400).send({
                    error: error.message,
                })
            } else if (error.message === "Please, fill in all fields"){
                return res.status(400).send({
                    error: error.message,
                })
            }
            
            return res.status(500).send({
                error: "An unexpected error occured",
            })

        }       
    }
}

export {CreateUserController};

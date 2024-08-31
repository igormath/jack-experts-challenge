import prisma from "../../database";

class DeleteUserService{
    async handle(email: string){
        if (!email){
            throw new Error("Please, fill in all fields");
        }
        const deletePosts = prisma.task.deleteMany({
            where: {
              authorEmail: email,
            },
        });
          
        const deleteUser = prisma.user.delete({
        where: {
            email: email,
            },
        });
          
        const transaction = await prisma.$transaction([deletePosts, deleteUser]);

        return transaction;
    }
}

export {DeleteUserService};

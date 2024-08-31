import { Link } from "react-router-dom";
import Header from "../Header/Header";

const CreateAccount = () => {
  return (
    <>
        <Header/>
        <main className="font-roboto">
            <form id="user-create" className="flex flex-col w-10/12 mt-16 mx-auto lg:w-1/2 lg:mx-auto lg:border-2 lg:border-slate-500 lg:rounded-md lg:p-5 2xl:w-1/3">
                <label htmlFor="user-name" className="add__label">Digite seu nome:</label>
                <input type="text" id="user-name" name="user-name" className="h-11 border-2 rounded text-gray-100 mb-4 px-3" required/>
                <label htmlFor="user-email" className="add__label">Digite seu email:</label>
                <input type="email" id="user-email" className="h-11 border-2 rounded text-gray-100 mb-4 px-3" name="user-email" required/>
                <label htmlFor="user-password" className="add__label">Crie uma senha:</label>
                <input type="password" id="user-password" className="h-11 border-2 rounded text-gray-100 mb-4 px-3" name="user-password" required/>
                <button type="submit" className="h-11 rounded bg-slate-800 my-2 hover:bg-slate-700 text-primary text-center">Criar conta</button>
            </form>
        </main>
        <Link to={"/"} className="text-link-primary hover:text-link-secondary text-center block mx-auto mt-4">Voltar para a página inicial</Link>
    </>
  )
};

export default CreateAccount;

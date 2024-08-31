import { Link } from "react-router-dom";
import Header from "../Header/Header";

const Login = () => {
  return (
    <>
        <Header/>
        <main className="font-roboto">
            <p className="w-10/12 mx-auto mt-8 text-lg text-start font-light lg:text-center">Organize suas tarefas, alcance seus objetivos. Entre e faça o seu dia acontecer!</p>
            <div className="flex flex-col w-10/12 mt-16 mx-auto lg:w-1/2 lg:mx-auto lg:border-2 lg:border-slate-500 lg:rounded-md lg:p-5 2xl:w-1/3">
                <label htmlFor="user-email" className="flex flex-col">
                    <span>Email</span>
                    <input type="email" name="user-email" id="user-email" className="h-11 border-2 rounded text-gray-100 mb-4 px-3" required/>
                </label>
                <label htmlFor="user-password" className="flex flex-col">
                    <span>Senha</span>
                    <input type="password" name="user-password" id="user-password" className="h-11 border-2 rounded mb-4 px-3" required/>
                </label>
                    <Link to={"/home"} className="h-11 rounded bg-slate-800 my-2 hover:bg-slate-700 text-primary text-center pt-2">
                        <button>Entrar</button>
                    </Link>
                    <div className="flex flex-row my-5 justify-evenly">
                        <p>Não possui conta?</p>
                        <Link to={"/criar-conta"} className="text-link-primary hover:text-link-secondary text-center">Criar uma conta</Link>
                    </div>
            </div>
        </main>
    </>
  )
};

export default Login;

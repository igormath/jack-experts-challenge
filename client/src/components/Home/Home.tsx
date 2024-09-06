import { useLocation } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    const location = useLocation();
    const email = location.state?.email;

    return (
    <>
        <Header/>
        <nav className="h-10 bg-slate-300">
            <a href="/" className=" bg-red-700">Voltar para a página inicial</a>
        </nav>
        <main className="font-roboto">
            <h2 className="m-4  text-xl">Bem-vindo, User.Name {email}</h2>
            {/* Assistir algum video de TO-DO list para pegar inspiração para essa tela */}
        </main>
    </>
    )
}

export default Home;

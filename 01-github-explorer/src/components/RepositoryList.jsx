import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

const repository= {
    name: "teste",
    description: "forms in react",
    link: "https://github.com/mateus-zuffo"
}
export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    );
}
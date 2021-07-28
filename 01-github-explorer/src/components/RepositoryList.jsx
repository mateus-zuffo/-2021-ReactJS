const RepositoryName = "unform2"
export function RepositoryList(){
    return(
        <section className="repository">
            <h1>Lista de repositórios</h1>
            <ul>
                <li>
                    <strong>{RepositoryName}</strong>
                    <p>Forms in react</p>
                    <a href="">
                        Acessar repositório
                    </a>
                </li>
                <li>
                    <strong>unform</strong>
                    <p>Forms in react</p>
                    <a href="">
                        Acessar repositório
                    </a>
                </li>
                <li>
                    <strong>unform</strong>
                    <p>Forms in react</p>
                    <a href="">
                        Acessar repositório
                    </a>
                </li>
                <li>
                    <strong>unform</strong>
                    <p>Forms in react</p>
                    <a href="">
                        Acessar repositório
                    </a>
                </li>
            </ul>
        </section>
    );
}
# 01-GitHub-Explorer
Anotações referentes ao capítulo 01 do curso de ReactJS oferecido pela RocketSeat = {
    • Packet.json:  Arquivo responsável pelas dependências do projeto (01-github-explorer/package.json).
    • BABEL      :  Framework responsável pela tradução do código para diferentes navegadores.
    • Imutabilidade:
        • usuarios = ['usu01','usu02','usu03']
        • usuarios.push('usu04') //nop
        • novoUsuarios = [...usuarios,'usu04']
}

# Configurando ambiente:
1.  yarn init -y
2.  yarn add react
3.  yarn add react-dom
4.  yarn add @babel/core @babel/cli @babel/preset-env -D
5.  yarn add @babel/preset-react -D
6.  yarn add webpack webpack-cli -D
7.  yarn add babel-loader -D
8.  yarn add html-webpack-plugin -D
9.  yarn add webpack-dev-server -D
10. yarn add cross-env -D
11. yarn add style-loader css-loader -D
12. yarn add sass-loader -D
13. yarn add node-sass -D

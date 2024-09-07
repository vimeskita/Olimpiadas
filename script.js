function Pesquisar(){
    // Obtém a seção HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos.
    let section = document.getElementById('resultados-pesquisa');

    let campoPesquisa = document.getElementById('campo-pesquisa').value;

    //Se o campo de Pesquisa estiver vazio, usamos o Return para que não execute o resto do código
    // Assim, mostra uma mensagem se o campo estiver em branco
    if(campoPesquisa == ""){
        section.innerHTML = "<h3> Digite um nome ou o esporte para fazer a pesquisa! </h3>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();


    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada elemento (dado) dentro da lista de dados.
    for(let dado of dados){
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase()
        //Se o nome digitado no campo de pesquisa bater com um titulo do banco de dados
        // O elemento será incluído com o nome correto
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Concatena HTML para criar um novo elemento de resultado.
            // - Cria uma div com a classe "item-resultado".
            // - Dentro da div, cria um título h2 com um link para mais informações.
            // - Cria um parágrafo com a classe "descricao-meta" para a descrição.
            // - Cria um link para "Saber Mais" com o link do dado.
            resultados += `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Saber Mais</a>
            </div>
            `
        }else{
            resultados = "<h3> Nada foi encontrado! </h3>"
        }
        
       
    }

    // Atribui a string com todos os resultados ao conteúdo HTML da seção.
    section.innerHTML = resultados
}
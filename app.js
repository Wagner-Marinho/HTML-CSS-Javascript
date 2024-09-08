function pesquisar(){
    //console.log("clicou");
    let section = documento.getElementById("resultado-pesquisa");
    //console.log(Selection);
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(campoPesquisa == ""){
       section.innerHTML = "<p>Nada foi encotrado</p>"
        return
    }

campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // para cada dado dentro da lista de dados
    for (let dados of dados){
        titulo = dado.titulo.toLowerCase()
        descricao.dado.descricao.toLowerCase()
        tags.dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <section class="resultado pesquisa">
                <div>
                    <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
            <section>
                    <p>CSS (Cascading Style Sheets)${dados.descricao}</p>
                    <a href=${dado.link} target="_blank"> Click no link para obter mais informações</a>
                </div>
        
        `;
        }
        //console.log(dado.titulo.includes("campoPesquisa"))
       
    }
    if (!resultados){
        resultados = "<p>Nada foi encontado. Você não palavra relacioando ao assunto</p>"

    }
    section.innerHTML = resultados
}
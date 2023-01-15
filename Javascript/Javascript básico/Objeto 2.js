var objUser = {
    nome: "Arthur",
    idade: 17,
    cidade: "Cachoeirinha",
};

let objConquer = {
    plataforma: "conquer",
    fundacao: 2016,
    cursos: {
        dados: ["Excel","SQL"],
        lideranca: ["apresentacao de alto impacto","inteligência emocional"],
        marketing: ["branding","linkedin"],
    },
    inovacao_constante: true
};

objConquer["usuario"] = objUser
objUser["nome"] = "Arthur Andrade da Silva"
objConquer["fundacao"] = Number(objConquer["fundacao"])

console.table(objConquer)
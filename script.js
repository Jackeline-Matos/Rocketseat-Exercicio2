const estudantes = [
   { nome: "Jackeline Matos",
    notaPrimeiraProva: 5,
    notaSegundaProva: 10,
    },

    { nome: "Diego Cardoso",
    notaPrimeiraProva: 7,
    notaSegundaProva: 8,
    },

    { nome: "Elis Oliveira",
    notaPrimeiraProva: 8,
    notaSegundaProva: 3,
    },

    { nome: "Humberto Silva",
    notaPrimeiraProva: 5,
    notaSegundaProva: 3,
    },

]


function mediaAluno (nota1, nota2){

    let mediaNota = (nota1 + nota2 )/ 2
    
    if(mediaNota >= 7){
        return alert(`Ola ${i.nome} sua nota é ${mediaNota} voce passou de ano.`)
    }else{
        return alert(`Ola ${i.nome} sua nota é ${mediaNota} voce está de recuperacao.`)
    }  
}

for(i of estudantes){
        console.log(mediaAluno(i.notaPrimeiraProva, i.notaSegundaProva));

}

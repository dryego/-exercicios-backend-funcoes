const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ],
    correcao: function () {
        let acertos = 0;;
        for (let acerto of prova.questoes) {
            if (acerto.resposta === acerto.correta) {
                acertos++;
            }
        }
        const nota = acertos * 2;
        console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questões e obiteve nota ${nota}.`)
    }
};

// function corrigirProva(prova) {
//     let acertos = 0
//     for (let acerto of prova.questoes) {
//         if (acerto.resposta === acerto.correta) {
//             acertos++
//         }
//     }
//     return acertos;

// }
prova.correcao();
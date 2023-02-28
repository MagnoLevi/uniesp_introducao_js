let pessoas = [

]

const myFunction = () => {
    // LOOP PARA INSERIR AS PESSOAS
    for (i = 1; i <= 15; i++) {
        let nome = prompt(`Insira o nome da pessoa ${i}:`);
        let genero = prompt(`Insira o gênero da pessoa ${i}:`);
        let altura = prompt(`Insira a altura da pessoa ${i}:`);

        // PUSH DO OBJETO COM OS VALORES DAS PESSOAS
        pessoas.push(
            {
                nome: nome,
                genero: genero,
                altura: parseFloat(altura)
            }
        )
    }


    // VARÁVEIS PARA ARMAZENAR AS PESSOAS
    let indMaiorAltura = 0, maiorAltura = 0,
        indMenorAltura = 0, menorAltura = 5,
        somaAlturaHomem = 0, countHomem = 0,
        countMulher = 0;

    // LOOP
    pessoas.map((r, index) => {
        if (r.altura > maiorAltura) {
            maiorAltura = r.altura;
            indMaiorAltura = index
        }
        if (r.altura < menorAltura) {
            menorAltura = r.altura;
            indMenorAltura = index
        }

        if (r.genero.toUpperCase() == 'M') {
            somaAlturaHomem += r.altura;
            countHomem++;
        }

        if (r.genero.toUpperCase() == 'F') {
            countMulher++;
        }
    })


    console.log(pessoas[indMaiorAltura].nome, "tem a maior altura:", maiorAltura, 'm')
    console.log(pessoas[indMenorAltura].nome, "tem a menor altura:", menorAltura, 'm')
    console.log("Média de altura dos homens:", parseFloat(somaAlturaHomem/countHomem).toFixed(2))
    console.log("Quantidade de mulheres:", countMulher)
}
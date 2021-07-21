function clicar() {
    let nome = prompt("Qual é o nome do funcionário?")
    if (nome.length == 0) {
        alert('Por favor, insira um nome.')
    } else {
        let salario = prompt(`Qual é o salário de ${nome}?`)
        if (salario.length == 0) {
            alert('Por favor, insira um salário.')
        } else {
            let salarioReal = Number(salario)
            if (isNaN(salarioReal)) {
                alert('Salário inválido.')
            } else {
                let porcentagemDeAumento = prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`)
                if (porcentagemDeAumento == 0) {
                    alert('Por favor, digite a porcentagem de aumento.')
                } else {
                    let porcentagemDeAumentoReal = Number(porcentagemDeAumento)
                    if (isNaN(porcentagemDeAumentoReal)) {
                        alert('Valor de porcentagem inválido.')
                    } else {
                        let valorDeAumento = (salarioReal * porcentagemDeAumentoReal) / 100
                        let novoSalario = salarioReal + valorDeAumento

                        let conteudo = document.getElementById('secao')
                        conteudo.innerHTML = `<h2>${nome} recebeu um aumento salarial!</h2>`

                        conteudo.innerHTML += `<p class="paragrafos">O salário era R$ ${salarioReal.toLocaleString()}.</p>`
                        conteudo.innerHTML += `<p class="paragrafos">Com um aumento de ${porcentagemDeAumentoReal}%, o salário vai aumentar R$ ${valorDeAumento.toLocaleString()} no próximo mês.</p>`
                        conteudo.innerHTML += `<p class="paragrafos">E a partir daí, ${nome} vai passar a ganhar R$ ${novoSalario.toLocaleString()}.</p>`
                    }
                }
            }
        }
    }    
}
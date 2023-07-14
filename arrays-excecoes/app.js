
try {
    
    const listaDeProdutosDisponiveis = [
        "Pão",
        "Leite",
        "Café",
        "Laranja",
        "macarrão",
        "Sabonete",
        "Detergente",
    ];
    
    const listaDeArgumentos = process.argv.slice(2);
    
    const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto => {
        return listaDeArgumentos.find(argumento => argumento === produto);
    })
    
    listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Produto disponível: ${produto}`));
    
    const listaDeProdutosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
        return !listaDeProdutosDisponiveis.find(produto => produto === argumento);
    })
    listaDeProdutosNaoDisponiveis.forEach(argumento => console.log(`Produto indisponível: ${argumento}`));
    
    listaDeProdutosDisponiveis.sort();
    listaDeProdutosDisponiveis.forEach(produto => console.log(`Este produto está disponível: ${produto}`));

} catch (error) {
    console.log('Não foi possível executar pedido de compra');
}


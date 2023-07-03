// Pedido de um cliente que montaremos conforme id dos itens
let pedido = {
    nomes: [],
    precoTotal: 0,
    pesos: {
      'gramas': 0,
      'mililitros': 0
    },
  }
  
  // Função será responsável por atualizar a variável nomes
  function definirNome(minhaListaDeProdutos){
    for(let i = 0;i<minhaListaDeProdutos.length;i++){
        for(let x = 0;x<cardapio.length;x++){                                         //REALIZADO
            if(cardapio[x].id === minhaListaDeProdutos[i]){
                pedido.nomes.push(cardapio[x].nome)
            }
        }
    }
  }
  
  // Função será responsável por atualizar a variável precoTotal
  function definirPrecoTotal(minhaListaDeProdutos){
    for(let i = 0;i<minhaListaDeProdutos.length;i++){
        pedido.precoTotal = (pedido.precoTotal+cardapio[minhaListaDeProdutos[i]].preco)             //REALIZADO
    }
  }
  
  // Função será responsável por atualizar a variável pesos
  function definirGramasEMililitros (produtos){
    for(let i = 0;i<produtos.length;i++){
        indexOfGrama = cardapio[produtos[i]].peso.indexOf('g');
        console.log(indexOfGrama)
        indexOfMililitros = cardapio[produtos[i]].peso.indexOf('l');
        console.log(indexOfMililitros)
        if(indexOfGrama >= 0 && indexOfMililitros === -1){
            peso = Number(cardapio[produtos[i]].peso.slice(0,indexOfGrama));
            console.log(peso)
            pedido.pesos.gramas = (pedido.pesos.gramas+peso)
            console.log(pedido.pesos.gramas)
        }
        else if(indexOfMililitros >= 0 && indexOfGrama === -1){
            peso = Number(cardapio[produtos[i]].peso.slice(0,cardapio[produtos[i]].peso.length-2));
            console.log(peso)
            pedido.pesos.mililitros = (pedido.pesos.mililitros+peso)
            console.log(pedido.pesos.mililitros)
        }
        }                                                                             //Aqui iremos utilizar os métodos IndexOf e Slice
    }
  
  // Função será responsavel por atualizar a variavel minhaListaDeProdutos 
  function encontrarItensPeloId(idList){
   let ids = idList;
   return ids                                                                              //REALIZADO 
  }
  
  // Função será responsável pela apresentação do pedido. Obs: usar console.log() invés return na string criada.
  function apresentacao() {
    console.log(pedido)                                                                    //REALIZADO 
  }
  
  // Função principal da nossa aplicação, será responsável por chamar as funções.
  function principal(idDosProdutosComprados){
    // objetos que serão filtrados conforme o id dos itens. Obs: esse sera nosso array de objetos.
    const minhaListaDeProdutos = encontrarItensPeloId(idDosProdutosComprados);
    // atualizar nomes
    definirNome(minhaListaDeProdutos);
  
    // atualiar pesos
    definirGramasEMililitros(minhaListaDeProdutos);
  
    // atualizar precoTotal
    definirPrecoTotal(minhaListaDeProdutos);
  
    // apresentação do pedido
    apresentacao()
  }
  
  principal([1, 3, 7])
Feature: Carrinho

Scenario: Adicionar múltiplos produtos ao carrinho - Verificar preço final
    Given Estou logado na Loja Natura
     When Adiciono múltiplos produtos ao carrinho
      Then O preço final do meu carrinho é a soma dos itens adicionados
#language: pt
@Compra @End2End
Funcionalidade: Compra

  Contexto: 
    Dado que o usuario esteja na pagina do site
    E que o usuario ja esteja logado

  @RealizarCompra
  Esquema do Cenario: Fazer compra de produtos
    Quando escolher o produto mochila
    E clicar no carrinho
    E clicar em checkout
    E preencher o campo first name com "<primeiroNome>"
    E preecher o campo last name com "<ultimoNome>"
    E preencher o campo postal code com "<postalCode>"
    E clicar em continue
    Entao finalizar a compra clicando no botao continue

    Exemplos: 
      | primeiroNome | ultimoNome | postalCode |
      | Hugo         | Castro     | DF1111     |

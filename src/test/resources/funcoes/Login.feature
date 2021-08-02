#language: pt
@Login @End2End
Funcionalidade: Login

  Contexto: 
    Dado que o usuario esteja na pagina de login
	
	@RealizarLogin 
  Esquema do Cenario: fazer o login com sucesso
    Quando o usuario informa username como "<usuario>"
    E informar a password como "<senha>"
    E clicar no botao login
    Entao o sistema devera colocar o usuario na pagina de produtos

    Exemplos: 
      | usuario                 | senha        |
      | standard_user           | secret_sauce |
      | locked_out_user         | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |

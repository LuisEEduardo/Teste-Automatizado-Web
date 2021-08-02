package passos;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import paginasbase.LoginPagina;

public class PassoLogin {

	public static WebDriver driver;

	@Dado("^que o usuario esteja na pagina de login$")
	public void que_o_usuario_esteja_na_pagina_de_login() throws Throwable {
		Hooks.abrirUrl("https://www.saucedemo.com/");
		driver = Hooks.getDriver();
	}

	@Quando("^o usuario informa username como \"([^\"]*)\"$")
	public void o_usuario_informa_username_como(String arg1) throws Throwable {
		LoginPagina lp = new LoginPagina(driver); 
		lp.preencherUsuario(arg1);
	}

	@Quando("^informar a password como \"([^\"]*)\"$")
	public void informar_a_password_como(String arg1) throws Throwable {
		LoginPagina lp = new LoginPagina(driver); 
		lp.preencherSenha(arg1);
	}

	@Quando("^clicar no botao login$")
	public void clicar_no_botao_login() throws Throwable {
		LoginPagina lp = new LoginPagina(driver); 
		lp.clicarNoBotaoDeLogin();
	}

	@Entao("^o sistema devera colocar o usuario na pagina de produtos$")
	public void o_sistema_devera_colocar_o_usuario_na_pagina_de_produtos() throws Throwable {
		LoginPagina lp = new LoginPagina(driver); 
		lp.paginaDeProdutos();
	}

}

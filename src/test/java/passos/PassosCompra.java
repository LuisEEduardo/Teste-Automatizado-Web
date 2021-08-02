package passos;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import paginasbase.Compra;
import paginasbase.LoginPagina;

public class PassosCompra {

	public static WebDriver driver;

	@Dado("^que o usuario esteja na pagina do site$")
	public void que_o_usuario_esteja_na_pagina_do_site() throws Throwable {
		Hooks.abrirUrl("https://www.saucedemo.com/");
		driver = Hooks.getDriver();
	}

	@Dado("^que o usuario ja esteja logado$")
	public void que_o_usuario_ja_esteja_logado() throws Throwable {
		LoginPagina lp = new LoginPagina(driver); 
		lp.preencherUsuario("standard_user");
		lp.preencherSenha("secret_sauce");
		lp.clicarNoBotaoDeLogin();
		lp.paginaDeProdutos();
	}

	@Quando("^escolher o produto mochila$")
	public void escolher_o_produto_mochila() throws Throwable {
		Compra c = new Compra(Hooks.getDriver()); 
		c.clicarNaMochila();
	}

	@Quando("^clicar no carrinho$")
	public void clicar_no_carrinho() throws Throwable {
		Compra c = new Compra(Hooks.getDriver()); 
		c.clicarNoCarrinho();
	}

	@Quando("^clicar em checkout$")
	public void clicar_em_checkout() throws Throwable {
		Compra c = new Compra(Hooks.getDriver()); 
		c.clicarEmCheckout();
	}

	@Quando("^preencher o campo first name com \"([^\"]*)\"$")
	public void preencher_o_campo_first_name_com(String arg1) throws Throwable {
		Compra c = new Compra(Hooks.getDriver()); 
		c.preencherPrimeiroNome(arg1);
	}

	@Quando("^preecher o campo last name com \"([^\"]*)\"$")
	public void preecher_o_campo_last_name_com(String arg1) throws Throwable {
		Compra c = new Compra(Hooks.getDriver()); 
		c.preencherUltimoNome(arg1);
	}

	@Quando("^preencher o campo postal code com \"([^\"]*)\"$")
	public void preencher_o_campo_postal_code_com(String arg1) throws Throwable {
		Compra c = new Compra(Hooks.getDriver()); 
		c.preencherPostalCode(arg1);
	}

	@Quando("^clicar em continue$")
	public void clicar_em_continue() throws Throwable {
		Compra c = new Compra(Hooks.getDriver()); 
		c.clicarNoBotaoContinue();
	}

	@Entao("^finalizar a compra clicando no botao continue$")
	public void finalizar_a_compra_clicando_no_botao_continue() throws Throwable {
		Compra c = new Compra(Hooks.getDriver()); 
		c.clicarNoBotaoFinish();
	}

}

package paginasbase;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.MetodosUteis;

public class LoginPagina extends MetodosUteis {
	
	
	protected WebDriver driver;
	
	public LoginPagina(WebDriver driver) {
		this.driver = driver; 
		PageFactory.initElements(driver, this);	
	}
	
	@FindBy (how = How.ID, using = "user-name")
	private WebElement usuario; 
	
	@FindBy (how = How.ID, using = "password")
	private WebElement senha; 
	
	@FindBy (how = How.ID, using = "login-button")
	private WebElement botaoLogin; 
	
	@FindBy (how = How.CLASS_NAME, using = "title")
	private WebElement title; 
	
	public void preencherUsuario(String userName) {
		esperarElemento(usuario); 
		usuario.sendKeys(userName);
	}
	
	public void preencherSenha(String userSenha) {
		esperarElemento(senha); 
		senha.sendKeys(userSenha); 
	}
	
	public void clicarNoBotaoDeLogin() {
		esperarElemento(botaoLogin); 
		botaoLogin.click();
	}
	
	public void paginaDeProdutos() {
		System.out.println("Página de Produtos");
	}
	
	public void verficandoOLogin() {
		esperarElemento(title);
		title.notify();
	}
	
}

package paginasbase;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.MetodosUteis;

public class Compra extends MetodosUteis {
	
	protected WebDriver driver; 
	
	public Compra(WebDriver driver) {
		this.driver = driver;  
		PageFactory.initElements(driver, this);	
	}
	
	@FindBy (how = How.ID, using = "add-to-cart-sauce-labs-backpack")
	private WebElement btnMochila; 
	
	@FindBy (how = How.CLASS_NAME , using  = "shopping_cart_badge")
	private WebElement carrinho;
	
	@FindBy (how = How.ID, using = "checkout")
	private WebElement btnCheckout; 
	
	@FindBy (how = How.ID, using = "first-name")
	private WebElement firstName; 
	
	@FindBy (how = How.ID, using = "last-name")
	private WebElement lastName; 
	
	@FindBy (how = How.ID, using = "postal-code")
	private WebElement postalCode; 
	
	@FindBy (how = How.ID, using = "continue")
	private WebElement btnContinue; 
	
	@FindBy (how = How.ID, using = "finish")
	private WebElement btnFinish; 
	
	public void clicarNaMochila() {
		esperarElemento(btnMochila); 
		btnMochila.click();
	}
	
	public void clicarNoCarrinho() {
		esperarElemento(carrinho);
		carrinho.click();
	}
	
	public void clicarEmCheckout() {
		esperarElemento(btnCheckout);
		btnCheckout.click();
	}
	
	public void preencherPrimeiroNome(String primeiroNome) {
		esperarElemento(firstName);
		firstName.sendKeys(primeiroNome);
	}
	
	public void preencherUltimoNome(String ultimoNome) {
		esperarElemento(lastName);
		lastName.sendKeys(ultimoNome);
	}
	
	public void preencherPostalCode(String caixaPostal) {
		esperarElemento(postalCode);
		postalCode.sendKeys(caixaPostal);
	}
	
	public void clicarNoBotaoContinue() {
		esperarElemento(btnContinue);
		btnContinue.click();
	}
	
	public void clicarNoBotaoFinish() {
		esperarElemento(btnFinish);
		btnFinish.click();
	}

	
	
}

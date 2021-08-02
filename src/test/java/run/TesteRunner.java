package run;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:funcoes",
		glue = {"passos"},
		tags = {"@RealizarLogin"}, 
		plugin = {"pretty", "html:target/cucumber-reports"},
		monochrome = true
		)

public class TesteRunner {

}

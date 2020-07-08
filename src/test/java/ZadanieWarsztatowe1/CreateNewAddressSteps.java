package ZadanieWarsztatowe1;

import ZadanieWarsztatowe1.pages.NewAddressData;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.File;
import java.util.concurrent.TimeUnit;

public class CreateNewAddressSteps {

    private WebDriver driver;
    //NewAddressData newAddressData;

    @Given("user is logged in with email (.*) and password (.*)")
    public void userIsLoggedIn(String email, String password) throws Exception {

        System.setProperty("webdriver.chrome.driver",
                "src/main/resources/drivers/chromedriver");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.get("https://prod-kurs.coderslab.pl/index.php?controller=authentication&back=my-account");
        
        WebElement emailInput = driver.findElement(By.xpath("//*[@id='login-form']/section/div[1]/div[1]/input"));
        emailInput.sendKeys(email);
        WebElement passwordInput = driver.findElement(By.xpath("//*[@id='login-form']/section/div[2]/div[1]/div/input"));
        passwordInput.sendKeys(password);

        driver.findElement(By.id("submit-login")).click();

    }

    @When("^user goes to new address page$")
    public void userGoesToNewAddressPage() {

        WebElement addressPageInput = driver.findElement(By.id("address-link"));
        addressPageInput.click();

//        WebElement addressPageInput;
//        if (addressPageInput.isEnabled()){
//            addressPageInput = driver.findElement(By.id("address-link"));
//            addressPageInput.click();
//        }
//        else{
//            WebElement addressesInput = driver.findElement(By.xpath("//*[@id='addresses-link']"));
//            addressesInput.click();
//        }
//        driver.get("https://prod-kurs.coderslab.pl/index.php?controller=address");
    }

    @And("^alias (.*) is provided by user$")
    public void aliasAliasIsProvidedByUser(String alias) {
        //newAddressData.setNewAlias(newAlias);
        WebElement aliasInput = driver.findElement(By.name("alias"));
        aliasInput.sendKeys(alias);
    }

    @And("^address (.*) is provided by user$")
    public void addressIsProvidedByUser(String address) {
        WebElement addressInput = driver.findElement(By.name("address1"));
        addressInput.sendKeys(address);
    }

    @And("^city (.*) is provided by user$")
    public void cityIsProvidedByUser(String city) {
        WebElement cityInput = driver.findElement(By.name("city"));
        cityInput.sendKeys(city);
    }

    @And("^postalCode (.*) is provided by user$")
    public void postalCodeIsProvidedByUser(String postalCode) {
        WebElement postalCodeInput = driver.findElement(By.name("postcode"));
        postalCodeInput.sendKeys(postalCode);
    }

    @And("^country United Kingdom is chosen by user$")
    public void countryIsChosenByUser() {
        WebElement countryInput = driver.findElement(By.name("id_country"));
        countryInput.click();
        WebElement countryUKInput = driver.findElement(By.xpath("//*[@id='content']/div/div/form/section/div[10]/div[1]/select/option[2]"));
        countryUKInput.click();

    }

    @And("^phone number (.*) is provided by user$")
    public void phoneNumberIsProvidedByUser(String phone) {
        WebElement phoneInput = driver.findElement(By.name("phone"));
        phoneInput.sendKeys(phone);
    }

    @And("^user saves new address$")
    public void userSavesNewAddress() {

        driver.findElement(By.xpath("//*[@id='content']/div/div/form/footer/button")).click();

        WebElement successMessage = driver.findElement(By.xpath("//*[@id='notifications']/div/article/ul/li"));
        Assert.assertEquals("Address successfully added!", successMessage.getText());

//        WebElement addressPage = driver.findElement(By.className(".col-lg-4.col-md-6.col-sm-6"));
//        addressPage.

    }
}

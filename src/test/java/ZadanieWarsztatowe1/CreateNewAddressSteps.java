package ZadanieWarsztatowe1;

import ZadanieWarsztatowe1.pages.NewAddressData;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class CreateNewAddressSteps {

    private WebDriver driver;
    NewAddressData newAddressData;

    @Given("user is logged in with email (.*) and password (.*)")
    public void userIsLoggedIn(String email, String password) {

        System.setProperty("webdriver.chrome.driver",
                "src/main/resources/drivers/chromedriver");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.get("https://prod-kurs.coderslab.pl/index.php?controller=authentication&back=my-account");

        newAddressData = new NewAddressData(driver);

        newAddressData.loginToAccount(email, password);
    }

    @When("^user goes to new address page$")
    public void userGoesToNewAddressPage() {
        driver.findElement(By.id("address-link")).click();
    }

    @And("^alias (.*) is provided by user$")
    public void aliasAliasIsProvidedByUser(String newAlias) {
        newAddressData.setNewAlias(newAlias);
    }

    @And("^address (.*) is provided by user$")
    public void addressIsProvidedByUser(String newAddress) {
        newAddressData.setNewAddress(newAddress);
    }

    @And("^city (.*) is provided by user$")
    public void cityIsProvidedByUser(String newCity) {
        newAddressData.setNewCity(newCity);
    }

    @And("^postalCode (.*) is provided by user$")
    public void postalCodeIsProvidedByUser(String newPostalCode) {
        newAddressData.setNewPostalCode(newPostalCode);
    }

    @And("^country United Kingdom is chosen by user$")
    public void countryIsChosenByUser() {
        WebElement countryInput = driver.findElement(By.name("id_country"));
        countryInput.click();
        WebElement countryUKInput = driver.findElement(By.xpath("//*[@id='content']/div/div/form/section/div[10]/div[1]/select/option[2]"));
        countryUKInput.click();
    }

    @And("^phone number (.*) is provided by user$")
    public void phoneNumberIsProvidedByUser(String newPhone) {
        newAddressData.setNewPhone(newPhone);
    }

    @And("^user saves new address$")
    public void userSavesNewAddress() {
        driver.findElement(By.xpath("//*[@id='content']/div/div/form/footer/button")).click();

        WebElement successMessage = driver.findElement(By.xpath("//*[@id='notifications']/div/article/ul/li"));
        Assert.assertEquals("Address successfully added!", successMessage.getText());
        System.out.println(successMessage.getText());
    }

    @And("^user checks if new address is correct$")
    public void userChecksIfNewAddressIsCorrect() {
        newAddressData.checkIfAddressIsCorrect();
    }

    @And("^user deletes new address$")
    public void userDeletesNewAddress() {
        driver.findElement(By.partialLinkText("Delete")).click();
    }

    @And("^user checks if new address is deleted$")
    public void userChecksIfNewAddressIsDeleted() {
        WebElement deletesMessage = driver.findElement(By.xpath("//*[@id='notifications']/div/article/ul/li"));
        Assert.assertEquals("Address successfully deleted!", deletesMessage.getText());
        System.out.println(deletesMessage.getText());
    }

    @And("^user signs out$")
    public void userSignsOut() {
        driver.findElement(By.xpath("//*[@id='_desktop_user_info']/div/a[1]")).click();
    }

}

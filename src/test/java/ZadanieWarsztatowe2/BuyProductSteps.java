package ZadanieWarsztatowe2;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class BuyProductSteps{

    WebDriver driver;
    BuyProductData buyProductData;

    @Given("user is logged in with email (.*) and password (.*)")
    public void userIsLoggedIn(String email, String password) throws Exception {

        System.setProperty("webdriver.chrome.driver",
                "src/main/resources/drivers/chromedriver");

        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.get("https://prod-kurs.coderslab.pl/index.php?controller=authentication&back=my-account");

        buyProductData = new BuyProductData(driver);
        WebElement emailInput = driver.findElement(By.xpath("//*[@id='login-form']/section/div[1]/div[1]/input"));
        emailInput.sendKeys(email);
        WebElement passwordInput = driver.findElement(By.xpath("//*[@id='login-form']/section/div[2]/div[1]/div/input"));
        passwordInput.sendKeys(password);

        driver.findElement(By.id("submit-login")).click();
    }

    @When("^user chooses product (.*)$")
    public void userGoesToAllProducts(String searchProductName) {
        buyProductData.chooseProduct(searchProductName);
    }

    @And("^user chooses size of product$")
    public void userChoosesSizeSizeOfProduct() {
        buyProductData.chooseSize();
    }

    @And("^user chooses quantity of product$")
    public void userChoosesQuantityQuantityOfProduct() {
        buyProductData.chooseQuantity();
    }

    @And("^user adds products to the cart$")
    public void userAddsProductsToTheCart() {
        driver.findElement(By.xpath("//*[@id='add-to-cart-or-refresh']/div[2]/div/div[2]/button")).click();
    }

    @And("^user goes to checkout$")
    public void userGoesToCheckout() {
        driver.findElement(By.xpath("//*[@id='blockcart-modal']/div/div/div[2]/div/div[2]/div/div/a")).click();
        driver.findElement(By.xpath("//*[@id='main']/div/div[2]/div[1]/div[2]/div/a")).click();
    }

    @And("^user confirms address$")
    public void userConfirmsAddress() {
        //buyProductData.checkIfAddressIsCorrect();
        driver.findElement(By.name("confirm-addresses")).click();
    }

    @And("^user chooses shipping method as PrestaShop$")
    public void userChoosesShippingMethodAsPrestaShop() {
        driver.findElement(By.name("confirmDeliveryOption")).click();
    }

    @And("^user chooses payment method as Pay by Check$")
    public void userChoosesPaymentMethodAsPayByCheck() {
        driver.findElement(By.id("payment-option-1")).click();
        driver.findElement(By.name("conditions_to_approve[terms-and-conditions]")).click();
    }

    @And("^user chooses order with an obligation to pay$")
    public void userChoosesOrderWithAnObligationToPay() {
        driver.findElement(By.xpath("//*[@id='payment-confirmation']/div[1]/button")).click();
    }

    @And("^user does a print screen$")
    public void userDoesAPrintScreen() {
        try {
            buyProductData.takeSnapShot();
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}

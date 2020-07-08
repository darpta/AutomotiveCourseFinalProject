package ZadanieWarsztatowe1;

import ZadanieWarsztatowe1.pages.NewAddressData;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.concurrent.TimeUnit;
@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/Cucumber/Features/create-new-address.feature",
        plugin = {"pretty", "html:out"})
public class CreateNewAddressTest {

//    private WebDriver driver;
//    NewAddressData newAddressData;
//
//    @Before
//    public void setUp() {
//        System.setProperty("webdriver.chrome.driver",
//                "src/main/resources/drivers/chromedriver");
//        driver = new ChromeDriver();
//        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//        driver.manage().window().maximize();
//        driver.get("https://prod-kurs.coderslab.pl/index.php?controller=authentication&back=my-account");
//
//    }
//    @After
//    public void tearDown() {
//        //driver.quit();
//    }
//
//    @Test
//    public void createNewAddressTest(){
//
//        newAddressData = new NewAddressData(driver);
//        newAddressData.loginToAccount("jandworak@mail.com", "Pass123");
//        driver.get("https://prod-kurs.coderslab.pl/index.php?controller=address");
//        //newAddressData.setNewAlias("Domek");
//
//    }

}

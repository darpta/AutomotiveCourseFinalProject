package ZadanieWarsztatowe2;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.io.File;
import java.io.IOException;

public class BuyProductData {
    private String filePath = "src/screenshot/test.png";

    private static WebDriver driver;

    @FindBy(name = "s")
    WebElement searchButton;

    @FindBy(xpath = "//*[@id='group_1']")
    WebElement sizeButton;

    @FindBy(name = "qty")
    WebElement quantityButton;

    public BuyProductData(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void chooseProduct(String searchProductName){
        searchButton.click();
        searchButton.clear();
        searchButton.sendKeys(searchProductName);
        driver.findElement(By.xpath("//*[@id='search_widget']/form/button/i")).click();
        driver.findElement(By.xpath("//*[@id='js-product-list']/div[1]/article[1]/div/div[1]/h2/a")).click();
    }

    public void chooseSize(){
        sizeButton.click();
        driver.findElement(By.xpath("//*[@id='group_1']/option[2]")).click();
    }

    public void chooseQuantity(){
        quantityButton.click();
        quantityButton.clear();
        quantityButton.sendKeys("5");
    }

    public void takeSnapShot() throws IOException {
        TakesScreenshot screenshot = (TakesScreenshot) driver;

        File srcFile = screenshot.getScreenshotAs(OutputType.FILE);

        File destFile = new File(filePath);

        FileUtils.copyFile(srcFile, destFile);
    }

//    public boolean checkIfAddressIsCorrect() {
//
//        List<WebElement> articles = driver.findElements(By.tagName("article"));
//        String addressText = "";
//        for (int i = 0; i < articles.size(); i++) {
//            if (articles.get(i).getText().contains("Domowy")) {
//                addressText = articles.get(i).getText();
//            }
//        }
//        if (
//                addressText.contains("Prosta 23")
//                        && addressText.contains("Szczecin")
//                        && addressText.contains("70-250")
//                        && addressText.contains("United Kingdom")
//                        && addressText.contains("666777444")
//        ) {
//            System.out.println("true");
//            return true;
//        }
//        System.out.println("false");
//        return false;
//    }
}

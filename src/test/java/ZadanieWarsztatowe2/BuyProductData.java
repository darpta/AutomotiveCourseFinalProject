package ZadanieWarsztatowe2;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class BuyProductData {
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

    public boolean checkIfAddressIsCorrect(){
        //String address;

        List<WebElement> articles = driver.findElements(By.tagName("article"));
        String addressText = "";
        for (int i=0; i < articles.size(); i++){
            if (articles.get(i).getText().contains("Domowy")){
                addressText = articles.get(i).getText();
                System.out.println(addressText);
            }
        }
        if(
                addressText.contains("Prosta 23")
                        && addressText.contains("Szczecin")
                        && addressText.contains("70-250")
                        && addressText.contains("United Kingdom")
                        && addressText.contains("666777444")
        ){
            return true;
        }
        return false;
    }
}

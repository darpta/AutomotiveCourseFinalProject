package ZadanieWarsztatowe1.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class NewAddressData {
    private static WebDriver driver;

    public NewAddressData(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    @FindBy(name = "alias")
    WebElement aliasInput;

    @FindBy(name = "address1")
    WebElement addressInput;

    @FindBy(name = "city")
    WebElement cityInput;

    @FindBy(name = "postcode")
    WebElement postcodeInput;

    @FindBy(name = "phone")
    WebElement phoneInput;

    public void loginToAccount(String email, String password){
        WebElement emailInput = driver.findElement(By.xpath("//*[@id='login-form']/section/div[1]/div[1]/input"));
        emailInput.sendKeys(email);
        WebElement passwordInput = driver.findElement(By.xpath("//*[@id='login-form']/section/div[2]/div[1]/div/input"));
        passwordInput.sendKeys(password);
        driver.findElement(By.id("submit-login")).click();
    }

    public void setNewAlias(String newAlias){
        aliasInput.click();
        aliasInput.clear();
        aliasInput.sendKeys(newAlias);
    }

    public void setNewAddress(String newAddress){
        addressInput.click();
        addressInput.clear();
        addressInput.sendKeys(newAddress);
    }

    public void setNewCity(String newCity){
        cityInput.click();
        cityInput.clear();
        cityInput.sendKeys(newCity);
    }

    public void setNewPostalCode(String newPostalCode){
        postcodeInput.click();
        postcodeInput.clear();
        postcodeInput.sendKeys(newPostalCode);
    }

    public void setNewPhone(String newPhone){
        phoneInput.click();
        phoneInput.clear();
        phoneInput.sendKeys(newPhone);
    }

    public boolean checkIfAddressIsCorrect() {

        List<WebElement> articles = driver.findElements(By.tagName("article"));
        String addressText = "";
        for (int i = 0; i < articles.size(); i++) {
            if (articles.get(i).getText().contains("Domowy")) {
                addressText = articles.get(i).getText();
                //System.out.println(addressText);
            }
        }
        if (
                addressText.contains("Prosta 23")
                        && addressText.contains("Szczecin")
                        && addressText.contains("70-250")
                        && addressText.contains("United Kingdom")
                        && addressText.contains("666777444")
        ) {
            System.out.println("Address is correct");
            return true;
        }
        System.out.println("Address is not correct");
        return false;
    }

}

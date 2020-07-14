Final Project of Automotive Tester Course

Test environment:
- MacOS Catalina 10.15.5
- Intellij Idea 2020.1.2
- Java 14.0.1
- Google Chrome 83
- https://prod-kurs.coderslab.pl/index.php

Zadanie warsztatowe 1 - Selenium WebDriver + Cucumber

Utwórz użytkownika manualnie na stronie https://prod-kurs.coderslab.pl/.
Napisz skrypt, który:
•	będzie logować się na tego stworzonego użytkownika
•	wejdzie klikając w kafelek Addresses po zalogowaniu (adres, na którym powinniśmy się znaleźć to: https://prod-kurs.coderslab.pl/index.php?controller=addresses ),
•	kliknie w + Create new address,
•	wypełni formularz New address - dane powinny być pobierane z tabeli Examples w Gherkinie (alias, address, city, zip/postal code, country, phone),
•	sprawdzi czy dane w dodanym adresie są poprawne.
•	usunie powyższy adres klikając w "delete",
•	sprawdzi czy adres został usunięty.

Zadanie warsztatowe 2 - Selenium WebDriver + Cucumber

Napisz skrypt, który:
•	zaloguje się na tego samego użytkownika z zadania 1,
•	wybierze do zakupu Hummingbird Printed Sweater,
•	wybierze rozmiar M,
•	wybierze 5 sztuk według parametru podanego w teście,
•	dodaj produkt do koszyka,
•	przejdzie do opcji - checkout,
•	potwierdzi address (możesz go dodać wcześniej ręcznie),
•	wybierze metodę odbioru - PrestaShop "pick up in store",
•	wybierze opcję płatności - Pay by Check,
•	kliknie na "order with an obligation to pay",
•	zrobi screenshot z potwierdzeniem zamówienia i kwotą.


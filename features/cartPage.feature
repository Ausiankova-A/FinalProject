Feature: Testing Cart for "Oz" website

    Background:
        Given I navigate to the "https://oz.by/" page

    Scenario: As a user, I can add product to the cart
        When I search by phrase "Гарри Поттер и философский камень"
        And I click on "Search > First Search Result" button
        And I put item "Item Page > Add To Cart Button" to the cart
        And I click on "Cart > Cart Button" button
        And I login to application
        Then I expect element "Cart > Item Title" is equal to "Гарри Поттер и философский камень"

    Scenario: As a user, I can delete all products from the cart
        When I search by phrase "Цветы для Элджернона"
        And I click on "Search > First Search Result" button
        And I put item "Item Page > Add To Cart Button" to the cart
        And I search by phrase "Календарь"
        And I click on "Search > First Search Result" button
        And I click on "Item Page > Add To Cart Button" button
        And I click on "Cart > Cart Button" button
        And I login to application
        And I click on "Cart > Check All Checkbox" button
        And I delete item from the cart
        Then I expect element "Cart > Empty Cart Title" is equal to "В корзине пусто. Чтобы найти товары, используйте поиск или выберите товары из просмотренных ранее:"

    Scenario: As a user, I get correct error message when I want to checkout without Name and Surname
        When I search by phrase "Эмили бронте"
        And I click on "Search > First Search Result" button
        And I put item "Item Page > Add To Cart Button" to the cart
        And I click on "Cart > Cart Button" button
        And I login to application
        And I click on "Cart > Checkout Button" button
        Then I expect element "Cart > Name Surname Error Message" is equal to "Необходимо ввести фамилию, имя, отчество Введите фамилию, имя и отчество"

    Scenario: As a user, I can add my Name and Surname for delivery
        When I search by phrase "бядуля"
        And I click on "Search > First Search Result" button
        And I put item "Item Page > Add To Cart Button" to the cart
        And I click on "Cart > Cart Button" button
        And I login to application
        And I fill in "Cart > Name Field" field with "Овсенкова Анастасия Николаевна"
        Then I expect value "Cart > Name Field Data" is equal to "Овсенкова Анастасия Николаевна"

    Scenario: As a user, I can add items to my favorites
        When I search by phrase "Человек-бензопила"
        And I click on "Search > First Search Result" button
        And I put item "Item Page > Add To Cart Button" to the cart
        And I click on "Cart > Cart Button" button
        And I login to application
        And I click on "Cart > Cart Button" button
        And I click on "Cart > First Item In Cart" button
        And I move item to favorites
        And I click on "Personal Account > Personal Account Button" button
        And I click on "Personal Account > Favorites Tab" button
        And I scroll to the "Personal Account > Favorites Area"
        Then I expect element "Personal Account > Favorites Title" should contain "Человек-бензопила"

    Scenario: As a user, Can I add a shipping address
        When I search by phrase "Джейн Эйр"
        And I click on "Search > First Search Result" button
        And I put item "Item Page > Add To Cart Button" to the cart
        And I click on "Cart > Cart Button" button
        And I login to application
        And I click on "Cart > Delivery Address Button" button
        And I click on "Cart > Add Address" button
        And I fill in "Cart > Delivery Street" field with "Плеханова"
        And I fill in "Cart > Delivery House" field with "101"
        And I fill in "Cart > Delivery Flat" field with "38"
        And I fill in "Cart > Delivery Entrance" field with "3"
        And I fill in "Cart > Delivery Floor" field with "3"
        And I click on "Cart > Add Address Button" button
        Then I expect element "Cart > Delivery Address Field" is equal to "ул. Плеханова, дом 101, кв. 38, подъезд 3, этаж 3, г. Минск, Минский район"

    Scenario: As a user, I can add a payment method
        When I search by phrase "Гарри Поттер и философский камень"
        And I click on "Search > First Search Result" button
        And I put item "Item Page > Add To Cart Button" to the cart
        And I click on "Cart > Cart Button" button
        And I login to application
        And I click on "Cart > Payment Method Field" button
        And I click on "Cart > Payment By Installment Card" button
        Then I expect element "Cart > Payment Method Field Data" is equal to "Оплата картой рассрочки Халва"
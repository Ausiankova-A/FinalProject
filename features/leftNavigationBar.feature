Feature: Testing Left Navigation Bar for "Oz" website

    Background:
        Given I navigate to the "https://oz.by/" page


    Scenario Outline: Check names of left navigation menu links
        Then I expect element <number> "Left Navigation Bar > Navigation Links" should be equal "<linkText>"
        Examples:
            | number | linkText                |
            | 1      | Акции и скидки          |
            | 2      | Подарки для каждого     |
            | 3      | Дом, сад, зоотовары     |
            | 4      | Книги                   |
            | 5      | Косметика, парфюмерия   |
            | 6      | Развлечения, творчество |
            | 7      | Детям и мамам           |
            | 8      | Сувениры, галантерея    |
            | 9      | Здоровье, медтехника    |
            | 10     | Канцтовары, учёба       |
            | 11     | Продукты, деликатесы    |
            | 12     | Туризм, отдых, спорт    |
            | 13     | Техника, электроника    |
            | 14     | Магазины OZ             |

    Scenario Outline: Check header of sections in left navigation menu
        When I click on element <number> "Left Navigation Bar > Navigation Links"
        Then I expect element "Section Page > Section Name" is equal to "<linkText>"
        Examples:
            | number | linkText                     |
            | 1      | Акции и скидки               |
            | 2      | Подарки на Новый год         |
            | 3      | Дом, сад, зоотовары          |
            | 4      | Книги                        |
            | 5      | Косметика, парфюмерия        |
            | 6      | Развлечения, творчество      |
            | 7      | Детям и мамам                |
            | 8      | Сувениры, галантерея, одежда |
            | 9      | Здоровье, медтехника         |
            | 10     | Канцтовары, учёба            |
            | 11     | Продукты, деликатесы         |
            | 12     | Туризм, отдых, спорт         |
            | 13     | Техника, электроника         |

    Scenario Outline: As a user, I want to make sure that breadcrumps displayes correctly
        When I click on "Left Navigation Bar > Books Section" button
        And I click on "Books Section > Fiction Literature" button
        And I click on "Books Section > Classic Literature" button
        Then I expect element <number> "Section Page > Bread Crumps" should be equal "<linkText>"
        Examples:
            | number | linkText                  |
            | 1      | OZ                        |
            | 2      | Книги                     |
            | 3      | Художественная литература |
            | 4      | Классическая литература   |

